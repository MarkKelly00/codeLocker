import axios from 'axios';

export default {

    createUser:function(userData){
        return axios.post("/api/users", userData)
    },

    getUserProfile:function(Auth0Id){
        return axios.get("/api/users"+Auth0Id)
    },

    getUserId:function(Auth0Id){
        return axios.get("/api/users/usersid/"+Auth0Id)
    },

    addFavorite:function(codeId, userId){
        const data = {
            user:userId,
            codeId:codeId
        }
        return axios.post("/api/users/favorite", data)
    }
}