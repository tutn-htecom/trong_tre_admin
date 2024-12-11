export const state = () => ({
    list: [],
})

// export const getters = {
//     getCategories(state) {
//         return state.categories
//     },
// }

export const mutations = {
    SET_CATEGORIES(state, payload) {
        state.list = payload
    },
}

export const actions = {
    // async nuxtServerInit({ commit }, { req }) {
    //     const response = await this.$axios.$get(api_url + '/api/categories')
    //     console.log('xyz')
    //     commit('SET_CATEGORIES', response)

    //     if (req.session && req.session.user) {
    //         commit('user/setUser', req.session.user)
    //     }
    // },
    async getCategories() {
        const response = await this.$axios.$get(api_url + '/api/categories')

        commit('SET_CATEGORIES', response)
    },
}
