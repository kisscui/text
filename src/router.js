import Vue from 'vue'
import Router from 'vue-router'

import nodePanel from "@/views/nodePanel.vue"
import nodeList from "@/views/nodeList.vue"
import nodeDatail from "./components/nodeDetail.vue"
Vue.use(Router)

const routes=[
   {
     path:'/',
     component:nodePanel,
     redirect: '/all',
     children:[
       {
         path:":tab",
         name:'tab',
         component:nodeList
       }
     ]
   },
   {
     path:"/topic/:id",
     name:"topic",
     component:nodeDatail
   }
 ]
export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active',
})
