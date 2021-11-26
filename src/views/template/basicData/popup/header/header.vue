<template>
  <el-dialog
    title="搜索表单"
    :visible.sync="getDialogVisible"
    width="60%"
    :before-close="handleClose"
  >
    <div class="step">
      <el-steps :active="active" finish-status="success">
        <el-step title="基本信息" />
        <el-step title="具体内容" />
      </el-steps>
    </div>
    <div class="content">
      <BaseForm v-show="active === 0"></BaseForm>
      <ContentForm v-show="active === 1"></ContentForm>
    </div>
    <span />
    <span slot="footer" class="dialog-footer">
      <el-button @click="getDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="active += 1">下一步</el-button>
    </span>
  </el-dialog>
</template>

<script>
import BaseForm from './base.vue'
import ContentForm from './content.vue'
export default {
  props: {
    value: {
      type: Boolean
    }
  },
  data() {
    return {
      active: 0
    }
  },
  components: {
    BaseForm,
    ContentForm
  },
  computed: {
    getDialogVisible: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    handleClose() {}
  }
}
</script>

<style lang="scss" scoped>
.step {
  margin: 0 60px 10px;
}
</style>
