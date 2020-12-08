
export default {

    actions() { return {} },
    state () {
        return {
            github: {
                userProfile: {}
            }
        }
    },
    mutations: {
        updateProfileView(state, payload) {
            state.github.userProfile = payload;
        }
    }
}