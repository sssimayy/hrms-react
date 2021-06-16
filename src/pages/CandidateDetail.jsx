import React, { useState ,useEffect} from "react";
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'
import CandidateService from "../services/candidateService"

export default function CandidateDetail() {
    let { id } = useParams();
  
    const [candidate, setCandidate] = useState({});
  
    useEffect(()=>{
      let candidateService = new CandidateService()
      candidateService.getByCandidateId(id).then(result=>setCandidate(result.data.data[0]))
    },[id])
    
        return (
        <div>
            <Card.Group>
               
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated="right"
                            size="mini"
                            src="/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>{candidate.id}</Card.Header>
                        
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className="ui two buttons">
                            <Button basic color="green">
                                Approve
                </Button>
                            <Button basic color="red">
                                Decline
                </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
}
