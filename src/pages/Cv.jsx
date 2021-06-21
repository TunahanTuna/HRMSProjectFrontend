import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CandidateService from "../services/candidateService";
import { Card, Image, Table, Header } from "semantic-ui-react";

export default function CvDetail() {
    let { id } = useParams();

    const [cv, setCv] = useState({});
    const [candidate, setCandidate] = useState([])
    useEffect(() => {
        let candidateService = new CandidateService();
        candidateService.getCandidateCvtoId(id).then((result) => setCv(result.data.data));
        candidateService.getCandidateById(id).then((result) => setCandidate(result.data.data))
    }, [id]);


    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        {cv.cvImages?.map((image) => (
                            <Image
                                floated="left"
                                size="small"
                                src={image?.imageUrl}
                                circular
                                key={image?.id}
                            />
                        ))}

                        <Card.Header>
                            {candidate.firstName + " " + candidate.lastName}
                        </Card.Header>

                        <Card.Description>
                            <Table celled color={"black"}>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>User</Table.HeaderCell>
                                        <Table.HeaderCell>Details</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>First Name</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{candidate.firstName}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Last Name</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{candidate.lastName}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Birth Date</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{candidate.birthDate}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Email</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{candidate.email}</Table.Cell>
                                    </Table.Row>

                                </Table.Body>
                            </Table>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                </Card>
            </Card.Group>

            <Card fluid>
                <Card.Content header="Links" />
                <Table celled color={"black"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Social Media</Table.HeaderCell>
                            <Table.HeaderCell>Link</Table.HeaderCell>
                            
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {cv.cvLinks?.map((link) => (
                            <Table.Row key={link.linkId}>
                                <Table.Cell>{link.name}</Table.Cell>
                                <Table.Cell><a href={link.url} target="_blank">{link.url}</a></Table.Cell>
                                
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card>

            <Card fluid>
                <Card.Content header="Educations" />
                <Table celled color={"black"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>School Name</Table.HeaderCell>
                            <Table.HeaderCell>Department</Table.HeaderCell>
                            <Table.HeaderCell>Start Date</Table.HeaderCell>
                            <Table.HeaderCell>Graduate Date</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {cv.cvEducations?.map((school) => (
                            <Table.Row key={school.schoolId}>
                                <Table.Cell>{school.schoolName}</Table.Cell>
                                <Table.Cell>{school.schoolDeparment}</Table.Cell>
                                <Table.Cell>{school.startingYear}</Table.Cell>
                                <Table.Cell>{school.graduationYear}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card>

            <Card fluid>
                <Card.Content header="Foreign Languages" />
                <Table celled color={"black"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Languga Name</Table.HeaderCell>
                            <Table.HeaderCell>Level min:1 max:5</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {cv.cvForeignLanguage?.map((language) => (
                            <Table.Row key={language.languageId}>
                                <Table.Cell>{language.foreignLanguage}</Table.Cell>
                                <Table.Cell>{language.level}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card>

            <Card fluid>
                <Card.Content header="Skills" />
                <Table celled color={"black"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Skill</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {cv.cvSkills?.map((skill) => (
                            <Table.Row key={skill.skillId}>
                                <Table.Cell>{skill.skill}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card>
        </div>
    );
}