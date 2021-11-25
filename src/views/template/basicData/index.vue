<template>
  <div id="basicData" class="df fd-col">
    <div id="" class="commonBox">
      <div class="title">搜索表格</div>
    </div>
    <div id="result" class="commonBox">
      <div class="title">效果预览</div>
      <div class="content f1 df fd-col">
        <div class="border header">
          <HeaderSkeleton></HeaderSkeleton>
        </div>
        <div class="border table"></div>
        <div class="border pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSkeleton from './skeleton/header.vue'
export default {
  data() {
    return {
      result: {
        header: {},
        table: {},
        pagination: {}
      }
    }
  },
  components: {
    HeaderSkeleton
  }
}
</script>

<style scoped lang="scss">
#basicData {
  margin: 20px;
  min-height: calc(100vh - 84px - 40px);

  .commonBox {
    margin-bottom: 0;
  }
  >div {
    width: 100%;
  }
  // .content {
  //   width: 100%;
  // }

  // .border {
  //   width: 100%;
  //   border: 1px solid red;
  // }

  // .header {
  //   flex: 2;
  //   margin-bottom: 10px;
  // }

  // .table {
  //   flex: 10;
  //   margin-bottom: 10px;
  // }

  // .pagination {
  //   flex: 1;
  // }
}

#result {
  flex: 6;
}

</style>