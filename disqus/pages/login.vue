<template>
  <div class="container">
    <div class="columns is-desktop is-centered">
      <h3 class="title">
        Login
      </h3>
      <hr>
      <div class="column">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input
              v-model="email"
              class="input"
              type="email"
              name="email"
              placeholder="Email input"
            >
            <span class="icon is-small is-left">
              <i class="fas fa-envelope" />
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check" />
            </span>
          </p>
        </div>

        <div class="field">
          <p class="control has-icons-left">
            <input
              v-model="password"
              class="input"
              type="password"
              name="password"
              placeholder="Password"
            >
            <span class="icon is-small is-left">
              <i class="fas fa-lock" />
            </span>
          </p>
        </div>

        <div class="field">
          <p class="control">
            <input v-model="remember_me" type="checkbox" name="remember_me"> Remember me?
          </p>
        </div>

        <div class="field">
          <p class="control">
            <button @click="login" class="button is-success">
              Signin
            </button>
            New User?
            <nuxt-link to="/signup">
              Register Now
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  asyncData () {
    return {
      formError: null,
      email: '',
      password: '',
      remember_me: false
    }
  },
  methods: {
    /* --------------Start login-------------- */
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
          remember_me: this.remember_me
        })
        .then((result) => {
          if (result && result.success) {
            this.email = ''
            this.password = ''
            this.formError = null

            if (this.$store.state.auth.user) {
              this.$toast.success(
                'Login is successfull. You will be redirected soon...',
                { duration: 3000 }
              )
              setTimeout(() => {
                this.$router.push('/admin')
              }, 3000)
            }
          } else {
            this.$toast.error('There is an error, Please try later...!', { duration: 3000 })
          }
        })
        .catch((e) => {
          this.formError = e.message
          this.$toast.error(this.formError, { duration: 3000 })
        })
    }
    /* --------------End login-------------- */
  }
}
</script>
