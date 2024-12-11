export const state = () => ({
    title: null,
})

export const getters = {
    title: (state) => state.title,
}

export const mutations = {
    SET_TITLE(state, payload) {
        state.title = payload
    },
}

export const actions = {
    async set_title({ commit }, title) {
        commit('SET_TITLE', title)
    },
}
