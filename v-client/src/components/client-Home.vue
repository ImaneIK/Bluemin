<template>
  <v-container>
    <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"
          ><strong>Sign in</strong></a>
    <v-row no_gutters>
      <v-col sm = "4" class = "pa-3" v-for = "post in posts" :key = "post._id">
        <v-card class = "pa-1" :to = "{name: 'post', params: {id: post._id}}">
          <v-img height = "250" :src = "`/${post.image}`"></v-img>
          <v-btn class = "ml-4 mt-3" small outlined color = "indigo">
            {{post.category}}
          </v-btn>
          <v-card-title class = "headline">
            {{post.title}}
          </v-card-title>
          <v-card-text class = "py-0">
            <p>{{post.content.substring(0, 100) + "..."}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import API from "../api";
  export default {
    name: 'Nav',
    data(){
      return{
        posts: [],
      };
    },
    async created(){
      this.posts = await API.getAllPost();
    },
    methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
  }
</script>
