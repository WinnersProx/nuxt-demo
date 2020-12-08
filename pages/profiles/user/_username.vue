<template>
    <div>
        <div class="text-center my-5 font-weight-bold text-capitalize">
            {{ userProfile.login }}
        </div>


        <div class="w-100 text-center">
            <div>
            <img
              :src="userProfile.avatar_url"
              alt="sss"
              class="rounded-circle"
              height="200"
              width="200"
            />
          </div>
          <div
            class="text-center mt-3 desctext-capitalize"
          >
            {{ userProfile.bio }}
          </div>
        </div>
    </div>
</template>
<script>
export default {
    middleware: 'github',
    created() {
        console.log(this);
    },
    computed: {
        userProfile()
        {
            return this.$store.state.github.userProfile;
        }
    },

    methods: {
        
    }
}
</script>