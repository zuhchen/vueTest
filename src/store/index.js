import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            count: 0,
            score: [
                { id: 1, name: '1' },
                { id: 2, name: '2' },
                { id: 3, name: '3' }
            ]
        }
    },
    mutations: {
        increment(state, n) {
            state.count += n
        },

    },
    getters: {
        exceed: (state) => (id) => {
            return state.score.find(s => s.id >= 2)
        },
        more: (state) => (id) => {
            return state.score.filter(s => s.id >= 2)
        }
    }
})

export default store;