import React, { useEffect, useState } from 'react'
import AdvertFormService from '../services/advertFormService'
import { Table } from 'semantic-ui-react'
export default function AdvertFormList() {
    const [advertForms, setAdvertForms] = useState([])
    useEffect(() => {
        let advertFormService = new AdvertFormService()
        advertFormService.getAll().then(result => setAdvertForms(result.data.data))
    }, [])
    return (
        <div>
            <Table color="blue" key="blue">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Open Position Number</Table.HeaderCell>
                        <Table.HeaderCell>Deadline Date</Table.HeaderCell>
                        <Table.HeaderCell>Is Active</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {advertForms.map((advertForm) => (
                        <Table.Row key={advertForm.id}>
                            <Table.Cell>{advertForm.jobPosition.positionName}</Table.Cell>
                            <Table.Cell>{advertForm.employer.companyName}</Table.Cell>
                            <Table.Cell>{advertForm.city.cityName}</Table.Cell>
                            <Table.Cell>{advertForm.openPositionNumber}</Table.Cell>
                            <Table.Cell>{advertForm.deadlineDate}</Table.Cell>
                            <Table.Cell>{advertForm.active.toString()}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
