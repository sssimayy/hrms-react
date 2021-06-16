import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Image, Table, Button, Icon,Menu} from "semantic-ui-react";
import CvService from "../services/cvService";

export default function Cvs() {
    const [cvs, setCvs] = useState([]);

    useEffect(() => {
        let cvService = new CvService();
        cvService.getCvs().then((result) => setCvs(result.data.data));
    }, []);

    return (
        <div>
            <Table celled color={"black"}>
                <Table.Header>
                    <Table.Row>
                       
                        <Table.HeaderCell>University Name</Table.HeaderCell>
                        <Table.HeaderCell>Technologies</Table.HeaderCell>
                        <Table.HeaderCell>Graduation Date</Table.HeaderCell>
                        <Table.HeaderCell>Department</Table.HeaderCell>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {cvs.map((cv) => (
                        <Table.Row key={cv.id}>
                            <Table.Cell>{cv.universityName}</Table.Cell>
                            <Table.Cell>{cv.programmingLanguages}</Table.Cell>
                            <Table.Cell>{cv.gradDate}</Table.Cell>
                            <Table.Cell>{cv.department}</Table.Cell>
                            <Table.Cell>{cv.position}</Table.Cell>
                            <Table.Cell>
                                <Button as={Link} to={`/cvDetail/${cv.id}`}
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