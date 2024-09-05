<template>
        <!-- BLOG SNAPSHOTS -->

    <!-- first snapshot -->
    <section class="py-32 md:px-12 lg:px-24">
      <div class="max-w-screen-xl mx-auto px-4 md:px-8">
        <div class="text-center">
          <h2 class="text-2xl xl:text-3xl font-extrabold text-gray-900 sm:text-5xl">
            Customise Your Product
          </h2>

          <p class="mx-auto mt-4 max-w-sm text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores ipsum
            eos temporibus ea nihil.
          </p>

          <router-link 
           to="/destination"
            class="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-xs xl:text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          >
            Get Started
          </router-link>
        </div>
        <ul class="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="(post, index) in posts"
            :key="index"
            class="w-full mx-auto group sm:max-w-sm"
          >
            <a @click.prevent="goToArticle(post._id)" >
              <img
                :src="post.image"
                loading="lazy"
                :alt="post.title"
                class="w-full rounded-lg"
              />
              <div class="mt-3 space-y-2">
                <span class="block text-indigo-600 text-sm">{{ post.category }}</span>
                <h3
                  class="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold"
                >
                  {{ post.title }}
                </h3>
                <p class="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                  {{ post.content.substring(0, 100) + "..." }}
                </p>
              </div>
            </a>
            
          </li>
        </ul>
        
      </div>
    </section>
</template>


<script>



export default {
  name: "Blog",


  data() {
    return {
      
      
    };
  },

  props: {
    posts: {
      type: Array,
      required: true // Ensure the posts prop is required
    }
  },
  methods: {
    goToDestination() {
      this.$router.push({ name: 'destination'});
    },
    goToArticle(id) {
    this.$router.push({ name: 'article', params: { id: id } });
  }
  }



};
</script>