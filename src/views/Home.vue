<template>
  <div class="home">
    <v-container class="center-vertically pt-0">
      <v-row no-gutters justify="center" >
        <!-- Title -->
        <v-col cols="12" class="text-center">
          <Title />
        </v-col>
        <!-- Search -->
        <v-col cols="12" sm="8" lg="6">
          <Search />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  components: {
    Title,
    Search,
  },
  title () {
    return `Github Search`
  },
};
</script>

