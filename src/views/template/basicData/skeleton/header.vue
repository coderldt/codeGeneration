<template>
  <el-form :inline="true" :model="form" class="demo-form-inline">
    <el-form-item label="表单1">
      <el-input v-model="form.form1"></el-input>
    </el-form-item>
    <el-form-item label="表单2">
      <el-input v-model="form.form2"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        form1: '',
        form2: '',
      }
    }
  }
}
</script>