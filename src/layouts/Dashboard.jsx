import React from 'react'
import Sidebar from './Sidebar'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import JobPositionList from '../pages/JobPositionList'
import EmployerList from '../pages/EmployerList'
import CandidateList from '../pages/CandidateList'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={JobPositionList}/>
                        <Route exact path="/jobPositions" component={JobPositionList}/>
                        <Route exact path="/employers" component={EmployerList}/>
                        <Route exact path="/candidates" component={CandidateList}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
