<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        <nuxt-link to="/home">joeeee</nuxt-link>
      </h1>
      <h2 class="subtitle">
        Sign up
      </h2>
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button class="button--grey" @click="signUp">Signup</button>
      <p>Do you have an account?
        <nuxt-link to="/signin">sign in now!!</nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'

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
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
        alert('Create account: ', user.email)
        this.$router.push('/signin')
      }).catch(error => {
        alert(error.message)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

