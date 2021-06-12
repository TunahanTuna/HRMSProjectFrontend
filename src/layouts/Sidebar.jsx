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
                <Menu.Item icon="building"
                    name='Employer'
                />
                <Menu.Item icon = "user"
                    name='Candidate'
                />
            </Menu>
        </div>
    )
}
