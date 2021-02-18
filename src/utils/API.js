import axios from "axios";

export default {
    search: function(){
        return axios.get("https://randomuser.me/api/?inc=name,email,location,cell,picture&results=500&nat=US"
        )
    }
};