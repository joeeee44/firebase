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
      <!-- <multiselect v&#45;model="password" :options="test" label="name"></multiselect> -->
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
      password: '',
      test: [
        { name: 'A', value: 1 },
        { name: 'B', value: 2 },
        { name: 'C', value: 3 },
        { name: 'D', value: 4 },
        { name: 'E', value: 5 }
      ]
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
