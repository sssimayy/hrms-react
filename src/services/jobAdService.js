import axios from "axios";

export default class JobAdService{
    getActiveJobAds(){
        return axios.get("http://localhost:8081/api/jobAdvert/getAllActiveAdverts");
    }

   /* getByJobAdId(id){
        return axios.get("https://kodlamaio-hrms.herokuapp.com/api/jobAd/getByJobAdId?id="+id)
    }*/

    getActiveAdsByCompanyId(id){
        return axios.get("http://localhost:8081/api/jobAdvert/getAllActiveAdvertsOfFirm?id="+id)
    }

    add(values){
        return axios.post("http://localhost:8081/api/jobAdvert/add",values)
    }

    
}