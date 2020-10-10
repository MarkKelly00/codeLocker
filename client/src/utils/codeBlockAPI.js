import axios from'axios';

export default {
    saveCodeBlock:function(codeblock){
        //data contains all data for new code block, including userId
        return axios.post("/api/codeblock", codeblock)
    },
    getGlobalCode:function(){
        return axios.get("/api/codeblock")
    },
    updateCodeBlock:function(codeblock){
        //data is teh entire codeblock
        return axios.put("/api/codeblock", codeblock)
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
    }
}