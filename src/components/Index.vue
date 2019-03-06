<template>
  <div class="container">
    <navbar></navbar>
    <sidebar></sidebar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'Index',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    'Navbar':Navbar,
    'Sidebar':Sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  position: relative;
  height: 100%;
}
</style>
