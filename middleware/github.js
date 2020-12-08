
export default async function ({ store, route, redirect }) {

    const { username } = route.params;

    if(!username) return redirect('/');

    store.commit('updateProfileView', await fetchUserProfile(username));
}

const fetchUserProfile = (username) => {
    return fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => data);
}