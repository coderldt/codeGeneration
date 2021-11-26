<template>
  <div id="options">
    <el-table :data="getData" :show-header="false" border style="width: 100%">
      <el-table-column prop="title" width="100" />
      <el-table-column prop="name" label="姓名">
        <template slot-scope="scope">
          <el-progress
            :percentage="scope.row.status"
            :show-text="false"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="onRowEdit(scope.row)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['result']),
    getData() {
      const list = []
      Object.entries(this.result).map(([key, value]) => {
        const { title, step, totalStep } = value
        list.push({
          id: key,
          title,
          status: (step / totalStep) * 100,
          step,
          totalStep
        })
      })
      return list
    }
  },
  methods: {
    onRowEdit(row) {
      this.$emit('onEdit', row)
    }
  }
}
</script>

<style scoped lang="scss">
ul > li {
  display: flex;
  width: 100%;
  list-style: none;
}
</style>
