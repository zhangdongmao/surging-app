<template>
  <el-row flex class="container">
      <navbar></navbar>
    <div class="body">
      <div class="sidebar">
        <sidebar></sidebar>
      </div>
      <div class="router">
        <!--<breadcrumb></breadcrumb>-->
        <router-view/>
      </div>
    </div>
  </el-row>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Index',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    'Navbar':Navbar,
    'Sidebar':Sidebar,
    // 'Breadcrumb':Breadcrumb
  }
}
</script>

<style scoped>
.container{
  position: relative;
  height: 100%;
}
  .sidebar{
    position: relative;
    height: 100%;
    width:200px;
    display:inline-block;
  }
  .body{
    position: relative;
    height: 93%;
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content:center;
  }
  .router{
    position: relative;
    height: 100%;
    width:100%;
    margin-left: 15px;
    margin-right: 20px;
  }
</style>
