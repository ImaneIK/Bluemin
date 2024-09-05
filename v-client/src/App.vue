<template>
  
  <v-app>
     
      <div id="app">
      <dashboard v-if="$auth.isAuthenticated" /> 
        
       <welcome  v-if="!$auth.isAuthenticated"> 
        
        </welcome>
       
      </div>
    
  </v-app>
</template>



<script>


// import dashboard from './components/dashboard';
// import welcome from './views/Welcome';

// export default {
//   name: "App",
//   components: {
//     welcome,
//    dashboard
//   },


  
 
//   methods: {
//     // onScroll(e) {
//     //   if (typeof window === "undefined") return;
//     //   const top = window.pageYOffset || e.target.scrollTop || 0;
//     //   this.fab = top > 60;
//     // },
//     // toTop() {
//     //   this.$vuetify.goTo(0);
//     // },

//     // Log the user in
//     login() {
//       this.$auth.loginWithRedirect();
//     },
//     // Log the user out
//     logout() {
//       this.$auth.logout({
//         returnTo: window.location.origin
//       });
//     }
//   },
// };
import dashboard from './components/dashboard';
import welcome from './views/Welcome';
import NavBar from './components/Navbar';
export default {

  
  name: "App",

  components: {
    welcome,
   dashboard,
   NavBar
  },

  computed: {
    isAuthenticated() {
      return !!this.$auth.isAuthenticated; // Adjust based on your authentication logic
    }
  }
 
  // computed: {
  //   isAuthenticated() {
  //     return this.$auth.isAuthenticated;
  //   }
  // },
  // watch: {
  //   isAuthenticated() {
  //     this.$router.push(this.isAuthenticated ? "/dashboard" : "/");
  //   }
  // },
  // created() {
  //   // Redirect based on authentication status when the app is loaded
  //   this.$router.push(this.isAuthenticated ? "/dashboard" : "/");
  // }
};
</script>