<template>
  <div class="container">
    <div class="text-center my-5 font-weight-bold">Awesome Github users</div>
    <div class="w-100 bg-red mb-5">
      <div class="d-flex justify-content-between w-100 users">
        <div v-for="(user, index) in users" :key="index" class="my-4">
          <div>
            <img
              :src="user.avatar_url"
              alt="sss"
              class="rounded-circle"
              height="200"
              width="200"
              @click="navigateToDetails(user)"
            />
          </div>
          <div
            class="text-center mt-3 username font-weight-bold text-capitalize"
          >
            <NuxtLink :to="`/profiles/user/${user.login}`" class="mx-2">
              {{ user.login }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 text-center mb-5">
      <button class="btn btn-primary btn-sm">Checkout more users</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { users: [] };
  },
  created() {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
      });
  },

 methods: {
  navigateToDetails(user) {
    // Go to the details page
    this.$router.push(`user/${user.login}`);
  },
 }
};
</script>
<style scoped>
div.users {
  flex-wrap: wrap;
}
div.username,
img {
  font-size: 0.9em;
  cursor: pointer;
}
div.username a {
  color: rgba(0, 0, 0, 0.75);
}
</style>