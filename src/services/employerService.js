import axios from "axios";

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8081/api/jobAdvert/getAllAdverts");
    }

    getEmployerById(id){
        return axios.get("http://localhost:8081/api/jobAdvert/getAllActiveAdvertsOfFirm?id="+id)
    }

    
}