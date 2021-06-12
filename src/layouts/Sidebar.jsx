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
                    name='Employer'
                />
                <Menu.Item icon = "users" as={ NavLink } to="/candidates"
                    name='Candidate' 
                />
            </Menu>
        </div>
    )
}
