<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Disqus SaaS
      </h1>
      <h2 class="subtitle">
        Signup
      </h2>
      <div class="links">
        <nuxt-link to="/login" class="button--grey">
          Login
        </nuxt-link>
        <nuxt-link to="/signup" class="button--grey">
          Signup
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  auth: false,
  components: {
    Logo
  }
}
</script>
