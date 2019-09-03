import Vue from "vue"
import Router from "vue-router"
import Index from "../index.vue"
import Home from "../components/pages/home"
import Artists from "../components/pages/artists"
import ListCard from "../components/pages/listcard"
import MoreList from "../components/pages/morelist"
import MusicPlay from "../components/pages/musicplay"
import Search from "../components/pages/search"
import UseCenter from "../components/pages/usecenter"
Vue.use(Router)

export default new Router({
  routes:[
    {
      path:"/",
      name:"index",
      redirect:"home",
      component:Index,
      children:[
        {
          path:"home",
          component:Home
        },
        {
          path:"artists",
          component:Artists,
        },
        {
          path:"listcard",
          component:ListCard,

        },
        {
          path:"usecenter",
          component:UseCenter
        },
        {
          path:"search",
          component:Search
        }



      ]
    }
  ]
})
