export const state = () => ({
  user: null,
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
