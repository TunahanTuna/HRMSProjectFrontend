import axios from "axios";
export default class AdvertFormService{
    getAll(){
        return axios.get("http://localhost:8080/api/advertform/getAll")
    }

    getAllOpenAdverts(){
        return axios.get("http://localhost:8080/api/advertform/getAllOpenAdverts")
    }

    getAllByOrderByPublishDateDesc(){
        return axios.get("http://localhost:8080/api/advertform/getAllByOrderByPublishDateDesc")
    }
}