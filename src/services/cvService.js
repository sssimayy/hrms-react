import axios from "axios";

export default class CvService{
    getCvs(){
        return axios.get("http://localhost:8081/api/cv/getAllCv");
    }

    getByCandidateId(id){
        return axios.get("http://localhost:8081/api/cv/getAllCandidatesCv?id="+id)
    }
}