<template>
  <!-- Navbar -->
  <v-container fluid>
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
    {{ errorData }}
    <NavDrawer v-if="errorData == false" :data="this.$store.state.data" :repos="this.$store.state.repos"></NavDrawer>
    <v-container v-else>
        <h2 class="text-center">
          Erro! Usuário não encontrado!
        </h2>
    </v-container>
  </v-container>
</template>

<script>
import Title from "@/components/Title.vue";
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
  },
};
</script>