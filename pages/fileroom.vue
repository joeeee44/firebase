<template>
  <section class="container">
    <div>

      <nuxt-link to="/home"><h2 class="subtitle">File Room</h2></nuxt-link>

      <input
        id="file"
        type="file"
        @change="selectedFile">
      <input
        v-model="name"
        placeholder="file name"
        type="text">
      <button
        id="put"
        class="button--green"
        type="button"
        @click="putFile">アップロード</button>
      <button
        id="delete"
        class="button--grey"
        type="button"
        @click="deleteFile">削除</button>
      <img
        id="image"
        src=""
        class="image">

    </div>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'
const storage = firebase.storage()
const storageRef = storage.ref()

export default {
  data() {
    return {
      file: '',
      name: ''
    }
  },
  computed: {
    // state() {
    //   return this.$store.state
    // },
    // chats() {
    //   return this.$store.state.chat.chats
    // }
  },
  mounted() {},
  methods: {
    selectedFile: function(e) {
      e.preventDefault()
      let files = e.target.files
      this.file = files[0]
    },

    putFile() {
      const file = this.file
      const ref = storageRef.child('images/' + this.name)
      ref.put(file).then(function(snapshot) {
        ref.getDownloadURL().then(url => {
          document.getElementById('image').src = url
          alert('アップロードしました')
        })
      })
    },

    deleteFile() {
      const ref = storageRef.child('images/' + this.name)
      ref.delete().then(url => {
        document.getElementById('image').src = ''
        alert('削除しました')
      })
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {})
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100vh;
}
</style>
