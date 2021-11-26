<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="商品 ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="商品名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="描述"
        prop="desc">
      </el-table-column>
    </el-table>
    <!-- {{form}}
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="标签值">
          <el-input placeholder="请输入label标签" v-model="form.labelWidth">
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="绑定值">
          <el-input placeholder="请输入绑定变量" v-model="form.labelWidth">
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="控件类型">
          <el-input placeholder="请输入绑定变量" v-model="form.labelWidth">
          </el-input>
        </el-form-item>
      </el-col> -->
      <!-- <InputForm :form="form"></InputForm> -->
    <!-- </el-row> -->
    
  </el-form>
</template>

<script>
import InputForm from '@/components/commonForm/input'
export default {
  data() {
    return {
      tableData: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
    }
  },
  components: {
    InputForm
  }
}
</script>

<style>

</style>