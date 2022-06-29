<template>
  <v-card tile flat height="100%" class="mx-auto">
    <v-container class="fill-height">
      <v-row>
        <v-col cols="12">
          <div class="text-center">
            <h1 class="font-weight-bold mb-2 success--text">Welcome!</h1>
            <v-img src="../assets/images/home.png"></v-img>
          </div>
        </v-col>
        <v-col cols="12">
          <div v-if="!$auth.loading">
            <v-btn
              block
              depressed
              large
              rounded
              color="success"
              class="text-capitalize mb-6"
              :loading="createAccountBtnLoad"
              @click="createAccount"
              >create account</v-btn
            >
            <v-btn
              block
              depressed
              large
              rounded
              color="success"
              class="text-capitalize"
              :loading="loginBtnLoad"
              @click="login"
              >log in</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Error snackbar -->
    <v-snackbar
      v-model="showErrorSnackbar"
      :timeout="3000"
      transition="slide-x-transition"
    >
      {{ errorMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="error"
          text
          v-bind="attrs"
          @click="showErrorSnackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  title: "Home",
  data() {
    return {
      createAccountBtnLoad: false,
      loginBtnLoad: false,
      showErrorSnackbar: false,
      errorMessage: "",
    };
  },
  methods: {
    async createAccount() {
      this.createAccountBtnLoad = true;

      try {
        await this.$auth.loginWithPopup();
        this.$router.push({ name: "dashboard" });
      } catch (error) {
        this.errorMessage = error;
        this.showErrorSnackbar = true;
      } finally {
        this.createAccountBtnLoad = false;
      }
    },
    async login() {
      this.loginBtnLoad = true;

      try {
        await this.$auth.loginWithPopup();
        this.$router.push({ name: "dashboard" });
      } catch (error) {
        this.errorMessage = error;
        this.showErrorSnackbar = true;
      } finally {
        this.loginBtnLoad = false;
      }
    },
  },
};
</script>
