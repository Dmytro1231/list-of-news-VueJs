<template>
  <div class="card">
    <h1>{{ date }}</h1>
    <h1>{{ date2 }}</h1>
    <button class="btn primary" @click="$router.push('/')">
      Вернуться назад
    </button>
  </div>
  <Footer />
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'Post',
  props: ['date', 'date2', 'id'],
  components: {
    Footer
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
