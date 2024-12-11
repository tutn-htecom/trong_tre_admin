import api from './axios'

export const state = () => ({
    auth: null,
    error: null,
})

export const getters = {
    error: (state) => state.error,
    auth: (state) => JSON.parse(state.auth),
}

export const mutations = {
    LOGIN(state, payload) {
        state.auth = JSON.stringify(payload)
        if (process.client) {
            localStorage.setItem('auth', state.auth)
        }
    },
    LOGOUT(state) {
        state.auth = null
        localStorage.removeItem('auth')
    },
    SIGNUP(state, payload) {
        state.signup = payload.user
    },
    SET_AUTH(state, payload) {
        state.auth = payload
    },
    SET_ERROR(state, error) {
        state.error = error
    },
    CLEAR_ERROR(state) {
        state.error = null
    },
}

export const actions = {
    // async nuxtServerInit({ commit }, { req }) {
    //     const response = await this.$axios.$get('api/auth/login')
    //     commit('SET_CATEGORIES', response)

    //     if (req.session && req.session.user) {
    //         commit('user/setUser', req.session.user)
    //     }
    // },
    async login({ commit }, formData) {
        try {
            const data = await api.post('admin-api/login', formData ,{
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + this.auth.token
            })
            // commit('CLEAR_ERROR')
            const response = await this.$axios.post('/admin-api/login', formData)
            console.log(response)
            commit('LOGIN', response.data)
        } catch (error) {
            console.log(error)
            // if (error.response.status == 422 || error.response.status == 500) {
            //     commit('SET_ERROR', error.response.data)
            // }
        }
    },
    async getUser(auth) {
        const response = await this.$axios.$get('/api/categories')
        commit('SET_CATEGORIES', response)
    },
}
