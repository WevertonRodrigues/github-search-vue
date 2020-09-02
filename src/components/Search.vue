<template>
  <v-container>
    <div class="d-flex">
      <!-- Textfield -->
      <v-text-field
        v-model="param"
        solo
        tile
        hide-details
        :placeholder="placeholder || 'Type a username'"
        class="rounded-0 border mr-n1"
        v-on:keyup.enter="loading || param == null || param == ''  ? false : searchBtn()"
      ></v-text-field>
      <!-- Btn -->
      <v-btn
        large
        tile
        height="52"
        color="black"
        :loading="loading"
        :disabled="loading"
        class="px-sm-7 px-lg-8"
        @click="searchBtn()"
      >
        <v-icon color="white">mdi-magnify</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  props: ["placeholder"],
  data() {
    return { param: "", loading: null, error: false, data: null };
  },
  methods: {
    async searchBtn() {
      this.loading = true;

      await this.getDataAndRepos();

      if (
        this.param != null &&
        this.param != "" &&
        this.$route.name == "Home"
      ) {
        this.$router.push({
          name: "Result",
          params: { username: this.param },
        });
      } else {
        this.$router.replace({
          name: "Result",
          params: { username: this.param },
        });
      }

      this.param = "";
    },
    async getDataAndRepos() {
      await axios
        .get(`https://api.github.com/users/${this.param}`)
        .then((response) => {
          this.$store.commit("changeData", response.data);
          this.$emit("error-data", false);
        })
        .catch((err) => {
          console.log(err);
          this.$emit("error-data", true);
        })
        .finally(() => {
          this.loading = false;
        });

      await axios
        .get(`https://api.github.com/users/${this.param}/repos`)
        .then((response) => {
          this.$store.commit("changeRepos", response);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
.border {
  border: solid 2px black;
}
</style>