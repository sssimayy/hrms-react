
import React, { useState,useEffect } from "react";
import { Icon, Menu, Table,Button, Card } from "semantic-ui-react";
import CandidateService from "../services/candidateService"
import { Link } from "react-router-dom";

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
          {
              candidates.map(candidate =>(
                <Card key={candidate.id} fluid>
                <Card.Content>
                  <Card.Header>{candidate.name+" "+candidate.surname}</Card.Header>
                  <Card.Meta>{candidate.birthDate}</Card.Meta>
                  <Card.Description>
                    {candidate.email}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green" as={Link} to={`/cvs/${candidate.id}`}>
                      Click Here
                    </Button>
                  </div>
                </Card.Content>
              </Card>
              ))
          }
        
        
      </Card.Group>
    </div>
  );
}