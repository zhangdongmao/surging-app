<template>
  <div>
    <el-button type="primary" plain @click="excelAddSourceSystemRanger()">系统信息加载</el-button>
    <el-button type="primary" plain @click="excelAddSourceObjectRanger()">表信息加载</el-button>
  </div>
</template>
<script>
  export default {
    methods: {
      excelAddSourceSystemRanger() {
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
        this.$axios.post('http://localhost:8081/etlRanger/excelAddSourceSystemRanger')
          .then(response => {
            if(response.data.code==500){
              this.$message.error('源系统初始化失败，查看是否有已存在的项!');
            }else if(response.data.code==200){
              this.$message.success('源系统初始化成功!');
            }
          })
          .catch(error =>{
            this.$message.error('源系统初始化失败!');
          })
        loading.close();
      },
      excelAddSourceObjectRanger() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.$axios.post('http://localhost:8081/etlRanger/excelAddSourceObjectRanger')
          .then(response => {
            if(response.data.code==500){
              this.$message.error('载入表信息失败，查看是否有已存在的项!');
            }else if(response.data.code==200){
              this.$message.success('载入表信息成功!');
            }
          })
          .catch(error =>{
            this.$message.error('载入表信息失败!');
          })
        loading.close();
      }
    }
  }
</script>
