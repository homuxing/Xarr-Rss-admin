<template>
  <div class="rss-group">
    <el-card v-loading="loading" class="rss-group-menu">
      <RssSidebar :menu="menu" />
    </el-card>
    <el-card class="rss-group-detail">
      <router-view />
    </el-card>
  </div>
</template>

<script>
import RssSidebar from './_components/rss-sidebar.vue'
import { getGroups } from '@/api/group'
export default {
  name: 'RssGroup',
  components: { RssSidebar },
  data() {
    return {
      loading: true,
      menu: []
    }
  },
  created() {
    getGroups().then(res => {
      this.menu = res.data
      this.loading = false
    })
  }
}
</script>

<style lang="scss" scoped>
.rss-group{
  padding: 30px;
  display: flex;
  justify-content: space-between;
  &-menu{
    width: 240px;
    border: 1px solid #eee;
    max-height: 500px;
  }
  &-detail{
    flex: 1;
    margin-left: 20px;
    border: 1px solid #eee;
    height: 700px;
  }
}
</style>