<template>
  <div class="w-full bg-gray-50 overflow-hidden">
    
    <Loader v-if="loading" ></Loader>
    
    <div v-else>
      <NavBar></NavBar>
    <router-view v-if="$route.path !== '/'"></router-view>
    <div v-else>
      <Hero></Hero>
    <Carousel :posts="posts"></Carousel>
    <Blog :posts="posts"></Blog>
    <Footer></Footer>
    </div>
    
    </div>
    
    
    
  </div>
</template>

<script>
import Loader from '../components/Loader.vue';

import NavBar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import Carousel from '../components/Carousel.vue';
import Blog from '../components/Blog.vue';
import Footer from '../components/Footer.vue';
import PublicAPI  from "../api";


export default {
  name: "welcome",

  components: {
    NavBar,
    Hero,
    Carousel,
    Blog,
    Footer,
    Loader
  },




  data() {
    return {
      menuVisible: false, // Tracks the visibility of the menu
      // posts: [
      //   {
      //     title: "What is SaaS? Software as a Service Explained",
      //     desc:
      //       "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
      //     img:
      //       "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      //     date: "Jan 4 2022",
      //     href: "javascript:void(0)",
      //   },
      //   {
      //     title: "A Quick Guide to WordPress Hosting",
      //     desc:
      //       "According to him, “I'm still surprised that this has happened. But we are surprised because we are so surprised.” More revelations.",
      //     img:
      //       "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      //     date: "Jan 4 2022",
      //     href: "javascript:void(0)",
      //   },
      //   {
      //     title: "7 Promising VS Code Extensions Introduced in 2022",
      //     desc:
      //       "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      //     img:
      //       "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      //     date: "Jan 4 2022",
      //     href: "javascript:void(0)",
      //   },
      //   {
      //     title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
      //     desc:
      //       "The powerful gravity waves resulting from the impact of the planets' moons — four in total — were finally resolved in 2015 when gravitational.",
      //     img:
      //       "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      //     date: "Jan 4 2022",
      //     href: "javascript:void(0)",
      //   },
      //   {
      //     title: "What is SaaS? Software as a Service Explained",
      //     desc:
      //       "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
      //     img:
      //       "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      //     date: "Jan 4 2022",
      //     href: "javascript:void(0)",
      //   },
      //   {
      //     title: "A Quick Guide to WordPress Hosting",
      //     desc:
      //       "According to him, “I'm still surprised that this has happened. But we are surprised because we are so surprised.” More revelations.",
      //     img:
      //       "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      //     date: "Jan 4 2022",
      //     href: "javascript:void(0)",
      //   },
      // ],
      posts: [],
      loading:true,
    };
  },


  created() {
    this.fetchPosts();
  },

  methods: {
    // onScroll(e) {
    //   if (typeof window === "undefined") return;
    //   const top = window.pageYOffset || e.target.scrollTop || 0;
    //   this.fab = top > 60;
    // },
    // toTop() {
    //   this.$vuetify.goTo(0);
    // },

    async fetchPosts() {
      try {
        const data = await PublicAPI.getAllPublicPosts();
        this.posts = data;
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
      this.loading = false;
    }
    },

    toggleMenu() {
      this.menuVisible = true;
    },
    closeMenu() {
      this.menuVisible = false;
    },

    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },

  mounted() {
    // Handle click events for burger and close buttons
    const burger = this.$refs.burger;
    const close = this.$refs.close;
    const backdrop = this.$refs.backdrop;

    if (burger) {
      burger.addEventListener("click", this.toggleMenu);
    }

    if (close) {
      close.addEventListener("click", this.closeMenu);
    }

    if (backdrop) {
      backdrop.addEventListener("click", this.closeMenu);
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");


.hidden {
  display: none;
}
</style>
