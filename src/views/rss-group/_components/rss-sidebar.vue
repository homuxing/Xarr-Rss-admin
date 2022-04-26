<template>
  <div class="rss-sidebar">
    <ul class="menu-list">
      <li
        v-for="(menuItem, menuIndex) in menu"
        :key="menuIndex"
        :class="['menu-item', $route.params.id == menuItem.id ? 'menu-item-active' : '']"
        @click="toDetail(menuItem)"
      >{{ menuItem.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RssSidebar',
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  methods: {
    toDetail(menu) {
      const { id } = menu
      this.$router.push({ path: `/rss-group/index/${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.rss-sidebar{
  .menu-list{
    .menu-item{
      font-size: 16px;
      line-height: 1.6;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      font-weight: 600;
      &:first-child{
        padding-top: 0;
      }
      &:last-child{
        border-bottom: none;
        padding-bottom: 0;
      }
      &.menu-item-active{
        color: #409EFF;
      }
    }
  }
}
</style>