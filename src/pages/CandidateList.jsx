import React, { useEffect, useState } from 'react'
import { Button, Table } from 'semantic-ui-react';
import CandidateService from '../services/candidateService';
import { Link } from "react-router-dom";

export default function CandidateList() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        let candidateService = new CandidateService();
        candidateService.getAll().then(result => setCandidates(result.data.data));
    }, [])
    return (
        <div>
            <Table basic>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>CV</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {candidates.map((candidate) => (
                        <Table.Row key={candidate.id}>
                            <Table.Cell>{candidate.firstName}</Table.Cell>
                            <Table.Cell>{candidate.lastName}</Table.Cell>
                            <Table.Cell><Button basic color="green" as={Link} to={`/candidates/${candidate.id}`}>Cv</Button></Table.Cell>
                        </Table.Row>
                    ))}

                </Table.Body>
            </Table>
        </div>
    )
}
