import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
export default function SignedOut() {
    return (
        <div>
            <Menu.Item>
                <Button className="ui green button">Login</Button>
                <Button className="ui blue button"  style={{marginLeft:"0.5em"}}>Sign Up</Button>
            </Menu.Item>
        </div>
    )
}
