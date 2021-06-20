import axios from "axios";
export default class CandidateService{
    getAll(){
        return axios.get("http://localhost:8080/api/candidate/getall")
    }
    getCandidateCvtoId(id){
        return axios.get("http://localhost:8080/api/candidate/getByCandidateCvDtoId?id="+ id)
        
    }
    getCandidateById(id){
        return axios.get("http://localhost:8080/api/candidate/getById?id="+ id)
    }
}