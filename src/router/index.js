import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import MetaDataList from '@/view/metaData/MetaDataList'
import ObjectList from '@/view/manage/ObjectList'
import SourceObjectList from '@/view/manage/SourceObjectList'
import DevelopDashboard from '@/view/develop/DevelopDashboard'
import ManageDashboard from '@/view/manage/ManageDashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {path:'/metaDataList',name:'MetaDataList',component:MetaDataList},
        {path:'/developDashboard',name:'DevelopDashboard',component:DevelopDashboard},
        {path:'/objectList',name:'ObjectList',component:ObjectList},
        {path:'/sourceObjectList',name:'SourceObjectList',component:SourceObjectList},
        {path:'/manageDashboard',name:'ManageDashboard',component:ManageDashboard},]
    }
  ]
})
