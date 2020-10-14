import axios from "axios";

export default {
    createUser: async function (userData) {
        const { data } = await axios.post("/api/users", userData);
        return data;
    },

    getUserProfile: function (Auth0Id) {
        return axios.get("/api/users/" + Auth0Id);
    },

    getUserId: async function (Auth0Id) {
        const userId = await axios.get("/api/users/userid/" + Auth0Id);
        return userId.data;
    },

    addFavorite: function (codeId, userId) {
        const data = {
            user: userId,
            codeId: codeId,
        };
        return axios.post("/api/users/favorite", data);
    },

    isUser: async function(authoId){
        const { data } = await axios.get("/api/users/autho/"+authoId);
        return data;
    },

    getFavoritesCodeBlock: async function(userId){
        const body = {
            id:userId
        }
        const { data } = await axios.get("/api/users/favorite", body);
        return data;
    },

    deleteUser: async function(userId){
        const { data } = await axios.delete("/api/users/"+userId)
        return data;        
    }

};
