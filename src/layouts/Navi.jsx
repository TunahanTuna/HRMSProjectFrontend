import React, { useState } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn';
import { NavLink, useHistory } from 'react-router-dom';
export default function Navi() {
    const [isAuthanticated, setIsAuthanticated] = useState(false);
    const history = useHistory();

    function handleSignOut() {
        setIsAuthanticated(false);
        history.push("/")
    }
    function handleSignIn() {
        setIsAuthanticated(true)
    }
    return (
        <div>
            <Menu size='large'>
                <Container>
                    <Menu.Item
                        name='home'  as={ NavLink } to="/"
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>
                        {isAuthanticated ? <SignedIn signOut ={handleSignOut}/>:<SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>

                </Container>

            </Menu>
        </div>
            )
}
