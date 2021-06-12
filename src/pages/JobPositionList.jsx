import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import JobPositionService from '../services/jobPositionService';
export default function JobPositionList() {


    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getAll().then(result => setJobPositions(result.data.data));
    }, [])

    return (
        <div>
            <Table basic>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobPositions.map((jobPostion) => (
                        <Table.Row key={jobPostion.id}>
                            <Table.Cell>{jobPostion.id}</Table.Cell>
                            <Table.Cell>{jobPostion.positionName}</Table.Cell>
                        </Table.Row>
                    ))}

                </Table.Body>
            </Table>
        </div>
    )
}
