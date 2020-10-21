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

    addFavorite: async function (codeId, userId) {
        const body = {
            userId: userId,
            codeId: codeId,
        };
        console.log("body from addFavorite userAPI is: ", body)
        const {data} = await axios.post("/api/users/favorite", body);
        return data;
    },

    getFavorites: async function (userId) {
        // console.log('user ID', userId);
        const { data } = await axios.get("/api/users/favorite/" + userId);
        
        console.log('this is data', data);
        return data;
    },

    getFavoritesCodeBlock: async function(id){
        const { data } = await axios.get("/api/users/favoritecode/"+id)

        // console.log("data is: ", data)
        return data;
    },

    deleteUser: async function(userId){
        const { data } = await axios.delete("/api/users/"+userId)
        return data;        
    },

    isUser: async function (authoId) {
        const { data } = await axios.get("/api/users/autho/" + authoId);
        return data;
    },

    removeFavorite: async function (userId, codeId){
        const favObj = {
            userId:userId,
            codeId:codeId
        }
        const{data} = await axios.put("/api/users/favorite", favObj)
        return data;
    },

    getAuthorDetails: async function(internalID){
        const { data } = await axios.get("/api/users/internaluser/"+internalID)

        return data;
    }
};

