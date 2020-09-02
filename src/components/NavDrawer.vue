<template>
  <v-navigation-drawer width="220" v-if="data && repos" permanent floating>
    <!-- Perfil image -->
    <v-img :src="`${data.avatar_url}`" contain></v-img>
    <!-- Userdata  -->
    <div class="mt-1">
      <h1 class="font-weight-regular">{{name}}</h1>
      <div class="subheading grey--text mt-n1">{{data.login}}</div>
    </div>
    <!-- Perfil userdata -->
    <br />
    <div >
      <div v-for="item in listUserDataPerfil" :key="item.icon">
        <section class="mb-1">
          <v-icon color="black" class="mr-1">mdi-{{item.icon}}-outline</v-icon>
          <span class="text-value grey--text">{{item.info || 'N/A'}}</span>
          <br />
        </section>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavDrawer",
  props: ["data", "repos"],
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
      count: 0
    };
  },
  methods: {
    initList() {
      if (this.data != null) {
        this.count = 0
        this.listUserDataPerfil[0].info = this.data.company;
        this.listUserDataPerfil[1].info = this.data.location;
        for(let repo of this.repos.data)
          this.count += repo.stargazers_count
        this.listUserDataPerfil[2].info = this.count.toString();
        this.listUserDataPerfil[3].info = this.data.public_repos.toString();
        this.listUserDataPerfil[4].info = this.data.followers.toString();
      }
    },
  },
  computed: {
    name(){
      return this.data.name != null ? this.data.name.split(" ")[0].toString() : "N/A"
    }
  },
  mounted() {
    this.initList();
  },
  beforeUpdate(){
    this.initList()
  }
};
</script>
