<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              BLUEMIN
            </v-list-item-title>
            <v-list-item-subtitle>
              Your blogging go-to app
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="$auth.isAuthenticated" @click="logout">
              <v-list-item-icon>
                <v-icon >mdi-account-arrow-right</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title >Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Admin interface</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <router-view ></router-view>
      </v-main>
    </v-app>
</template>
  
  <script>
   
    export default {
      name:'dashboard',
      data: () => ({ 
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-home', link: "/" },
          { title: 'Add Article', icon: 'mdi-note-plus', link: "/add-post" },
        /*  { title: 'About', icon: 'mdi-help-box', link: "/about" },*/
          
        ],
      }),

      methods: {
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
  }

 
    }
  </script>
  