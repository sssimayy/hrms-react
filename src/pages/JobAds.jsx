import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Table, Button } from "semantic-ui-react";
import JobAdService from "../services/jobAdService";

export default function JobAds() {
  const [jobAds, setJobAds] = useState([]);

  useEffect(() => {
    let jobAdService = new JobAdService();
    jobAdService.getActiveJobAds().then((result) => setJobAds(result.data.data));
  }, []);

  return (
    <div>
      <Table celled color={"black"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Salary Min</Table.HeaderCell>
            <Table.HeaderCell>Salary Max</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Is Active?</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            jobAds.map(jobAd => (
            <Table.Row key={jobAd.id}>
              <Table.Cell>{jobAd.companyName}</Table.Cell>
              <Table.Cell>{jobAd.description}</Table.Cell>
              <Table.Cell>{jobAd.salaryMin}</Table.Cell>
              <Table.Cell>{jobAd.salaryMax}</Table.Cell>
              <Table.Cell>{jobAd.deadline}</Table.Cell>
              <Table.Cell>{jobAd.isActive}</Table.Cell>

              <Table.Cell>
                <Button as={Link} to={`/jobads/${jobAd.id}`}
                  content="Details"
                  icon="right arrow"
                  labelPosition="right"
                />
              </Table.Cell>
            </Table.Row>
            ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}