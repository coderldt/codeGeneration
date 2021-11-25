<template>
  <div id="basicData" class="df fd-col">
    <div id="msg" class="commonBox" style="margin-top: 0;">
      <div class="title">搜索表格</div>
      <el-row :gutter="20">
        <el-col :span="12"><Options /></el-col>
        <el-col :span="12"><div class="grid-content bg-purple" /></el-col>
      </el-row>
    </div>
    <div id="result" class="commonBox">
      <div class="title">效果预览</div>
      <div class="content">
        <div class="header">
          <HeaderSkeleton />
        </div>
        <div class="table">
          <TableSkeleton />
        </div>
        <div class="pagination">
          <PaginationSkeleton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HeaderSkeleton, TableSkeleton, PaginationSkeleton } from './skeleton'
import Options from './children/options.vue'
export default {
  components: {
    HeaderSkeleton,
    TableSkeleton,
    PaginationSkeleton,
    Options
  },
  data() {
    return {
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">
#basicData {
  margin: 20px;
  min-height: calc(100vh - 84px - 40px);

  #msg {
    // flex: 3;
  }

  #result {
    flex: 10;
  }

  .commonBox {
    margin-bottom: 0;
  }
  >div {
    width: 100%;
  }
}
</style>
