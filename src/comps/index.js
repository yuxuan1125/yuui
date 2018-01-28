import './styles/index.scss'


import Button from './components/button/index'
import Modal from './components/modal/index'
import Input from './components/input/index'

const components = {
  Button,
  Modal,
  Input
}

const install = function (Vue) {
  if (install.installed) return
  // 这样可以让组件支持全局引入和按需引入
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  }) 

  //Vue.prototype.$modal = Modal
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
