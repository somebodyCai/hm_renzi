<template>
  <div style="width:100%">
    <el-row type="flex" justify="space-between" align="middle" style="height: 40px;width:100%">
      <el-col>
        <strong v-if="isroot"><i class="el-icon-office-building" />{{ treeNode.name }}</strong>
        <span v-else>{{ treeNode.name }}</span>
      </el-col>
      <el-col :span="4">
        <el-row type="flex" justify="end">
          <!-- 两个内容 -->
          <el-col>{{ treeNode.manager }}</el-col>
          <el-col>
            <!-- 下拉菜单 element -->
            <el-dropdown>
              <span>
                操作<i class="el-icon-arrow-down" />
              </span>
              <!-- 下拉菜单 -->
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>添加子部门</el-dropdown-item>
                <el-dropdown-item v-if="!isroot">编辑子部门</el-dropdown-item>
                <el-dropdown-item v-if="!isroot">删除子部门</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    treeNode: {
      type: Object,
      required: true
    },
    isroot: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style>

</style>
