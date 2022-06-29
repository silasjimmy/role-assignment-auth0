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
              @click="login"
              >log in</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  title: "Home",
  methods: {
    async createAccount() {
      await this.$auth.loginWithPopup();
      this.$router.push({ name: "dashboard" });
    },
    async login() {
      await this.$auth.loginWithPopup();
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>
