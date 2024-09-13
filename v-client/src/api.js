import axios from "axios";
const url = "https://bluemin.onrender.com/api/post";
import { getInstance } from '../src/auth/index';
const apiBaseUrl = process.env.VUE_APP_API_BASE_URL || "http://localhost:3000";
const publicUrl = "https://bluemin.onrender.com/public/posts";

export default class API{

    static async getAllPublicPosts() {
        try {
            const res = await axios.get(publicUrl);
            return res.data;
        } catch (error) {
            console.error("Failed to load posts:", error);
            throw error;
        }
    }

    async getPublicPostById1(id) {
        try {
          const response = await axios.get(`https://bluemin.onrender.com/public/posts/${id}`);
          console.log("client api: post requested")
          return response.data;
        } catch (error) {
          console.error("Failed to load post:", error);
        }
    }



    static async getAllPost() {
        try {
          const auth = getInstance();
          const token = await auth.getTokenSilently();
      
          const res = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      
          console.log("fetching posts on admin mode");
          return res.data;
        } catch (error) {
          console.error("Error fetching posts:", error);
      
        
        }
      }

    static async getPostByID(id){
        console.log("client side: inside get post by id")
        try {
            const auth = getInstance();
            const token = await auth.getTokenSilently();
            const res = await axios.get(`${url}/${id}`, {
              headers: {
                Authorization: `Bearer ${token}` // Add the Authorization header with the token
              }
            });
            console.log("request processed",res.data);
            return res.data;
          } catch (error) {
            console.error("Error in getPostByID:", error.response ? error.response.data : error.message);
          }
    }

    static async addPost(post) {
        const auth = getInstance();
        const token = await auth.getTokenSilently();
    
        try {
            const res = await axios.post(url, post, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            return res.data;
        } catch (error) {
            console.error('Error adding post:', error);
            throw error;
        }
    }

    static async updatePost(id, post) {
        const auth = getInstance();
        const token = await auth.getTokenSilently();
    
        try {
            const res = await axios.patch(`${url}/${id}`, post, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            return res.data;
        } catch (error) {
            console.error('Error updating post:', error);
            throw error;
        }
    }

    static async deletePost(id) {
        const auth = getInstance();
        const token = await auth.getTokenSilently();

        try {
            const res = await axios.delete(`${url}/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return res.data;
        } catch (error) {
            console.error('Error deleting post:', error);
            throw error;
        }
    }
}