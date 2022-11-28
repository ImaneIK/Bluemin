<template>
  
  <a href="http://localhost:8081/">THA DASHBOARD</a>
  <div class="Home">
    <h1>This is the Home page</h1>

    <!-- <div v-for='post in posts' :key="post._id" class="h-24 w-36 bg-red-100"> 
    <div>
      <img :src="`/${post.image}`" />
      <button>{{post.category}}</button>
      <h2>{{post.title}}</h2>
      <p>{{post.content.substring(0,100)+"..."}}</p>
    </div>
    </div> -->


    <article class="px-8 py-6 lg:w-1/3 md:w-full" v-for="post in posts" :key="post._id" >
      <div class="p-6 rounded-md" >
      
        <img  :src = "`/${post.image}`" class="object-cover object-center w-full h-40 mb-6 rounded"
          alt="content"/>
        <h2 class="mb-3 text-lg lg:text-2xl">
          {{post.title}}
        </h2>
        <p class="mb-4 leading-relaxed">
          {{post.category}}
        </p>
        <p>{{post.content.substring(0,100)+"..."}}</p>
        <router-link :to="{name:'post',params:{id:post._id}}">Read More</router-link> 
        
      </div>
    </article>

  </div>
</template>

<script>
// @ is an alias to /src

import API from '../api';

export default {
  
  name: 'HomeView',
  data(){
    return{
      posts:[],
    };
  },
  async created(){
    this.posts = await API.getAllPosts();
  }
  
}
</script>
