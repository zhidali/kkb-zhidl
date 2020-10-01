let Vue = null;

class VueRoute {
  // 构造函数，this指向为构造
  constructor(option){
    this.$options = option;

    // this.current = '#';
    const initial = window.location.hash.slice('#') || '/';
    Vue.util.defineReactive(this, 'current', initial);

    window.addEventListener('hashchange', () => {
      this.current = window.location.hash.slice(1);
    })
  }
}


VueRoute.install = function (_Vue) {
  Vue = _Vue;

  // 组件 页面内使用 this.$router.push() 
  Vue.mixin({
    // 混入， 取main.js Vue实例上的 router,  
    // 挂载到Vue原型上， 让组件都可使用 this.$router
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    }

  })

  Vue.component('router-link', {
    // 注册全局组件，
    // this指向当前组件
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render(h) {
      return h('a', {
        attrs: {
          href: '#' + this.to
        }
      }, this.$slots.default)
    }
  })

  Vue.component('router-view', {

    render(h){
      let component = null;
      const route = this.$router.$options.routes.find(
        (route) => route.path === this.$router.current
        )
      if(route){
        component = route.component
      }

      return h(component);
    }
  })

}

export default VueRoute;