<template>
  <section class="container">
    <div>

      <nuxt-link to="/home"><h2 class="subtitle">Chat Room</h2></nuxt-link>

      <ul>
        <li>
          <div class="cell"><span>id</span></div>
          <div class="cell"><span>name</span></div>
          <div class="cell"><span>message</span></div>
        </li>

        <li v-for="(list, index) in chats" :key="index.id">
          <template v-if="list.id !== editFlag.editId">
            <div class="cell"><span>{{list.id}}</span></div>
            <div class="cell"><span>{{list.data().name}}</span></div>
            <div class="cell"><span>{{list.data().message}}</span></div>
            <button class="button--green" @click="edit(list)">edit</button>
            <button class="button--green" @click="del(list)">delete</button>
          </template>
          <template v-else>
            <div class="cell"><span>{{list.id}}</span></div>
            <div class="cell"><input type="text" v-model="patch.name" placeholder="name"></div>
            <div class="cell"><input type="text" v-model="patch.message" placeholder="message"></div>
            <button class="button--green" @click="cancel(list)">cancel</button>
            <button class="button--green" @click="update(list)">update</button>
          </template>
        </li>
      </ul>

      <div class="post">
        <div class="cell"><input type="text" v-model="post.name" placeholder="name"></div>
        <div class="cell"><input type="text" v-model="post.message" placeholder="message"></div>
        <button class="button--green" @click="add">add</button>
      </div>

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
      editFlag: {
        editId: ''
      },
      post: {
        name: '',
        message: ''
      },
      patch: {
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
      this.editFlag.editId = list.id
      this.patch.name = list.data().name
      this.patch.message = list.data().message
    },

    cancel (list) {
      this.editFlag.editId = ''
    },

    update (list) {
      this.$store.commit('chat/update', {
        list: list,
        patch: this.patch,
        editFlag: this.editFlag
      })
      console.log(this.patch.message)
      console.log(list.id)
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
button {
  width: 100px;
  // outline: 0;
}
.cell {
  width: 200px;
  border: solid 1px #ccc;
  text-align: left;
  span {
    padding: 10px;
    display: block;
  }
}
input {
  width: 100%;
  font-size: 15px;
  margin: 0;
  border: 0;
}
ul {
  font-size: 15px;
  li {
    display: flex;
  }
}

.post {
  display: flex;
  margin: 20px 0;
}
</style>
