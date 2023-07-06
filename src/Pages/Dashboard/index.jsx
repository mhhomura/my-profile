import React from 'react';
import ProjectImage from '../../Assets/projects/project.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import BackGround from '../../Assets/back2.jpg';
import CardP from "../../components/Cards";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

import {
    ApresentationDiv,
    BackgroundImage,
    DivBottom,
    Container,
    TitleH3,
    Content,
    TitleH1,
    Footer,
    DivNav,
    TextP2,
    TextP1,
    Right,
    Left,
} from './styled';

const Dashboard = () => {

    const projects = React.useRef(null);
    const contact = React.useRef(null);
    const about = React.useRef(null);
    const home = React.useRef(null);

    const handleNavigation = (selectedContainerRef) => {
        selectedContainerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const [year, setYear] = React.useState();

    React.useEffect(() => {
        const data = new Date();
        setYear(data.getFullYear());
    }, []);

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
                                <Typography onClick={() => handleNavigation(projects)} sx={{ minWidth: 100, cursor: 'pointer' }}>Projects</Typography>
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
                    {/* Projects */}
                    <ApresentationDiv ref={projects} id="projects">
                        <TitleH3>Projects</TitleH3>
                        <TextP2>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</TextP2>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingTop: '5%' }}>
                            <Left>
                                <CardP title="Project 1" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis" link="https://github.com/mhhomura" image={ProjectImage} />
                            </Left>
                            <Right >
                                <TitleH3 style={{ textAlign: 'left', fontSize: '1.4rem', letterSpacing: '0px' }}>Tools Used</TitleH3>
                                <div >
                                    <div style={{ textAlign: 'center' }}>
                                        <Chip label="HTML" sx={{ margin: '5px' }} />
                                        <Chip label="CSS" sx={{ margin: '5px' }} />
                                        <Chip label="Java Script" sx={{ margin: '5px' }} />
                                        <Chip label="React" sx={{ margin: '5px' }} />
                                        <Chip label="Styled-Component" sx={{ margin: '5px' }} />
                                        <Chip label="Vite" sx={{ margin: '5px' }} />
                                        <Chip label="Material-UI" sx={{ margin: '5px' }} />
                                    </div>
                                </div>
                            </Right>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingTop: '5%' }}>
                            <Left >
                                <CardP param={2} title="Project 2" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis" link="https://github.com/mhhomura" image={ProjectImage} link2="https://mhomura.com/" />
                            </Left>
                            <Right >
                                <TitleH3 style={{ textAlign: 'left', fontSize: '1.4rem', letterSpacing: '0px' }}>Tools Used</TitleH3>
                                <div >
                                    <div style={{ textAlign: 'center' }}>
                                        <Chip label="HTML" sx={{ margin: '5px' }} />
                                        <Chip label="CSS" sx={{ margin: '5px' }} />
                                        <Chip label="Java Script" sx={{ margin: '5px' }} />
                                        <Chip label="React" sx={{ margin: '5px' }} />
                                        <Chip label="Styled-Component" sx={{ margin: '5px' }} />
                                        <Chip label="Material-UI" sx={{ margin: '5px' }} />
                                    </div>
                                </div>
                            </Right>
                        </div>
                    </ApresentationDiv>

                    <ApresentationDiv ref={contact} id="contact">
                        <TitleH3>Contact</TitleH3>
                        <TextP2>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                        </TextP2>
                    </ApresentationDiv>
                    <Footer>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderBottom: '1px solid #ffffff' }}>
                            <div style={{ textAlign: 'left', width: '50%' }}>
                                <TitleH3 style={{ color: '#ffffff', fontSize: '1.4rem', textAlign: 'left' }}>Your Name</TitleH3>
                                <TextP2 style={{ color: '#ffffff', fontSize: '0.9rem', textAlign: 'left' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</TextP2>
                            </div>
                            <div style={{ textAlign: 'right', width: '50%' }}>
                                <TitleH3 style={{ color: '#ffffff', textAlign: 'right', fontSize: '1.2rem' }}>Social</TitleH3>
                                <TextP2 style={{ color: '#ffffff', fontSize: '1rem', textAlign: 'right' }}>
                                    <LinkedInIcon fontSize="large" style={{ cursor: 'pointer', margin: '10px' }} onClick={() => window.open('/')} />
                                    <GitHubIcon fontSize="large" style={{ cursor: 'pointer', margin: '10px' }} onClick={() => window.open('/')} />
                                </TextP2>
                            </div>
                        </div>
                        <div>
                            <TextP2 style={{ color: '#ffffff', textAlign: 'center', marginTop: '5%' }}>
                                © Copyright {year}. Made by Matheus Homura
                            </TextP2>
                        </div>
                    </Footer>
                </DivBottom>
            </Content >
        </Container >
    )
}

export default Dashboard;