<!-- src/views/article.vue -->
<template>
       <div >
          <Loader v-if="loading"></Loader>
       <!-- component -->
<div v-else class="max-w-screen-lg mx-auto">
    

    <main class="mt-10">

      <div class="mb-4 md:mb-0 w-full mx-auto relative">
        <div class="px-4 lg:px-0">
          <h2 v-if="post && post.title" class="text-4xl font-semibold text-gray-800 leading-tight">
            {{post.title}}          </h2>
          <a  v-if="post && post.category"  
            href="#"
            class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
          {{post.category}}  
          </a>
        </div>

        <img 
                v-if="post && post.image"
               :src = "`/${post.image}`"
                loading="lazy"
                :alt="post.title"
                class="w-full object-cover lg:rounded" style="height: 28em;"/>
      </div>

      <div class="flex flex-col lg:flex-row lg:space-x-12">

        <div v-if="post && post.content" class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          <p class="pb-6">{{post.content}}</p>
        </div>

        <div class="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div class="p-4 border-t border-b md:border md:rounded">
            <div class="flex py-2">
              <img src="https://randomuser.me/api/portraits/men/97.jpg"
                class="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p class="font-semibold text-gray-700 text-sm"> Mike Sullivan </p>
                <p class="font-semibold text-gray-600 text-xs"> Editor </p>
              </div>
            </div>
            <p class="text-gray-700 py-3">
              Mike writes about technology
              Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
            </p>
            <button class="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
              Follow 
              <i class='bx bx-user-plus ml-2' ></i>
            </button>
          </div>
        </div>

      </div>
    </main>
    <!-- main ends here -->

    <!-- footer -->
    <footer class="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
      <div> 
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="h-12 w-12" alt="logo">
      </div>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-2/5">
          <p class="text-gray-600 hidden lg:block mt-4 p-0 lg:pr-12">
            Boisterous he on understood attachment as entreaties ye devonshire. 
            In mile an form snug were been sell.
            Extremely ham any his departure for contained curiosity defective. 
            Way now instrument had eat diminution melancholy expression sentiments stimulated. 
          </p>
        </div>

        <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <h6 class="font-semibold text-gray-700 mb-4">Company</h6>
          <ul>
            <li> <a href="" class="block text-gray-600 py-2">Team</a> </li>
            <li> <a href="" class="block text-gray-600 py-2">About us</a> </li>
            <li> <a href="" class="block text-gray-600 py-2">Press</a> </li>
          </ul>
        </div>

        <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <h6 class="font-semibold text-gray-700 mb-4">Content</h6>
          <ul>
            <li> <a href="" class="block text-gray-600 py-2">Blog</a> </li>
            <li> <a href="" class="block text-gray-600 py-2">Privacy Policy</a> </li>
            <li> <a href="" class="block text-gray-600 py-2">Terms & Conditions</a> </li>
            <li> <a href="" class="block text-gray-600 py-2">Documentation</a> </li>
          </ul>
        </div>

        <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <h6 class="font-semibold text-gray-700 mb-4">Company</h6>
          <ul>
            <li> <a href="" class="block text-gray-600 py-2">Team</a> </li>
            <li> <a href="" class="block text-gray-600 py-2">About us</a> </li>
            <li> <a href="" class="block text-gray-600 py-2">Press</a> </li>
          </ul>
        </div>

      </div>
    </footer>
  </div>


             
      </div>
</template>
  
<script>
import API from "../api";
import axios from "axios";
import Loader from '../components/Loader.vue'
export default {
    name: 'Article',
    components:Loader,
    data() {
      return {
        post: null,
        loading:true,
      };
    },
    async created() {
    const postId = this.$route.params.id;
    try {
      const post = await this.getPublicPostById(postId);
      console.log(post);  // Log the fetched post
      this.post = post;   // Store the post data
    } catch (error) {
      console.error("Error fetching post:", error);
    }finally{
      this.loading=false;
    }
  },
  methods: {
    async getPublicPostById(id) {
      try {
          const response = await axios.get(`/public/posts/${id}`);
          console.log("client api: post requested")
          // console.log(response.data)
          return response.data;
          
        } catch (error) {
          console.error("Failed to load post:", error);
        }
    },
  },

  };
</script>
  