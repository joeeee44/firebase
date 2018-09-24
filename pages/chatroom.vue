<template>
  <section class="container">
    <div>

      <h2 class="subtitle">Chat Room</h2>

      <div>
        <input type="text" v-model="post.name" placeholder="name">
        <input type="text" v-model="post.message" placeholder="message">
        <button class="button--green" @click="add">add</button>
      </div>

      <ul>
        <li v-for="(list, index) in chats" :key="index.id">
          <template v-if="list.id !== editId">
            <!-- id: {{list.id}} -->
            name: {{list.data().name}}
            message: {{list.data().message}}
          </template>
          <template v-else>
            <!-- id: {{list.id}} -->
            <input type="text" v-model="list.data().name" placeholder="name">
            <input type="text" v-model="list.data().message" placeholder="message">
          </template>
          <button class="button--green" @click="edit(list)">edit</button>
          <button class="button--green" @click="del(list)">delete</button>
        </li>
      </ul>

    </div>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'
const firestore = firebase.firestore()
// const settings = { timestampsInSnapshots: true }
// firestore.settings(settings)

export default {
  data () {
    return {
      editId: '',
      post: {
        name: '',
        message: ''
      }
    }
  },
  computed: {
    state () {
      return this.$store.state
    },
    chats () {
      return this.$store.state.chat.chats
    }
  },
  methods: {
    addCount () {
      this.$store.commit('increment')
    },

    getDoc () {
      this.$store.commit('chat/getDoc')
    },

    add () {
      this.$store.commit('chat/add', this.post)
    },

    del (list) {
      firestore.collection('chats').doc(list.id).delete()
    },

    edit (list) {
      this.editId = list.id
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getDoc()
    })
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
