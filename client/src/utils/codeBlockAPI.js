import axios from'axios';

export default {
    saveCodeBlock:async function(codeblock){
        //data contains all data for new code block, including userId
        const {data} = await axios.post("/api/codeblock", codeblock)
        return data;
    },
    getGlobalCode:function(){
        return axios.get("/api/codeblock")
    },
    updateCodeBlock: async function(id, codeblock){
        //data is teh entire codeblock
        // console.log("in codeBlockAPI front end, id is:", id)
        // console.log("in codeBlockAPI front end, id is:", codeblock)
        const {data}= await axios.put("/api/codeblock/"+id, codeblock)
        return data;
    },
    getAllUserCode:function(authorID){
        return axios.get("/api/codeblock/author/"+authorID)
    },
    deleteAllUserCode:function(authorID){
        return axios.delete("/api/codeblock/author/"+authorID)
    },
    deleteCodeBlock:function(codeId){
        return axios.delete("/api/codeblock/"+codeId)
    },
    getCodeBlock:function(codeId){
        return axios.get("/api/codeblock/"+codeId)
    }, 
    addLike: async function(codeId, userId){
        const body ={
            codeId:codeId,
            userId:userId
        }
        const {data} = await axios.post("/api/codeblock/likes", body)
        return data;
    }, 
    getLikeCount: async function(codeId){
        const { data }= await axios.get("/api/codeblock/likes/"+codeId)
        return data;
    },
    getLikeArr: async function(codeId){
        const {data} = await axios.get("/api/codeblock/likesarr/"+codeId)
        return data;
    },

    getGlobalCodePopulated: async function(){
        const { data } = await axios.get('/api/codeblock/globalcode/')
        return data;
    }
}