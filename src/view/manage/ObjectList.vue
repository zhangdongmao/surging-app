<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="客户清单" name="sourceObjectList">
      <source-object-list></source-object-list>
    </el-tab-pane>
    <el-tab-pane label="元数据" name="second">
      <meta-data-list></meta-data-list>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    aaaa
  </el-tabs>
</template>
<script>
  import SourceObjectList from '@/view/manage/SourceObjectList'
  import MetaDataList from '@/view/metaData/MetaDataList'
  export default {
    name:'objectList',

    components:{
      SourceObjectList,
      MetaDataList,
    },
    data() {
      return {
        activeName: 'sourceObjectList'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style>
  .el-tabs {
    position: relative;
    height: 100%;
  }
  .el-tabs__content{
    position: relative;
    height: 100%;
  }
  .el-tab-pane{
    position: relative;
    height: 100%;
  }
</style>
