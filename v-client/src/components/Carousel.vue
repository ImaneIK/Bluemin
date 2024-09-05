<template>
        <!-- carousel -->
<section class="bg-black text-white">
  <div class="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
    <div class="animate-slide-left group-hover:animation-pause flex gap-2 w-full ">
      <div v-for="(post, index) in posts" :key="index" class="inline-block mx-4 w-full ">
        <div class="w-full border border-1 border-white rounded-lg py-2 px-4" @click.prevent="goToArticle(post._id)"> 
          <div  class="flex flex-row">
            <div class=" text-md text-white flex flex-no-wrap items-center gap-2  font-semibold break-words">
              <svg class="h-4 w-4 fill-white/70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L80 480c-44.2 0-80-35.8-80-80L0 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 272c0 8.8 7.2 16 16 16s16-7.2 16-16L96 96zm64 24l0 80c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24L184 96c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16z"/></svg>
              <div>{{ post.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</section>

</template>


<script>



export default {
  name: "Carousel",


  props: {
    posts: {
      type: Array,
      required: true // Ensure the posts prop is required
    }
  },
  methods: {
    goToPost(id) {
      this.$router.push("/destination");
    },
    goToArticle(id) {
    this.$router.push({ name: 'article', params: { id: id } });
  }
  }

};
</script>