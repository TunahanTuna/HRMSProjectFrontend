import React from 'react'
import Sidebar from './Sidebar'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {/* <Route exact path="/" /> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
