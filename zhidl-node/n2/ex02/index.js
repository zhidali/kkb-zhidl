module.exports.compose = middlewares => {
    // 排序 zhidl
    return function () {
        return dispatch(0)
        function dispatch(i) {
            let fn = middlewares[i];
            if(!fn) {
                return Promise.resolve();
            }
            return Promise.resolve(
                fn(function next() {
                    return dispatch(i + 1)
                })
            )
        }
    }
}
