import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Icon, Menu, Table, Button } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function Employers() {
    const [employers, setEmployers] = useState([]);
    const [employerDetail, setEmployerDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployers().then((result) => setEmployers(result.data.data));
    }, []);
    
    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployerById(id).then((result) => setEmployerDetail(result.data.data));
    }, [id]);

    return (
        <div>
            <Table celled color={"black"}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Open Position Count</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Is Open?</Table.HeaderCell>
                        <Table.HeaderCell>Details</Table.HeaderCell>


                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.description}</Table.Cell>
                                <Table.Cell>{employer.openPositionCount}</Table.Cell>
                                <Table.Cell>{employer.deadline}</Table.Cell>
                                <Table.Cell>{employer.isOpen}</Table.Cell>
                                <Table.Cell>
                                    <Button as={Link} to={`/employers/${employer.id}`}
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
                        <Table.HeaderCell colSpan="6">
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