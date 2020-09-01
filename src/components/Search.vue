<template>
  <v-container>
    <div class="d-flex">
      <v-text-field
        v-model="param"
        solo
        tile
        hide-details
        placeholder="Type a Username"
        class="rounded-0"
      ></v-text-field>
      <v-btn
        large
        tile
        height="49"
        color="black"
        :loading="loading"
        :disabled="loading"
        class="px-sm-7 px-lg-8"
      >
        <v-icon color="white">mdi-magnify</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>

export default {
  name: "Search",
  data() {
    return { param: "", loading: null, error: false, data: null };
  },
  methods: {
    
  },
};
</script>