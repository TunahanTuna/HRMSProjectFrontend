import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={signIn} className="ui green button">Login</Button>
                <Button className="ui blue button"  style={{marginLeft:"0.5em"} } as={Link} to="/register">Sign Up</Button>
            </Menu.Item>
        </div>
    )
}
