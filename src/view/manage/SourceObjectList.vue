<template>
  <div class="table">
    <el-table
    :data="sourceObjectList"
    height="80%"
    style="width: 100%;position:relative;"
    @row-click="clickRow"
    ref="sourceObjectList"
    @selection-change="handleSelectionChange"
    :cell-style="cellStyle"
    :header-cell-style="headerCellStyle">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column :show-overflow-tooltip="true"
        prop="databaseType"
        label="数据库类型"
        width="100">
      </el-table-column>
    <el-table-column :show-overflow-tooltip="true"
      prop="sysAbbreviation"
      label="系统名称"
      width="120">
    </el-table-column>
    <el-table-column :show-overflow-tooltip="true"
      prop="objectName"
      label="对象名称"
      width="180">
    </el-table-column>
    <el-table-column :show-overflow-tooltip="true"
      prop="createDt"
      label="创建日期"
      width="180">
    </el-table-column>
    <el-table-column :show-overflow-tooltip="true"
      prop="createBy"
      label="创建人"
      width="120">
    </el-table-column>
    <el-table-column :show-overflow-tooltip="true"
      prop="pic"
      label="负责人"
      width="120">
    </el-table-column>
    <!--<el-table-column label="操作">-->
      <!--<template slot-scope="scope">-->
        <!--<el-button-->
          <!--size="mini"-->
          <!--@click="toDevelopDashboard(scope.$index, scope.row)">开发</el-button>-->
      <!--</template>-->
    <!--</el-table-column>-->
  </el-table>

  <el-pagination class="pagination"
    background
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
  </div>
</template>
<script>
  import eventBus from '@/assets/eventBus.js'
  export default {
    name:'sourceObjectList',
    data () {
      var sourceObjectList=[];
      var dialogVisible=false;
      var multipleSelection;
      return {
        sourceObjectList,
        dialogVisible,
        multipleSelection,
      }
    },
    components:{
    },
    created(){
      this.getsourceObjectList();
    },
    methods:{
      cellStyle({row, column, rowIndex, columnIndex}){
        return 'padding:3px;font-size:7px'
      },
      headerCellStyle({row, column, rowIndex, columnIndex}){
        return 'padding:3px;font-size:14px'
      },
      getsourceObjectList(){
        this.$axios.post('http://localhost:8081/sourceObjectInfo/getSourceObjectListByLevel',
          {level:1})
          .then(response =>{
            console.log(response)
            this.sourceObjectList = JSON.parse(response.data.msg)
          })
      },
      clickRow(row){
        this.$refs.sourceObjectList.toggleRowSelection(row)
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        eventBus.$emit('to-getMetaData',this.multipleSelection)
      },

      // toDevelopDashboard(index,row){
      //   // if(this.$refs[timelineDialog]){
      //   //   this.$refs.timelineDialog.initForm(row);
      //   // }
      //   this.row=row
      //   this.dialogVisible= true;
      // }
    }
  }
</script>
<style>
  .pagination{
    position: fixed;
    margin-bottom: 20px;
  }
  .developList-expand {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .el-form-item{
    display: flex;
    flex-direction: row;
    text-align: left;
  }
  .el-form-item__label{
    color: #99a9bf;
    font-size: 14px;
  }
 .el-form-item__content {
   color: #99a9bf;
    font-size: 14px;
  }
  .table{
    position: relative;
    height:100%;
  }
</style>
