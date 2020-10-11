import axios from "axios";

export default {
    createUser: function (userData) {
        return axios.post("/api/users", userData);
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
};
