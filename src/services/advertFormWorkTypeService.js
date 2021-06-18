import axios from "axios";
export default class AdvertFormWorkTypeService{
    getAll(){
        return axios.get("http://localhost:8080/api/advertFormWorkTypeController/getAll")
    }
}