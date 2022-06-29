<template>
  <v-card tile flat height="100%">
    <img :src="$auth.user.picture" />
    <v-card-title>{{ $auth.user.name }}</v-card-title>
    <v-card-subtitle>{{ $auth.user.email }}</v-card-subtitle>
    <v-card-actions>
      <v-btn
        depressed
        large
        rounded
        color="success"
        class="text-capitalize"
        @click="logout"
        >Log out</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Dashboard",
  title: "Dashboard",
  methods: {
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>