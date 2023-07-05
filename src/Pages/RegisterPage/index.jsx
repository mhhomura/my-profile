import React from "react";
import Input from "../../components/Input";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import google from '../../Assets/iconLogin/google.svg';
import facebook from '../../Assets/iconLogin/facebook.svg';
import wordpress from '../../Assets/iconLogin/wordpress.svg';
import baicon from '../../Assets/baIcon/baicon.png';
import RocketIcon from '@mui/icons-material/Rocket';
import { useNavigate } from "react-router-dom";

import {
    Container,
    ColumnA,
    ColumnB,
    LoginWith,
    ButtonCreate,
    DiVButton,
    Title,
} from './styles';

const RegisterPage = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <ColumnA>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <img src={baicon} alt="ba" style={{ width: '60%' }} />
                </div>
                <div style={{ alignContent: 'center', alignItems: 'center', height: '40%', color: '#FFFFFF', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ paddingBottom: '15px' }}>
                        <RocketIcon fontSize="large" />
                    </div>
                    <div>
                        <p>
                            Reach new markets with the best digital marketing platform
                        </p>
                    </div>
                </div>
            </ColumnA>
            <ColumnB>
                <div className="container text-center">
                    <Title>Sign Up</Title>
                    <span>Or you can sign up with one of this account</span>
                    <LoginWith>
                        <div>
                            <img src={google} alt="g" style={{ width: '50px', cursor: 'pointer' }} />
                            <img src={facebook} alt="g" style={{ width: '50px', cursor: 'pointer' }} />
                            <img src={wordpress} alt="g" style={{ width: '50px', cursor: 'pointer' }} />
                        </div>
                    </LoginWith>
                    <div className="row">
                        <div className="col">
                            <Input icon={<PersonIcon />} type="text" placeholder="Name" />
                            <Input icon={<PhoneAndroidIcon />} type="text" placeholder="Phone Number" />
                        </div>
                        <div className="col">
                            <Input icon={<EmailIcon />} type="email" placeholder="Email" />
                            <Input icon={<LockIcon />} type="password" placeholder="Password" />
                        </div>
                    </div>
                    <span>By signing up, you agree to our <a href="">Termos of Use</a> and acknowledge you've read our <a href="">Privacy Policy</a></span>
                    <DiVButton>
                        <ButtonCreate onClick={() => navigate('/dashboard')}> Sign Up </ButtonCreate>
                    </DiVButton>
                </div>
            </ColumnB>
        </Container>
    )
}

export default RegisterPage;