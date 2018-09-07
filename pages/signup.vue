<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        <nuxt-link to="/">joeeee</nuxt-link>
      </h1>
      <h2 class="subtitle">
        Sign up
      </h2>
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button class="button--grey" @click="signUp">Signup</button>
      <p>Do you have an account?
        <nuxt-link to="/">sign in now!!</nuxt-link>
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
        this.$router.push('/')
      }).catch(error => {
        alert(error.message)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  margin: 10px 0;
  padding: 10px;
}
</style>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

