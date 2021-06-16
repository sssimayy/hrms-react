import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CvService from "../services/cvService";
import { Card, Image, Table, Header, Button, Icon } from "semantic-ui-react";

export default function CvDetail() {
    let { id } = useParams();

    const [cv, setCv] = useState({});

    useEffect(() => {
        let cvService = new CvService();
        cvService.getByCandidateId(id).then((result) => setCv(result.data.data[0]));
    }, [id]);

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>

                    <Card.Header>
                            {cv.candidate.name + " " + cv.candidate.surname}
                        </Card.Header>
                        <Card.Meta>
                            <strong>{cv.biography}</strong>
                        </Card.Meta>
                        <Card.Description>
                            <Table celled color={"black"}>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>User</Table.HeaderCell>
                                        <Table.HeaderCell>Information</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Name</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{cv.candidate.name}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Surname</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{cv.candidate.surname}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Birth Date</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{cv.candidate.birthDate}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Email</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{cv.candidate.email}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>
                                                    <a
                                                        href={cv.githubAddress}
                                                        target={"_blank"}
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button secondary>
                                                            <Icon name="github" /> Github
                            </Button>
                                                    </a>
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{cv.githubAddress}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>
                                                    <a
                                                        href={cv.linkedinAddress}
                                                        target={"_blank"}
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button color="linkedin">
                                                            <Icon name="linkedin" /> LinkedIn
                            </Button>
                                                    </a>
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{cv.linkedinAddress}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                </Card>
            </Card.Group>
            <Card fluid>
                <Card.Content header="Cover Letter" />
                <Card.Content description={cv.coverLetter} />
            </Card>

            <Card fluid>
                <Card.Content header="University Name" />
                <Table celled color={"black"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>University Name</Table.HeaderCell>
                            <Table.HeaderCell>Department</Table.HeaderCell>
                            <Table.HeaderCell>Grad Date</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>


                        <Table.Cell>{cv.universityName}</Table.Cell>
                        <Table.Cell>{cv.department}</Table.Cell>
                        <Table.Cell>{cv.gradDate}</Table.Cell>


                    </Table.Body>
                </Table>
            </Card>

            <Card fluid>
                <Card.Content header="Foreign Languages" />
                <Table celled color={"black"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Language Name</Table.HeaderCell>
                            <Table.HeaderCell>Level min:1 max:5</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>

                    <Table.Cell>{cv.foreignLanguages}</Table.Cell>
                        <Table.Cell>{cv.languageLevel}</Table.Cell>

                    </Table.Body>

                </Table>
            </Card>

            <Card fluid>
                <Card.Content header="Technologies" />
                <Table celled color={"black"}>
                    <Table.Header>
                        
                    </Table.Header>

                    <Table.Body>


                        <Table.Cell>{cv.programmingLanguages}</Table.Cell>

                    </Table.Body>

                </Table>
            </Card>
        </div>
    );
}