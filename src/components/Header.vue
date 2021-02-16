<template>
  <header class="header">
    <div class="header__inner">
      <div class="logo">
        <a href="#"
          ><img src="../assets/logo.png" width="62" height="62" alt="logo"
        /></a>
      </div>
      <nav class="nav">
        <a href="#">Sign in</a>
        <a href="#">Sign up</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #4287f5;
  margin-bottom: 50px;

  &__inner {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-around;
    padding: 20px 20px;

    .nav {
      padding-top: 10px;
      font-style: italic;
      font-size: 16px;
      a:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
}
</style>
