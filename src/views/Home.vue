<template>
  <div class="home">
    <v-container class="center pt-0">
      <v-row no-gutters justify="center" >
        <v-col cols="12">
          <Title />
        </v-col>
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
};
</script>

<style scoped>
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
