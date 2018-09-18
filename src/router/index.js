import Vue from 'vue'
import Router from 'vue-router'
import NewSong from '@/views/new-song/newSong'
import Rank from '@/views/rank/rank'

import Search from '@/views/search/search'
import Info from '@/components/Info'
import SearchBar from '@/components/search-bar'
import {routes} from './router'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    ...routes,
    {
      path: '/search',
      name: 'Search',
      component:Search
    },
    {
      path: '/rank/info/:id',
      name: 'Info',
      component:Info
    }

  ]
})
