<template>
  <v-container>
    <Loader v-if="loading"></Loader>
    <div v-else>
      <v-alert border = "left" close-text = "Close Alert" color = "green accent-4" dark dismissible v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </v-alert>
    <v-row no_gutters>
      <v-col sm = "4" class = "pa-3" v-for = "post in posts" :key = "post._id">
        <v-card class = "pa-1" :to = "{name: 'post', params: {id: post._id}}">
          <v-img height = "250" :src = "`${post.image}`"></v-img>
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
    </div>
    
  </v-container>
</template>

<script>
import Loader from '../components/Loader.vue'
  import API from "../api";
  export default {
    name: 'Home',
    components:Loader,
    data(){
      return{
        posts: [],
        loading:true
      };
    },
    async created(){
      try {
        this.posts = await API.getAllPost();
        console.log("requesting api...")
      }catch(error){
        console.error("Error fetching post:", error);
      }finally{
        this.loading=false
      }
      
    }
  }
</script>
