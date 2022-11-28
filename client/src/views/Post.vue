<template>
    <h1>this is the post details</h1>
    <button>Edit</button> |
    <button>Delete</button>

    <img  :src = "`/${post.image}`"
        alt="content"/>
    <h1 >
        {{post.title}}
    </h1>
    <p>{{post.content}}</p>
    <!-- <p>{{post.created}}</p> -->

    <!-- <div class="p-6 rounded-md" >
      
      <img  :src = "`/${post.image}`" class="object-cover object-center w-full h-40 mb-6 rounded"
        alt="content"/>
      <h1 class="mb-3 text-lg lg:text-2xl">
        {{post.title}}
      </h1>
      <p class="mb-4 leading-relaxed">
        {{post.category}}
      </p>
      <p>{{post.content}}</p>
      
    </div> -->
</template>
<script>
    import API from '../api';

    export default {
        // inheritAttrs: false,
  name: 'Post',
  data(){
    return{
      post:[],
    };
  },

  async created(){
    this.post = await API.getPostById(this.$route.params.id);
    
    this.post =response;
  }
}
</script>