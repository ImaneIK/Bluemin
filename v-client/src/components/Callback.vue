<template>
    <div>
      Redirecting...
    </div>
</template>
  
  <script>
  export default {
    async created() {
        try {
      // Process the authentication callback with Auth0
      await this.$auth.handleRedirectCallback();

      // Redirect the user to the route specified in appState or default to dashboard-home
      const targetUrl = this.$auth.auth0Client.appState?.targetUrl || { name: 'dashboard-home' };
      this.$router.push(targetUrl);
    } catch (error) {
      console.error("Error during authentication:", error);
      this.$router.push({ name: 'welcome' }); // Redirect to welcome page on error
    }
    }
  };
  </script>
  