<template>
  <v-container class="px-0">
    <div class="d-flex">
      <!-- Textfield -->
      <v-text-field
        v-model="user"
        solo
        tile
        hide-details
        :placeholder="placeholder || 'Type a username'"
        :class="`rounded-0 border ${cssInLoading}`"
        v-on:keyup.enter.prevent="searchBtn()"
        :disabled="loading"
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
import api from "@/services/api.js";
export default {
  name: "Search",
  props: ["placeholder"],
  data() {
    return { user: ""};
  },
  methods: {
    async searchBtn() {
      this.$store.commit("setLoading", true);

      this.$store.commit("setRepos", {
        repos: [],
      });

      await this.getDataAndRepos();

      if (this.user != null && this.user != "" && this.$route.name == "Home") {
        this.$router.push({
          name: "Result",
          params: { username: this.user },
        });
      }
      if (this.$route.path !== `/users/${this.user}`) {
        this.$router.replace({
          name: "Result",
          params: { username: this.user },
        }).catch(err => {console.log(err)});
      }

      if(this.repos){
        let repoAux = this.repos.sort(function (repoA, repoB) {
          return repoB.stargazers_count - repoA.stargazers_count;
        });
        this.$store.commit("setRepos", {
          repos: repoAux,
        });
      }

      this.user = "";
    },
    async getDataAndRepos() {

      await api
        .fetchUser(this.user)
        .then((response) => {
          this.$store.commit("setUser", {
            user: response,
          });
        })
        .catch((err) => {
          console.log(err);
          this.$store.commit("setUser", {
            user: null,
          });
        });

      var control = true;
      var page = 1;
      while (control)
        await api
          .fetchRepos(this.user, page++)
          .then((response) => {
            if (response.length > 0) {
              Array.prototype.push.apply(this.repos, response);
            } else control = false;
          }).catch((err) => {
          console.log(err);
          this.$store.commit("setRepos", {
            repos: null,
          });
          control = false;
        });

      this.$store.commit("setLoading", false);
    },
  },
  computed: {
    repos() {
      return this.$store.state.repos;
    },
    loading() {
      return this.$store.state.loading;
    },
    cssInLoading() {
      if (this.loading) return "border-gray";
      return "border-black mr-n1";
    },
  },
};
</script>

<style>
.border {
  border: solid 2px;
}
.border-black {
  border-color: black;
}
.border-gray {
  border-color: gray;
}
</style>