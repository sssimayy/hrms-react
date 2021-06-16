import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EmployerService from "../services/employerService";
import { Header, Table, Icon, Card, Button } from "semantic-ui-react";
import JobAdService from "../services/jobAdService";
import { Link } from "react-router-dom";

export default function EmployerDetail() {
  let { id } = useParams();

  const [employer, setEmployer] = useState({});
  const [jobAds, setJobAds] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    let jobAdService = new JobAdService();
    employerService
      .getEmployerById(id)
      .then((result) => setEmployer(result.data.data[0]));
    jobAdService
      .getActiveAdsByCompanyId(id)
      .then((result) => setJobAds(result.data.data));
  },[id]);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employer</Table.HeaderCell>
            <Table.HeaderCell>Information</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>
                  <Icon name="building" />
                  Company Name
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.companyName}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>
                  <Icon name="world" />
                  Web Site
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.webSite}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>
                  <Icon name="mail" />
                  Email
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.email}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>
                  <Icon name="phone" />
                  Company Phone
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.phone}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Card fluid>
        <Card.Content header="Bu Şirkete Ait İş İlanları" />
        <Card.Content>
          <Table color={"black"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Work Position</Table.HeaderCell>
                <Table.HeaderCell>City</Table.HeaderCell>
                <Table.HeaderCell>Is Open?</Table.HeaderCell>
                <Table.HeaderCell>Working Location</Table.HeaderCell>
                <Table.HeaderCell>Working Time</Table.HeaderCell>
                <Table.HeaderCell>Details</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {jobAds.map((jobAd) => (
                <Table.Row key={jobAd.id}>
                  <Table.Cell>{jobAd.jobPosition.title}</Table.Cell>
                  <Table.Cell>{jobAd.city.name}</Table.Cell>
                  <Table.Cell>{jobAd.jobPosition.isActive}</Table.Cell>
                  <Table.Cell>{jobAd.city.location}</Table.Cell>
                  <Table.Cell>{jobAd.city.jobTime}</Table.Cell>
                  <Table.Cell>
                    <Button animated as={Link} to={`/jobads/${jobAd.id}`}>
                      <Button.Content visible>Detayları Gör</Button.Content>
                      <Button.Content hidden>
                        <Icon name="arrow right" />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card.Content>
        <Card.Content extra>
          <Icon name="list" />
          {jobAds?.length} job posting available
        </Card.Content>
      </Card>
    </div>
  );
}