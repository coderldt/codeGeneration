<template>
  <el-form ref="form" :model="form" label-width="80px">
    {{form}}
    <el-form-item label="位置分布">
      <el-radio-group v-model="form.mode">
        <el-radio v-for="(item, index) in formMode" :key="index" :label="item.key">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="标题位置">
      <el-radio-group v-model="form.labelPosition">
        <el-radio v-for="(item, index) in labelPos" :key="index" :label="item.key">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="标题宽度">
      <el-input placeholder="请输入内容" type="number" style="width: 300px;" v-model="form.labelWidth">
        <template slot="append">px</template>
      </el-input>
    </el-form-item>
    <el-form-item label="按钮分布">
      <el-radio-group v-model="form.btnMode">
        <el-radio v-for="(item, index) in btnMode" :key="index" :label="item.key">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
import { formMode, labelPos, btnMode } from '@/config/form'
export default {
  data() {
    return {
      form: {
        mode: '',
        labelPosition: '',
        labelWidth: 200,
        btnMode: ''
      },
      formMode,
      labelPos,
      btnMode
    }
  }
}
</script>

<style>
</style>
