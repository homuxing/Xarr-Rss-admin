<template>
  <div class="source-setting">
    <el-button class="add-source-btn" type="primary" @click="openDialog">添加数据源</el-button>
    <el-table
      :data="sourceData"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="ID"
        width="70"
      />
      <el-table-column
        prop="name"
        label="名称"
        width="300"
      />
      <el-table-column
        prop="url"
        label="URL"
        width="400"
      />
      <el-table-column
        prop="refresh_time"
        label="刷新间隔"
        width="180"
      />
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="bindEdit(scope.row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="bindDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="新增数据源" :visible.sync="dialogFormVisible">
      <el-form :model="newSourceForm">
        <el-form-item label="URL" :label-width="formLabelWidth">
          <el-input v-model="newSourceForm.url" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="newSourceForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getDataSource } from '@/api/dataSource'
export default {
  name: 'SourceSetting',
  data() {
    return {
      sourceData: [],
      dialogFormVisible: false,
      formLabelWidth: '100px',
      newSourceForm: {
        url: '',
        name: ''
      }
    }
  },
  created() {
    getDataSource().then((res) => {
      this.sourceData = res.data
      console.log(this.sourceData)
    })
  },
  methods: {
    bindEdit(row) {
      console.log(row)
      this.$router.push({ path: 'edit', query: { id: row.id }})
    },
    bindDelete(row) {
      console.log(row)
    },
    openDialog() {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.source-setting{
  padding: 30px;
}
</style>