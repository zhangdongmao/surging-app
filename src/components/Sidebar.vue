<template>
    <el-menu
      router
      default-active="this.$route.path"
      class="el-menu-vertical-demo sidebar"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>管理</span>
        </template>
        <el-menu-item index="/manageDashboard">管理面板</el-menu-item>
        <el-menu-item-group>
          <template slot="title">抽取范围管理</template>
          <el-menu-item index="">系统信息</el-menu-item>
          <el-menu-item index="/objectList">表清单</el-menu-item>
          <el-menu-item index="1-2">已开发</el-menu-item>
          <el-menu-item index="/metaDataList">元数据信息</el-menu-item>
        </el-menu-item-group>
        <!--<el-submenu index="1-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
        <!--</el-submenu>-->
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>开发</span>
        </template>
          <el-menu-item index="/metaDataList">元数据信息</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
</template>
<script>
  export default {
    data() {
      return {
        navList:[
          {name:'/Table',navItem:'发现项目'},
          {name:'/communityActivity',navItem:'社区动态'},
          {name:'/publishProject',navItem:'发布项目'},
          {name:'/personalCenter',navItem:'个人中心'},
          {name:'/manageCenter',navItem:'管理员中心'},
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.sidebar{
  position:relative;
  height:100%;
}
</style>
