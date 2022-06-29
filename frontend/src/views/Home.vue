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
          <div>
            <v-btn
              block
              depressed
              large
              rounded
              link
              to="/create-account"
              color="success"
              class="text-capitalize mb-6"
              >create account</v-btn
            >
            <v-btn
              block
              depressed
              large
              rounded
              link
              to="/login"
              color="success"
              class="text-capitalize"
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
};
</script>
