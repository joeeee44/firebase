<template>
  <section class="container">
    <div>
      <!-- <app&#45;logo/> -->
      <h1 class="title">
        <nuxt-link to="/home">joeeee</nuxt-link>
      </h1>
      <h2 class="subtitle">
        home
      </h2>
      <nuxt-link to="/chatroom" class="button--green">chatroom</nuxt-link>
      <nuxt-link to="/fileroom" class="button--grey">fireroom</nuxt-link>
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
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
