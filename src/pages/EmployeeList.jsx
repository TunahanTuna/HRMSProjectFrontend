import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/employeeService'
import { Table } from 'semantic-ui-react'

export default function EmployeeList() {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        let employeeService = new EmployeeService();
        employeeService.getAll().then(result => setEmployees(result.data.data))

    }, [])
    return (
        <div>
            <Table basic>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {employees.map((employee) => (
                        <Table.Row key={employee.id}>
                            <Table.Cell>{employee.firstName}</Table.Cell>
                            <Table.Cell>{employee.lastName}</Table.Cell>
                            <Table.Cell>{employee.title}</Table.Cell>
                            <Table.Cell>{employee.email}</Table.Cell>
                            <Table.Cell>{employee.password}</Table.Cell>
                        </Table.Row>
                    ))}

                </Table.Body>
            </Table>

        </div>
    )
}
