import Vue from 'vue'
import Router from 'vue-router'
import Bookrack from './bookrack'
import Choiceness from './choiceness'
import Allclass from './allclass'
import ClassShow from './classshow'
import Detail from './detail'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    Bookrack,
    Choiceness,
    Allclass,
    ClassShow,
    Detail,
    { path: '/*', redirect: Bookrack}
  ]
})
