<template>
  <el-dialog :visible.sync="visible" :show-close="false"
   width="30%" :modal="true" :close-on-click-modal="false"
   :close-on-press-escape="false">
    <div class="block">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in objectInfo"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          hide-timestamp
          :timestamp="activity.timestamp">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
    </div>
    <el-button @click.stop="cancelModal">取 消</el-button>
  </el-dialog>
</template>
<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
    },
    objectInfo:[],
    data() {
      var objectInfo=[]
      return {
        objectInfo:[{
          content: '正在查询数据量',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }],
      };
    },
    methods: {
      initForm(row){
        alert(row)
        this.objectInfo=[];
        if(this.$refs.objectInfo){
          this.$refs.objectInfo.resetFields();
        }
        if( !row.dataVolume){
          this.$axios.post('http://localhost:8081/developInfo/getDevelopList?pic=zhangdongmao')
            .then(response =>{
              console.log(response)
              this.developList = JSON.parse(response.data.msg)
            })
        }else{
          var objectInfoItem={
            content: '数据量:'+row.dataVolume,
            timestamp: '2018-04-12 20:46',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-more'}
          this.objectInfo.push(objectInfoItem)
        }

      },
      cancelModal(){
        // 关闭弹窗，触发父组件修改visible值
        this.$emit('update:visible', false);
      }
    }
  };
</script>
