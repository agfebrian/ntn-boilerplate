import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            currentlyActiveToc: '',
        },
        getters: {},
        mutations: {
            SET_CURRENTLY_ACTIVE_TOC(state, payload) {
                state.currentlyActiveToc = payload
            }
        },
        actions: {
            setCurrentlyActiveToc(context, payload) {
                context.commit('SET_CURRENTLY_ACTIVE_TOC', payload)
            }
        }
    })
}

export default createStore