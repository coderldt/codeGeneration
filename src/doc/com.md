## 两大模块
- 基本表格数据展示

- 弹窗（编辑修改表单）

### 基本组件
- form 表单
  + mode （row 分为几分）
  + label-position label位置
  + label-width    label宽度
  + 搜索按钮 
    + 是否单独一行
    + 是否在最右侧
    + 紧贴表单

- commonAttr 公共属性
  + label （表单展示字段）
  + value （表单绑定值）
  + rules （表单验证规则）

- input  输入
  + ...commonAttr
  + type  （input类型 text、password、textarea）
  + readonly （只读）
  + placeholder （默认提示框）

- select 下拉
  + ...commonAttr
  + placeholder （默认提示框）
  + multiple (是否多选)
  + options(array)
    + label  (展示字)
    + value  (key)

- switch 开关
  + ...commonAttr
  + active-value  （打开时候的值 默认为true）
  + inactive-value（关闭时候的值 默认为false）

- checkbox 多选
  + ...commonAttr
  + options(array)
    + label  (展示字 也是选中时候的值)

- Pagination 分页
  + page 
  + pageSize
  + pageSizes
    + array [ 100, 200, 300, 400 ]
  + total
  + layout
    + array [ sizes, prev, pager, next, jumper, ->, total ]
  + isSmall

- table 表格
  + prop （属性值）
  + label（展示标题）
  + width （宽度）
  + fixed是否浮动
    + left
    + right

  + 是否有操作
  + fixed是否浮动 
    + left
    + right
    + 子元素
      + 按钮 （1.弹窗 2.普通 ）
        + 内容
        + 1 -> 提示语
        + key （作为事件名）

  + border （是否显示边框）
  + stripe （是否斑马纹）
  + 
  
- dialog 弹窗
  + width 宽度
  + type
    + 普通 -> title
    + 编辑添加 -> 自动判断id
