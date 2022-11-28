<template>
    <div class="add-post">
      <h1>This is an Add Post page</h1>
      <form ref = "form" @submit = "submitForm"  >
        <input placeholder='title' v-model="post.title" :rules = "rules" required/><br>
        <input placeholder='category' v-model="post.category" :rules = "rules" required/><br>
        <textarea placeholder='content' v-model="post.content" :rules = "rules" required/><br>
        <input @change='selectFile'  placeholder='image'  type='file' :rules = "rules" required/><br>
        <!-- <button
          type="submit"
          class="swal2-confirm swal2-styled"
          @click="alertExample3"
        >
         Submit
        </button> -->
        <button type="submit" v-on:click="submit">Create new post</button>
      </form>
    </div>
</template>
  
<script>
  // @ is an alias to /src
  import API from '../api';

  export default {
    data(){
        return{
            rules: [(value)=>!!value || "This field is required"],
            post: {
                title: "",
                category: "",
                content: "",
                image: "",
            },
            image: "",
        }
    },
    methods: {
        selectFile(file){
            this.image = file[0];
        },
        async submitForm(){
            const formData = new FormData();
            formData.append("image", this.image);
            formData.append("title", this.post.title);
            formData.append("category", this.post.category);
            formData.append("content", this.post.content);
            const response = await API.addPost(formData);
                this.$router.push({name: "home", params: {message: response.message}});
           
                
        }
    }    
  }
</script>
  