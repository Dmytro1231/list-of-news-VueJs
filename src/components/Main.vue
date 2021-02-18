<template>
  <main>
    <div class="container">
      <div class="length">
        <h1>Количество постов: {{ posts.length }}</h1>
      </div>
      <div class="card center" v-for="post in posts" :key="post.id">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
        <span>{{ post.postId }}</span>
        <router-link
          :to="{
            name: 'post',
            params: { id: post.id, date: post.title, date2: post.body },
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
      posts: []
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => (this.posts = response.data))
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
