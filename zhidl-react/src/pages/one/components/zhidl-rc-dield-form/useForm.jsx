import React from 'react';
// 存储Form的数据
class FormStore {
  constructor() {
    // 这里存储Form要处理的数据
    this.store = {};

    // 存储触发setState的组件
    // this.fieldEntities = [];
    this.fieldEntities = {};
    
  }

  // 保存组件this
  registerEntity = (entity) => {
    // this.fieldEntities.push(entity);
    
    this.fieldEntities = {
      ...this.fieldEntities,
      [entity.props.name]: entity
    }
  }

  // 找到对应name 返回store
  getFieldValue = (name) => {
    const v = this.store[name];
    return v;
  }

  // 更新store 更新页面
  // {name: 'password'}
  setFieldValue = (newStore) => {
    // step1： 修改store数据
    this.store = {
      ...this.store,
      ...newStore
    }
    // step2： 更新组件 
    Object.keys(newStore).forEach(name => {
      this.fieldEntities[name].onStoreChange();
    });
  }

  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      setFieldValue: this.setFieldValue,
      registerEntity: this.registerEntity
    }
  }
}

// 自定义hook
export default function useForm() {
  const formRef = React.useRef();
  if(!formRef.current){
    const formStore = new FormStore();
    formRef.current = formStore.getForm();
  }
  return [formRef.current];
}