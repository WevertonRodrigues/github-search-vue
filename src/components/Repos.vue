<template>
  <div>
    <!-- v-if -->
    <div v-if="repos.length > 0">
      <div v-for="repo in sliceRepos" :key="repo.name">
        <!-- Repo Name -->
        <h2 class="font-weight-regular" style="font-family: monospace">{{ repo.name }}</h2>
        <!-- Repo Description -->
        <div class="subtitle grey--text">{{ repo.description }}</div>
        <!-- Repo Stargazers Count -->
        <div class="d-flex align-stretch">
          <v-icon color="black">mdi-star-outline</v-icon>
          <span class="grey--text ml-2 mt-1 align-end">{{ repo.stargazers_count }}</span>
        </div>
        <br />
      </div>
      <!-- Repo Pagination -->      
      <div v-if="pageLength > 10" class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <v-pagination color="black" v-model="page" class="my-4" :length="pageLength"></v-pagination>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!-- v-else -->
    <ErrorMessage v-else class="text-center mt-n2" :msg="'Have no repositories!'" />
  </div>
</template>

<script>
import ErrorMessage from "@/components/ErrorMessage.vue";
export default {
  name: "Repos",
  props: ["repos"],
  components: { ErrorMessage },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    sliceRepos(){
      let from = this.page * 10 - 10
      let to = this.page * 10
      return this.repos.slice(from, to)
    },
    pageLength(){
      return Math.ceil(this.repos.length / 10) 
    }
  },
};
</script>
