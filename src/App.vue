<template>
  <Header />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header

  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.card {
  margin-bottom: 15px;
}
</style>
