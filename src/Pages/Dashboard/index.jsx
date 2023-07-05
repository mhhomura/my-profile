import React from "react";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BackGround from '../../Assets/back2.jpg';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

import {
    Container,
    Content,
    DivBottom,
    DivNav,
    ApresentationDiv,
    BackgroundImage,
    TextP2,
    TextP1,
    TitleH3,
    TitleH1,
} from './styled';

const Dashboard = () => {

    const home = React.useRef(null);
    const about = React.useRef(null);
    const contact = React.useRef(null);

    const handleNavigation = (selectedContainerRef) => {
        selectedContainerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <Container>
            <Content>
                <DivNav>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ background: '#F8FAFD ', height: '100px' }}>
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div style={{ padding: '2px 10px' }} >
                                    <Avatar sx={{ width: 56, height: 56, cursor: 'pointer' }} onClick={() => handleNavigation(home)} alt="Your Name" src="/" />
                                </div>
                                <div style={{}} onClick={() => handleNavigation(home)}>
                                    <div> <span style={{ fontWeight: '800', color: '#434343', cursor: 'pointer' }}> Your Name</span> </div>
                                </div>
                            </div>
                            {/*  <div style={{ padding: '2px 2%' }}>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Enlgish
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Spanish</a></li>
                                            <li><a className="dropdown-item" href="#">Portugusese</a></li>
                                            <li><a className="dropdown-item" href="#">Something else</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div> */}
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Typography onClick={() => handleNavigation(home)} sx={{ minWidth: 100, cursor: 'pointer' }}>Home</Typography>
                                <Typography onClick={() => handleNavigation(about)} sx={{ minWidth: 100, cursor: 'pointer' }}>About</Typography>
                                <Typography onClick={() => handleNavigation(contact)} sx={{ minWidth: 100, cursor: 'pointer' }}>Contacts</Typography>
                            </Box>
                        </div>
                    </nav>
                </DivNav>

                <DivBottom>
                    <BackgroundImage style={{ backgroundImage: `url(${BackGround})` }} />
                    <ApresentationDiv ref={home} id="home">
                        <TitleH1>Hello there, Im "Your Name" </TitleH1>
                        <TextP1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</TextP1>
                    </ApresentationDiv>
                    <ApresentationDiv ref={about} id="about">
                        <TitleH3>About Me</TitleH3>
                        <TextP2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</TextP2>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingTop: '5%' }}>
                            <div style={{ width: '50%', }}>
                                <TitleH3 style={{ textAlign: 'left', fontSize: '1.4rem', letterSpacing: '0px' }}>Get to know me!</TitleH3>
                                <TextP2 style={{ textAlign: 'left' }}>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                                </TextP2>
                                <TextP2 style={{ textAlign: 'left' }}>
                                    similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
                                </TextP2>
                                <TextP2 style={{ textAlign: 'left' }}>
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus
                                </TextP2>

                            </div>
                            <div style={{ width: '50%' }}>
                                <TitleH3 style={{ textAlign: 'left', fontSize: '1.4rem', letterSpacing: '0px' }}>My Skills</TitleH3>
                                <div >
                                    <div style={{ textAlign: 'center' }}>
                                        <Chip label="HTML" sx={{ margin: '5px' }} />
                                        <Chip label="CSS" sx={{ margin: '5px' }} />
                                        <Chip label="Java Script" sx={{ margin: '5px' }} />
                                        <Chip label="Type Script Filled" sx={{ margin: '5px' }} />
                                        <Chip label="React" sx={{ margin: '5px' }} />
                                        <Chip label="Nexo" sx={{ margin: '5px' }} />
                                        <Chip label="PWA" sx={{ margin: '5px' }} />
                                        <Chip label="Styled-Component" sx={{ margin: '5px' }} />
                                        <Chip label="Tailwind CSS" sx={{ margin: '5px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ApresentationDiv>
                    <ApresentationDiv ref={contact} id="contact">
                        <TitleH3>Contact</TitleH3>
                        <TextP2>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                        </TextP2>
                    </ApresentationDiv>
                </DivBottom>
            </Content >
        </Container >
    )
}

export default Dashboard;