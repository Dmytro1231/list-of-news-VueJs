<template>
  <main>
    <div class="container">
      <div class="length">
        <h1>Количество постов: {{ users.length }}</h1>
      </div>
      <div class="card center" v-for="user in users" :key="user.id">
        <h1>{{ user.title }}</h1>
        <p>{{ user.body }}</p>
        <span>{{ user.userId }}</span>
        <router-link
          :to="{
            name: 'post',
            params: { id: user.id, date: user.title, date2: user.body },
          }"
        >
          <button class="btn primary">Читать пост</button>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Main',
  data () {
    return {
      users: []
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => (this.users = response.data))
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>
.length {
  margin-bottom: 25px;
}
.btn {
  margin-top: 15px;
  text-align: left;
}
</style>
