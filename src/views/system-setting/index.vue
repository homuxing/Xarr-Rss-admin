<template>
  <div class="system-setting">
    <div class="setting-group">
      <h3 class="syst-title">Sonarr设置</h3>
      <el-form :label-width="formLabelWidth" :model="sonarr">
        <el-form-item label="请求地址">
          <el-input v-model="sonarr.path" />
        </el-form-item>
        <el-form-item label="ApiKey">
          <el-input v-model="sonarr.apiKey" />
        </el-form-item>
      </el-form>
    </div>
    <div class="setting-group">
      <h3 class="syst-title">Qb设置</h3>
      <el-form :label-width="formLabelWidth" :model="qb">
        <el-form-item label="服务地址">
          <el-input v-model="qb.apiKey" />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="qb.user" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="qb.password" />
        </el-form-item>
        <el-button
          class="setting-group-button"
          type="info"
          @click="bindQbTest"
        >测试</el-button>
      </el-form>
    </div>
    <div class="setting-group">
      <h3 class="syst-title">TheMoviedb</h3>
      <el-form :label-width="formLabelWidth" :model="moviedb">
        <el-form-item label="ApiKey">
          <el-input v-model="moviedb.apiKey" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { getSystemSetting, saveSystemSetting } from '@/api/system'
export default {
  name: 'SystemSetting',
  data() {
    return {
      formLabelWidth: '100px',
      sonarr: {
        path: '',
        apiKey: ''
      },
      qb: {
        server: '',
        user: '',
        password: ''
      },
      moviedb: {
        apiKey: ''
      }
    }
  },
  created() {
    // getSystemSetting().then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    bindQbTest() {
      console.log(this.qb, this.sonarr, this.moviedb)
    }
  },
}
</script>

<style lang="scss" scoped>
.system-setting{
  padding: 30px;
  .setting-group{
    &-button{
      margin-left: 100px;
    }
  }
}
</style>
