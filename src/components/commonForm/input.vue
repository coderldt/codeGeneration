<template>
  <el-form ref="form" :model="form" label-width="130px">
    <el-form-item label="type">
      <el-radio-group v-model="form.type">
        <el-radio v-for="(item, index) in typeOptions" :key="index" :label="item.key">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="status">
      <el-radio-group v-model="form.status">
        <el-radio v-for="(item, index) in readonlyOptions" :key="index" :label="item.key">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="placeholder">
      <el-input v-model="form.placeholder"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button>取消</el-button>
      <el-button type="primary">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { typeOptions, readonlyOptions, InputForm } from '@/config/input'
export default {
  data() {
    return {
      typeOptions,
      readonlyOptions,
      form: {}
    }
  },
  created() {
    console.log(new InputForm());
    this.form = new InputForm()
  }
};
</script>

<style>
</style>