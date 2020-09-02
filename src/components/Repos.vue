<template>
  <div>
    <v-container fluid class="pa-0">
      <!-- v-if -->
      <div v-if="repos.length > 0">
        <div v-for="repo in repos" :key="repo.name">
          <h2 class="font-weight-regular" style="font-family: monospace">{{ repo.name }}</h2>
          <div class="subtitle grey--text">{{ repo.description }}</div>
          <div>
            <v-icon color="black">mdi-star-outline</v-icon>
            <span class="grey--text">{{ repo.stargazers_count }}</span>
          </div>
          <br />
        </div>
      </div>
      <!-- v-else -->
      <ErrorMessage v-else class="text-center" :msg="'Have no repositories!'" />
    </v-container>
  </div>
</template>

<script>
import ErrorMessage from "@/components/ErrorMessage.vue";
export default {
  name: "Repos",
  props: ["repos"],
  components: { ErrorMessage },
};
</script>
