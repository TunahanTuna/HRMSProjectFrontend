import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import SignedOut from './SignedOut'

export default function Navi() {
    return (
        <div>
            <Menu size='large'>
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>
                        <SignedOut />
                    </Menu.Menu>

                </Container>

            </Menu>
        </div>
    )
}
