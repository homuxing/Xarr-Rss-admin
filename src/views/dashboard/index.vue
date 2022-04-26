<template>
  <div class="dashboard-container">
    <div class="dashboard-text">{{ name }}</div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  // computed: {
  //   ...mapGetters([
  //     'name'
  //   ])
  // }
  data() {
    return {
      name: 'Xarr-Rss'
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    display: inline;
    font-weight: 600;
    font-size: 76px;
    line-height: 1.3;
    background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
