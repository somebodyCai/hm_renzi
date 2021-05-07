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
import { getDepartment } from '@/api/departments'
export default {
  components: {
    treeTool
  },
  data() {
    return {
      departs: [],
      defaultProps: {
        label: 'name' // 表示 从这个属性显示内容
      }
    }
  },
  mounted() {
    // 页面加载后调用 getDepartment 获取部门数据 实现页面动态渲染
    this.getDepartment()
  },
  // 获取部门数据函数封装
  methods: {
    async  getDepartment() {
      const res = await getDepartment()
      console.log(res)
      this.departs = res.depts
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
