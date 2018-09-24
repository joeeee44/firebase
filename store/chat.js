import firebase from '~/plugins/firebase'
const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

export const state = () => ({
  chats: []
})

export const mutations = {
  getDoc (state) {
    const collection = firestore.collection('chats')
    const observer = collection.onSnapshot(Snapshot => {
      console.log(`Received doc snapshot: ${Snapshot}`)
      console.log(Snapshot.docs)
      state.chats = Snapshot.docs
    }, err => {
      console.log(`Encountered error: ${err}`)
    })
  },

  add (state, post) {
    firestore.collection('chats').add(post)
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
      post.name = ''
      post.message = ''
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    })
  }
}
