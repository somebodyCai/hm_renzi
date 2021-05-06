<template>
  <div class="dashboard-container">
    <div class="app-container">

      <el-card class="tree-card">
        <!-- 用了一个行列布局 -->
        <treeTool :tree-node="{name:'江苏传智播客黑马程序员',manager:'负责人'}" :isroot="true" />
        <hr>
        <el-tree :data="departs" :props="defaultProps">
          <template #default="scoped">
            <treeTool :tree-node="scoped.data" :isroot="false" />
          </template>
        </el-tree>
      </el-card>

    </div>
  </div>
</template>

<script>
import treeTool from './component/treeTool.vue'
export default {
  components: {
    treeTool
  },
  data() {
    return {
      departs: [{ name: '总裁办', manager: '曹操', children: [{ name: '董事会', manager: '曹丕' }] },
        { name: '行政部', manager: '刘备' },
        { name: '人事部', manager: '孙权' }],
      defaultProps: {
        label: 'name' // 表示 从这个属性显示内容
      }
    }
  }
}

</script>

<style scoped>
.tree-card {
  padding: 30px  140px;
  font-size:14px;
}
</style>
