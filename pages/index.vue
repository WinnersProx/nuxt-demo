<template>
  <div class="container">
    <div>
      <div class="my-3">
        <NuxtLink to="/" class="mx-2">Home</NuxtLink>
        <NuxtLink to="/profile" class="mx-2">Github Profiles</NuxtLink>
        <NuxtLink to="/about" class="mx-2">About us</NuxtLink>
      </div>
      <Logo />
      <h2>
        Nuxt Demo
      </h2>
      <div class="links">
        Hey, nuxters!<br>
        <div class="text-muted">
          It's time to nuxt like a boss
          <i class="fas fa-thumbs-up"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
