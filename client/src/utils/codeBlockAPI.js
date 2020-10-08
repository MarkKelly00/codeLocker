import axios from'axios';

export default {
    saveCodeBlock:function(data){
        return axios.post("/api/codeBlock", data)
    }
}