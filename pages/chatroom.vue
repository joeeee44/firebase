<template>
  <div id="chat" class="container">
    <h1>Chat Room</h1>

    <button @click="add">add</button>
    <button @click="get">get</button>
    {{test}}
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
// import nativeToast from 'native-toast'

// nativeToast({
//   message: 'wait wait!',
//   position: 'north-east',
//   // Self destroy in 5 seconds
//   timeout: 5000,
//   type: 'warning'
// })

const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

export default {
  data () {
    return {
      test: ''
    }
  },
  methods: {
    add () {
      firestore.collection("users").add({
          first: "Ada",
          last: "Lovelace",
          born: 1815
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      })
    },

    get () {
      firestore.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // console.log(`${doc.id} => ${doc.data()}`)
          // console.log(doc.id, doc.data())
          console.log(doc.id)
        })
      })
      .catch(error => {
        console.log("Error getting documents: ", error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
