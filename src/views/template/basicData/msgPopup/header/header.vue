<template>
  <el-dialog
    title="搜索表单"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <el-steps :active="active" finish-status="success">
      <el-step title="基本信息" />
      <el-step title="具体内容" />
    </el-steps>
    <span />
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {

}
</script>

<style>

</style>
