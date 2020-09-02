<template>
  <h1>
    <span v-if="error" class="text-uppercase grey--text">Error!</span>
    {{msg}}
  </h1>
</template>

<script>
export default {
  name: "ErrorMessage",
  props: ["msg", "error"],
};
</script>
