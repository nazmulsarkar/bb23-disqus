<template>
  <div class="container">
    <div class="columns is-desktop is-centered">
      <h3 class="title">Signup</h3>
      <hr />
      <div class="column">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input
              v-validate="'required|email'"
              v-model="email"
              :class="{'input': true, 'is-danger': errors.has('email') }"
              type="email"
              name="email"
              placeholder="Email"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope" />
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check" />
              <i v-show="errors.has('email')" class="fa fa-warning" />
            </span>
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          </p>
        </div>

        <div class="field">
          <p class="control has-icons-left">
            <input
              ref="password"
              v-validate="'required|min:6|max:35'"
              v-model="password"
              :class="{'input': true, 'is-danger': errors.has('password') }"
              type="password"
              name="password"
              placeholder="password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock" />
            </span>
            <span class="icon is-small is-right">
              <i v-show="errors.has('password')" class="fa fa-warning" />
            </span>
            <span
              v-show="errors.has('password')"
              class="help is-danger"
            >{{ errors.first('password') }}</span>
          </p>
        </div>

        <div class="field">
          <p class="control has-icons-left">
            <input
              v-validate="'required|confirmed:password'"
              v-model="password_confirmation"
              :class="{'input': true, 'is-danger': errors.has('password_confirmation') }"
              type="password"
              name="password_confirmation"
              placeholder="Confirm password"
              data-vv-as="password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock" />
            </span>
            <span class="icon is-small">
              <i v-show="errors.has('password_confirmation')" class="fas fa-warning" />
            </span>
            <span
              v-show="errors.has('password_confirmation')"
              class="help is-danger"
            >{{ errors.first('password_confirmation') }}</span>
          </p>
        </div>

        <div class="field">
          <p class="control">
            <button @click="signup()" class="button is-success">Sign up</button>
            Already have an account?
            <nuxt-link to="/login">Sign in</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data: () => ({
    email: "",
    password: "",
    password_confirmation: "",
    name: ""
  }),
  head() {
    return {
      title: `Sign up`
    };
  },
  asyncData() {
    return {
      formError: null,
      email: "",
      password: "",
      password_confirmation: ""
    };
  },
  methods: {
    /* --------------Start Signup-------------- */
    async signup() {
      const response = await fetch(`${process.env.API_BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
      });
      const result = await response.json();
      if (result.success) {
        this.$toast.success(
          "Congrats, successfuly signup. Please check and verify your email!",
          { duration: 3000 }
        );
        // this.$router.push('/admin')
      } else if (result.error.code === 11000) {
        this.$toast.error("Please filled out all required field", {
          duration: 3000
        });
      }
    }
    /* --------------End Signup-------------- */
  }
};
</script>
