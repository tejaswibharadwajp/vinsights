import './LoginScreen.css';
import {Input, Button, Panel} from 'rsuite';
import background from '../../icons/background.jpeg'

function LoginScreen() {
    return (
        <div className="loginContainer">
            <div className="loginLeftContainer">
                <div><span className={"fontV"}>V</span><span className={"projectFont"}>insights</span></div>

            </div>
            <div className={"loginRightContainer"}>
                <div className={'loginRightPanelContainer'}>
                    <Panel shaded className={'loginPanel'}>
                        <Input className='inputContainer' size="md" placeholder="Username" />
                        <Input className='inputContainer' size="md" type="password"  placeholder="Password" />
                        <Button>Login</Button>
                    </Panel>

                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
