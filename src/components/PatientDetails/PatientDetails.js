import React from "react";
import patientImage from '../../assets/patient.png';
import './PatientDetails.css';
import {Row, Col, Grid, Sidenav, Nav, Button} from 'rsuite';
import tileBackground from './tileBackground.png';
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
function PatientDetails(props) {
    const [expanded, setExpanded] = React.useState(false);
    const [activeKey, setActiveKey] = React.useState('1');
    const [showAll, setShowAll] = React.useState(false);
    const generateFlipCard = (data) => {
        return (<div className={!showAll ? "flip-card": "flip-card"}>
            <div className={!showAll ? "flip-card-inner": "flip-card-inner flip-card-transform"}>
                <div className="flip-card-front">
                    {data.heading}
                </div>
                <div className="flip-card-back">
                    <h6>{data.heading}</h6>
                    {data.noList ?  <div>
                        {data.details?.map(item => <div>{item}</div>)}
                    </div>: <ul>
                        {data.details?.map(item => <li>{item}</li>)}
                    </ul>}
                </div>
            </div>
        </div>)
    }
    return (
        <Grid fluid className="">
            <Col>
                <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']}>
                    <Sidenav.Body>
                        <Nav activeKey={activeKey} onSelect={setActiveKey}>
                            <Nav.Item eventKey="1" icon={<DashboardIcon /> } href={'/home'}>
                                Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<GroupIcon />} href={'/patientrecords'}>
                                Patient Records
                            </Nav.Item>
                            <Nav.Menu
                                placement="rightStart"
                                eventKey="4"
                                title="Settings"
                                icon={<GearCircleIcon />}
                            >
                                <Nav.Item eventKey="4-1">Applications</Nav.Item>
                                <Nav.Item eventKey="4-2">Channels</Nav.Item>
                                <Nav.Item eventKey="4-3">Versions</Nav.Item>
                            </Nav.Menu>
                        </Nav>
                    </Sidenav.Body>
                    <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
                </Sidenav>

            </Col>
            <Col xs={20}>
                <div className={'patientDetailHeaderContainer'}>
                    <div className={'pageHeader'}>Patient Information</div>
                     <div style={{margin:'0px'}}>   <Button onClick={() => setShowAll(!showAll)}>Toggle Tiles</Button></div>
                    </div>
            <Row className="gridContainer">
                <Col lg={8}>
                    {generateFlipCard({
                        heading: 'Problem',
                        details: [
                            'Psoriasis (L40.0)',
                            'LT Use of Immune Suppressive Biologic'
                        ]
                    })}
                </Col>
                <Col lg={8}>  {generateFlipCard({
                    heading: 'Conditions & Comorbidities',
                    details: [
                        'Psoriasis (L40.0)',
                        'Hypothyroid',
                        'Hypertension'
                    ]
                })}</Col>
                <Col lg={8}>{ generateFlipCard({
                    heading: 'Drug Exposures',
                    details: [
                        'Taltz 80 MG/ML Subcutaneous Sol. Auto Injector',
                        'Topicort',
                        'Clonaze PAM'
                    ]
                })}</Col>
            </Row>
            <Row className="gridContainer">
                <Col lg={8}>{ generateFlipCard({
                    heading: 'Symptoms',
                    details: [
                        'Psoriasis Vulagaris',
                        'Plaque Psoriasis',
                        'Skin Rashes'
                    ]
                })}</Col>
                <Col lg={8}>
                    <div className={"flip-card"}>
                    <img className={'patientImage'} src={patientImage} alt={'patient data'}/>
                    </div>
                </Col>
                <Col lg={8}>{ generateFlipCard({
                    heading: 'Lab & Biomarkers',
                    details: [
                        'Pt and Ptt',
                        'Vitamin D, 25 Hydroxy – 39.7 ng/ML',
                        'HGB - 12.1 g/dl',
                        'RA Latex Turbid - < 7.0 IU/ML'
                    ]
                })}</Col>
            </Row>
            <Row className="gridContainer">
                <Col lg={8}>{ generateFlipCard({
                    heading: 'NPI Specialty',
                    details: [
                        'Dermatology/ Procedural Dermatology',
                        'Internal Medicine',
                        'Rheumatology'
                    ]
                })}</Col>
                <Col lg={8}>{ generateFlipCard({
                    heading: 'Procedures',
                    details: [
                        'Injection Intralesional Upto & Include 7 Lesions (99213)',
                        'Therapeutic Prophylactic/Dx Injection subq/IM (96372)',
                        'Office/Outpatient Established Low MDM 20-29 Min(99213)'
                    ]
                })}</Col>
                <Col lg={8}>{ generateFlipCard({
                    heading: 'Socio - Demo',
                    noList: true,
                    details: [
                        'Jack Daniel',
                        '67',
                        'Male',
                        'Not Hispanic',
                        'White',
                        'Smoke Flag= N'
                    ]
                })}</Col>
            </Row>
            </Col>
        </Grid>
    );
}

export default PatientDetails;
