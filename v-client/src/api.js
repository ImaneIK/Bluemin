import axios from "axios";
const url = "/api/post";
import { getInstance } from '../src/auth/index';

export default class API{
    static async getAllPost(){
        
        const auth = getInstance();
        const token = await auth.getTokenSilently();
        const res = await axios.get(url,
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
        );
                
        return res.data;
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