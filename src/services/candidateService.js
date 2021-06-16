import axios from "axios"

export default class CandidateService{
     getCandidates(){
         return axios.get("http://localhost:8081/api/candidate/getAll")
     }

     getByCandidateId(id){
        return axios.get("http://localhost:8081/api/candidate/getByCandidateId?id="+ id)
    }
}