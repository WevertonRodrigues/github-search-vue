<template>
  <v-container fluid class="py-0">
    <v-container fluid class="py-0">
      <!-- Nav -->
        <v-row align="center">
          <v-col cols="12" sm="6" md="6" lg="6">
            <Title />
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6">
            <Search :placeholder="user ? user.login : null"></Search>
          </v-col>
        </v-row>
    </v-container>

    <v-container fluid>
      <!-- v-if container body -->
      <v-container v-if="loading">
        <v-row justify="center" align="center">
            <v-col cols="1">
              <v-container>
                   <v-progress-circular :indeterminate="true"></v-progress-circular>
              </v-container>
            </v-col>
          </v-row>  
      </v-container>
      <!-- v-else container body -->
      <div v-else>
        <v-container fluid class="pa-0">
          <!-- v-if data -->
          <v-row no-gutters v-if="user">
            <!-- NavDrawer-->
            <v-col cols="12" sm="4" md="3" lg="2">
              <NavDrawer :user="user" :repos="repos"></NavDrawer>
            </v-col>
            <!-- Repos -->
            <v-col cols="12" sm="8" md="9" lg="8" :class="`ml-sm-0 ml-md-0 ml-lg-7 mt-9 mt-sm-0 mt-md-0 md-lg-0`">
              <Repos :repos="repos"></Repos>
            </v-col>
          </v-row>
          <!-- v-else data -->
          <ErrorMessage v-else class="text-center pa-0 mt-n2" :error="true" :msg="'User not found!'"></ErrorMessage>
        </v-container>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import Title from "@/components/Title.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
export default {
  name: "Result",
  components: {
    Title,
    Search: () => import("@/components/Search.vue"),
    NavDrawer: () => import("@/components/NavDrawer.vue"),
    Repos: () => import("@/components/Repos.vue"),
    ErrorMessage,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    repos() {
      return this.$store.state.repos;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  title () {
    return this.user ? `Result — ${this.user.login}` : 'Github Search'
  },
};
</script>