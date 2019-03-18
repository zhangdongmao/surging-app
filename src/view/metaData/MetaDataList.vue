<template>
  <div>
    <el-input class="search-input" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21" clearable>
    </el-input>
    <el-button type="primary" plain @click="getDataVolume()">搜索</el-button>
    <el-button type="primary" plain @click="getDataVolume()">查询数据量</el-button>
    <hr>
  <el-table
    :data="metaDataList"
    height="500"
    style="width: 100%"
    @row-click="clickRow"
    ref="metaDataList"
    @selection-change="handleSelectionChange"
    :cell-style="cellStyle"
    :header-cell-style="headerCellStyle">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="developList-expand">
          <el-form-item label="属主/数据库">
            <span>{{ props.row.owner }}</span>
          </el-form-item>
          <el-form-item label="对象类型">
            <span>{{ props.row.objectType }}</span>
          </el-form-item>
          <el-form-item label="数据量">
            <span>{{ props.row.dataVolume }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="databaseType"
      label="数据库类型"
      width="120"
      :filters="[{text: 'mysql', value: 'mysql'}, {text: 'oracle', value: 'oracle'}]"
      :filter-method="filterHandler">
    </el-table-column>
    <el-table-column
      prop="sysAbbreviation"
      label="系统名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="objectName"
      label="对象名称"
      width="240">
    </el-table-column>
    <el-table-column
      prop="owner"
      label="属主/数据库名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="objectType"
      label="对象类别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="dataVolume"
      label="数据量"
      width="100">
    </el-table-column>
    <el-table-column
      prop="developStatus"
      label="开发状态"
      width="100">
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
  <timeline-dialog
    ref="timelineDialog"
    v-if="dialogVisible"
    v-bind:row="row"
    :visible.sync="dialogVisible">
  </timeline-dialog>
  </div>
</template>
<script>
  import eventBus from '@/assets/eventBus.js'
  import TimelineDialog from '@/components/TimelineDialog'
  export default {
    name:'metaDataList',
    data () {
      var metaDataList=[];
      var dialogVisible=false;
      var multipleSelection;
      return {
        metaDataList,
        dialogVisible,
        multipleSelection,
      }
    },
    components:{
      'TimelineDialog':TimelineDialog
    },
    created(){
      this.getMetaDataList();
    },
    methods:{
      cellStyle({row, column, rowIndex, columnIndex}){
        return 'padding:3px;font-size:7px'
      },
      headerCellStyle({row, column, rowIndex, columnIndex}){
        return 'padding:3px;font-size:14px'
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      getMetaDataList(){
        this.$axios.post('http://localhost:8081/sourceObjectInfo/getSourceObjectListByLevel',
          {level:2})
          .then(response =>{
            console.log(response)
            this.metaDataList = JSON.parse(response.data.msg)
          })
      },
      clickRow(row){
        this.$refs.metaDataList.toggleRowSelection(row)
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        eventBus.$emit('to-getDataVolume',this.multipleSelection)
      },
      getDataVolume(){
        var tableInfos=JSON.stringify(this.multipleSelection)
        if(tableInfos){
          this.$axios.post('http://localhost:8081/dataInvestigate/getDataVolume',
            {tableInfos:tableInfos})
            .then(response =>{
              this.getMetaDataList()
            })
        }else{
          this.$message({
            message: '请选择要查询的表',
            type: 'warning'
          });
        }
      }
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
  .search-input{
    width: 20%;
  }
  .el-form-item{
    display: flex;
    flex-direction: row;
    text-align: left;
  }
  .el-form-item__label{
    color: #99a9bf;
    font-size: 10px;
  }
 .el-form-item__content {
   color: #99a9bf;
    font-size: 10px;
  }
</style>
