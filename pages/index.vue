<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        <nuxt-link to="/">joeeee</nuxt-link>
      </h1>
      <h2 class="subtitle">
        welcom
      </h2>
      <div class="links">
        <nuxt-link to="/signin" class="button--green">Signin</nuxt-link>
        <nuxt-link to="/signup" class="button--grey">Signup</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
// import firebase from 'firebase'
// import auth from '~/plugins/auth'

export default {
  data () {
    return {
      // email: '',
      // password: ''
    }
  },
  components: {
    // AppLogo
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
