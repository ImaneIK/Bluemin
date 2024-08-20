<template>
  
  <v-app>
      <welcome v-if="!$auth.isAuthenticated"></welcome>
      <dashboard v-if="$auth.isAuthenticated" /> 
    <!-- </div> -->
    <!-- <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition> -->
    
  </v-app>
</template>


<script>

import dashboard from './components/dashboard';
import welcome from './components/Welcome';

export default {
  name: "App",
  components: {
    welcome,
   dashboard
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
  },
};
</script>