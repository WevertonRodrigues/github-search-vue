<template>
  <v-app>
      <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.center-vertically {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>