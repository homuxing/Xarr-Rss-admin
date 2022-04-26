<template>
  <div v-loading="loading" class="rss-table">
    <div class="table-btns">
      <el-button
        type="primary"
        size="small"
      >添加剧集</el-button>
      <el-button
        type="danger"
        size="small"
      >删除分组</el-button>
    </div>
    <el-table
      ref="rssTable"
      :data="rssGroupData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        label="中文名称"
        prop="title"
        width="300"
      ></el-table-column>
      <el-table-column
        label="英文名称"
        prop="name"
        width="auto"
      ></el-table-column>
      <el-table-column
        label="操作"
        width="200"
      >
        <template slot-scope="scope">
          <div>
            <el-button
              type="text"
              size="mini"
              @click="handleEdit(scope.row)"
            >编辑规则</el-button>
            <el-button
              type="danger"
              size="mini"
              @click="handleDelete(scope.row)"
            >删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="rss-table-pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getGroupMedias } from '@/api/group'
export default {
  name: 'RssTable',
  data() {
    return {
      loading: true,
      groupId: '',
      rssGroupData: [],
      selections: []
    }
  },
  watch: {
    '$route'(to) {
      this.groupId = to.params.id
      console.log(this.groupId)
      this.getGroupMedias()
    },
    deep: true
  },
  created() {
    this.groupId = this.$route.params.id
    this.getGroupMedias()
  },
  methods: {
    getGroupMedias() {
      this.loading = true
      getGroupMedias(this.groupId).then(res => {
        this.rssGroupData = res.data
        this.loading = false
      })
    },
    handleSelectionChange(val) {
      this.selections = val
    }
  }
}
</script>

<style lang="scss" scoped>
.rss-table{
  .rss-table-pagination{
    margin-top: 20px;
    text-align: center;
  }
}
</style>