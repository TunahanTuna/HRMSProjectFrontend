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
    add({
        deadlineDate,
        city: { cityId },
        description,
        employer: { employerId },
        jobPosition: { jobPositionId },
        minPay,
        maxPay,
        openPositionNumber,
      }) {
        return axios.post("http://localhost:8080/api/advertform/add", {
            deadlineDate,
          city: { id: cityId },
          description,
          employer: { id: employerId },
          jobPosition: { id: jobPositionId },
          minPay,
          maxPay,
          openPositionNumber,
        });

        
      }
      update({
          id,
        deadlineDate,
        city: { cityId },
        description,
        employer: { employerId },
        jobPosition: { jobPositionId },
        minPay,
        maxPay,
        openPositionNumber,
      }) {
        return axios.post("http://localhost:8080/api/advertform/update", {
           id,
            deadlineDate,
          city: { id: cityId },
          description,
          employer: { id: employerId },
          jobPosition: { id: jobPositionId },
          minPay,
          maxPay,
          openPositionNumber,
        });

        
      }
}