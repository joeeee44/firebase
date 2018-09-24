<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        <nuxt-link to="/">joeeee</nuxt-link>
      </h1>
      <h2 class="subtitle">
        Sign in
      </h2>
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button class="button--grey" @click="signIn">Signin</button>
      <p>You don't have an account?
        <nuxt-link to="/signup">create account now!!</nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'
import auth from '~/plugins/auth'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    // AppLogo
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
        alert('Success!')
        this.$router.push('/home')
      }).catch(error => {
        alert(error.message)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
