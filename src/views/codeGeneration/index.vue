<template>
  <div class="codeGeneration commonBox">
    <div class="title">模板选择</div>
    <div class="content">
      <div
        class="item df fd-col"
        v-for="(item, index) in templates"
        :key="index"
      >
        <el-image
          class="f1"
          fit="cover"
          :src="item.img"
          :preview-src-list="[item.img]"
        >
        </el-image>
        <span @click="onTemplateClick(item)">{{ item.label }} <span style="text-decoration: underline;">(点这)</span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { templates } from "@/config/template.js";
export default {
  data() {
    return {
      templates: Object.freeze(templates),
    };
  },
  created() {
  },
  methods: {
    onTemplateClick(item) {
      this.$router.push(item.path)
    }
  }
};
</script>

<style scoped lang="scss">
.codeGeneration {
  .content {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;

    .item {
      width: 20%;
      margin-right: 2%;

      .el-image {
        padding: 20px;
      }

      span {
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
}
</style>