
export const state = () => ({
    category: [],
})
export const getters = {
    categories: (state) => state.category,
}
export const mutations = {
    SET_CATEGORIES(state, payload) {
        state.category = payload
    },
}
export const actions = {
    // async nuxtServerInit({ commit }, { req }) {
    //     const response = await this.$axios.$get('api/categories')

    //     commit('SET_CATEGORIES', response)

    //     if (req.session && req.session.user) {
    //         commit('user/setUser', req.session.user)
    //     }
    // },
}

