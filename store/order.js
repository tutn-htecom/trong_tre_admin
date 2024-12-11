export const state = () => ({
    keyword: '',
})

export const getters = {
    keyword: (state) => state.keyword,
}

export const mutations = {
    SET_TITLE(state, payload) {
        console.log(payload)
        state.keyword = payload
        console.log(state)
    },
}

export const actions = {
    async set_keyword({ commit }, title) {
        console.log(title)
        commit('SET_TITLE', title)
    },
}
