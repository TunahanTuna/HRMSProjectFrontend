import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
            <Menu pointing secondary vertical>
                <Menu.Item icon="briefcase" as={ NavLink } to="/jobPositions"
                    name='Job Positions'
                />
                <Menu.Item icon="building" as={ NavLink } to="/employers"
                    name='Employers'
                />
                <Menu.Item icon = "user" as={ NavLink } to="/candidates"
                    name='Candidates' 
                />
                <Menu.Item icon = "users" as={ NavLink } to="/employees"
                    name='Employees' 
                />
                <Menu.Item icon = "users" as={ NavLink } to="/advertForms"
                    name='Advert Forms' 
                />
            </Menu>
        </div>
    )
}
