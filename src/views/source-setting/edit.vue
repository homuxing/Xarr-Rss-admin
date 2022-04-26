<template>
  <div class="source-setting-edit">
    <h2>数据源编辑</h2>
    <el-form :label-width="formLabelWidth" :model="source">
      <el-form-item label="ID">
        <el-input
          v-model="source.id"
          readonly
        />
      </el-form-item>
      <el-form-item label="URL">
        <el-input
          v-model="source.url"
        />
      </el-form-item>
      <el-form-item label="名称">
        <el-input
          v-model="source.name"
        />
      </el-form-item>
      <div class="reg-group">
        <h3>默认筛选正则</h3>
        <el-form-item label="必须包含">
          <el-input
            v-model="source.requiredReg"
          />
        </el-form-item>
        <el-form-item label="必须不包含">
          <el-input
            v-model="source.neverReg"
          />
        </el-form-item>
      </div>
      <el-button
        class="save-btn"
        type="primary"
        @click="bindSave"
      >保存</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SourceSettingEdit',
  data() {
    return {
      formLabelWidth: '100px',
      source: {
        id: '1',
        url: '',
        name: '',
        requiredReg: '',
        neverReg: ''
      }
    }
  },
  mounted() {
    this.source.id = this.$route.query.id
  },
  methods: {
    bindSave() {
      console.log(this.source)
    }
  },
}
</script>

<style lang="scss" scoped>
.source-setting-edit{
  padding: 30px;
  .save-btn{
    margin-left: 100px;
  }
}
</style>