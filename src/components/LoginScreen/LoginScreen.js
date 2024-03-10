import React from "react";
import './LoginScreen.css';
import {Input, Button, Panel} from 'rsuite';
import background from '../../icons/background.jpeg'

function LoginScreen() {
    const [userName, setUserName] =  React.useState('');
    const [password, setPassword] =  React.useState('');
    const [showError, setShowError] =  React.useState(false);
    const handleLoginClick = () => {
        if(userName === 'admin' && password === 'admin') {
            window.location.replace('/home');
            setShowError(false);
        } else {
            setShowError(true);
        }
    }
    return (
        <div className="loginContainer">
            <div className="loginLeftContainer">
                <div><span className={"fontV"}>v</span><span className={"projectFont"}>Sights</span></div>
                <div>Welcome to vights Al based analytical Software gives 360&#176; view of member-level revenues and claims details to Physician group to improve financial performance of risk, shared savings and incentive contracts.</div>
            </div>
            <div className={"loginRightContainer"}>
                <div className={'loginRightPanelContainer'}>
                    <Panel shaded className={'loginPanel'}>
                        <Input onChange={(val) =>  setUserName(val)} className='inputContainer' size="md" placeholder="Username" />
                        <Input onChange={(val) => setPassword(val)} className='inputContainer' size="md" type="password"  placeholder="Password" />
                        {showError && <div style={{marginBottom: '10px', color:'red'}}>Invalid username/password</div>}
                        <div style={{marginBottom: '10px'}}>Forgot Password?</div>

                        <Button onClick={handleLoginClick}>Login</Button>

                    </Panel>

                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
