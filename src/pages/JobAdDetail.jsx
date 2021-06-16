import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import JobAdService from "../services/jobAdService";
import { Header, Icon, Table, Button, Grid, Card } from "semantic-ui-react";

export default function JobAdDetail() {
  let { id } = useParams();

  const [jobAd, setJobAd] = useState({});

  useEffect(() => {
    let jobAdService = new JobAdService();
    jobAdService.getActiveAdsByCompanyId(id).then((result) => setJobAd(result.data.data[0]));
  }, [id]);

  return (
    <div>
      <Card fluid color={"black"}>
        <Card.Content header="Açıklama" />
        <Card.Content>
            {jobAd.description}
        </Card.Content>
      </Card>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={6}>
            <Table celled color={"black"} stackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Employer</Table.HeaderCell>
                  <Table.HeaderCell>Information</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="building" />
                        Company Name
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAd.companyName}</Table.Cell>
                </Table.Row>

            

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="phone" />
                        Company Phone
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAd.phone}</Table.Cell>
                </Table.Row>

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="world" />
                        Web Site
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAd.website}</Table.Cell>
                </Table.Row>

                
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={10}>
            <Table celled fixed singleLine color={"black"}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Job Advert</Table.HeaderCell>
                  <Table.HeaderCell>Details</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Work Position</Table.Cell>
                  <Table.Cell>{jobAd.city.location}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>City</Table.Cell>
                  <Table.Cell>{jobAd.city.name}</Table.Cell>
                </Table.Row>

          

                <Table.Row>
                  <Table.Cell>Minimum Salary</Table.Cell>
                  <Table.Cell>{jobAd.salaryMin}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Maximum Salary</Table.Cell>
                  <Table.Cell>{jobAd.salaryMax}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Open Positions</Table.Cell>
                  <Table.Cell>{jobAd.openPositionCount}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Published Date</Table.Cell>
                  <Table.Cell>{jobAd.publishedAt}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Deadline</Table.Cell>
                  <Table.Cell>{jobAd.deadline}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      
    </div>
  );
}