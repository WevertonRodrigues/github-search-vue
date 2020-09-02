<template>
  <!-- Navbar -->
  <v-container fluid >
    <nav>
      <v-row align="center">
        <v-col>
          <Title />
        </v-col>
        <v-col>
          <Search
            v-on:error-data="errorData = $event"
            :placeholder="errorData ? null : this.$store.state.data.login"
          ></Search>
        </v-col>
      </v-row>
    </nav>
    
    <!-- v-if -->
    <div v-if="errorData == false">
      <v-row >
        <!-- NavDrawer-->
        <v-col cols="12" sm="4" md="3" lg="2">
          <NavDrawer :data="this.$store.state.data" :repos="this.$store.state.repos"></NavDrawer>
        </v-col>        
        <!-- Repos -->
        <v-col cols="12" sm="8" md="9" lg="8" class="pt-md-1 ml-md-5">
          <Repos :repos="this.$store.state.repos.data"></Repos>
        </v-col>
      </v-row>
    </div>
    <!-- v-else -->
    <ErrorMessage v-else class="text-center pa-0" :error="true" :msg="'User not found!'">
    </ErrorMessage>
  </v-container>
</template>

<script>
import Title from "@/components/Title.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
export default {
  name: "Result",
  data() {
    return {
      errorData: false,
    };
  },
  components: {
    Title,
    Search: () => import("@/components/Search.vue"),
    NavDrawer: () => import("@/components/NavDrawer.vue"),
    Repos: () => import("@/components/Repos.vue"),
    ErrorMessage
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
.monospace-regular  {
  font-family: "Roboto Mono", monospace;  
}
</style>