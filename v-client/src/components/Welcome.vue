<template>
    <div >
        <!-- <div style="position:absolute; float: left; left:0;">
        <v-btn style="float: left;" v-if="!$auth.isAuthenticated" @click="login"  color="accent" elevation="2">Sign in</v-btn>
        </div> -->


        <div style="display:flex; flex-direction: column; justify-content: center;">
        <img src="../assets/theme.jpg" style=" width:80vh; display: block; margin-left: auto; margin-right: auto;"/>
        <div>
            <h1>Got A Story To Share?<br> Here is Your Safe Space</h1>
            <p>BLUEMIN is a free blogging app, you could share anything that aspires you for free.</p>

            <div class="flex-container">
                <v-btn style="margin:10px;" v-if="!$auth.isAuthenticated" @click="login"  color="primary" elevation="2">Let's dive in</v-btn>
                <v-btn style="margin:10px;" :to= "about" color="accent" elevation="2">Learn more</v-btn>
            </div>
        </div>
      </div>
    </div>
   
    

</template>

<script>
    export default {
      name: "welcome",
    
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

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');

        h1{
            font-family: 'Roboto', sans-serif;
            font-size: 45px; 
            font-weight:900;
        }

       

        h1,p{
            text-align: center;
        }

        .flex-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
    </style>