<template>
  <v-navigation-drawer width="220" v-if="user && repos" permanent floating>
    <!-- Perfil image -->
    <div>
      <v-img :src="`${user.avatar_url}`" :alt="`${user.avatar_url}`" contain></v-img>
    </div>
    <!-- Userdata  -->
    <div class="mt-1">
      <h1 class="font-weight-regular">{{name}}</h1>
      <div class="subheading grey--text mt-n1">{{user.login}}</div>
    </div>
    <!-- Perfil userdata -->
    <br />
    <div v-for="item in listUserDataPerfil" :key="item.icon">
      <div class="mb-1 d-flex align-stretch">
        <v-icon color="black" class="mr-1">mdi-{{item.icon}}-outline</v-icon>
        <span class="text-value grey--text mt-0">{{item.info || 'N/A'}}</span>
        <br />
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavDrawer",
  props: ["user", "repos"],
  data() {
    return {
      listUserDataPerfil: [
        {
          icon: "briefcase-variant",
          info: "",
        },
        {
          icon: "map-marker-radius",
          info: "",
        },
        {
          icon: "star",
          info: "",
        },
        {
          icon: "storefront",
          info: "",
        },
        {
          icon: "account-multiple",
          info: "",
        },
      ],
      count: 0,
    };
  },
  methods: {
    initList() {
      if (this.user) {
        this.count = 0;
        this.listUserDataPerfil[0].info = this.user.company;
        this.listUserDataPerfil[1].info = this.user.location;
        if (this.repos)
          for (let repo of this.repos) this.count += repo.stargazers_count;
        this.listUserDataPerfil[2].info = this.count.toString();
        this.listUserDataPerfil[3].info = this.user.public_repos.toString();
        this.listUserDataPerfil[4].info = this.user.followers.toString();
      }
    },
  },
  computed: {
    name() {
      return this.user.name != null
        ? this.user.name.split(" ")[0].toString()
        : "N/A";
    },
  },
  mounted() {
    this.initList();
  },
  beforeUpdate() {
    this.initList();
  },
};
</script>
