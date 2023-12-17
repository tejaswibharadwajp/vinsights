import React from "react";
import {Sidenav, Nav, Toggle, Grid, Row, Col, Panel} from 'rsuite';
import './Dashboard.css';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { BarChart, YAxis, Bars, Line, PieChart } from '@rsuite/charts';
import {diseasedDeathsData, monthlyPatientTypesData} from './mockData/data';
import UpcomingAppointments from "../UpcomingAppointments/UpcomingAppointments";
function Dashboard() {
    const [expanded, setExpanded] = React.useState(false);
    const [activeKey, setActiveKey] = React.useState('1');
    return (
        <div className="">
            <Grid fluid>
                <Row>
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
                    <Col className="chartsPanel" xs={20}>
                        <div className={'pageHeader'}>Dashboard</div>
                        <Row>
                            <Col xs={8}>
                                <div className="analyticsBox1">
                                    <Panel shaded title='Patients Diseased'>
                                        <Row>
                                            <Row className={'panelCard'}>
                                                Diseased
                                            </Row>
                                            <Row className={'panelCardValue'}>
                                                200,216
                                            </Row>
                                        </Row>
                                    </Panel>
                                </div>
                            </Col>
                            <Col xs={8}>
                                <div className="analyticsBox2">
                                    <Panel shaded>
                                        <Row>
                                            <Row className={'panelCard'}>
                                                Deaths
                                            </Row>
                                            <Row className={'panelCardValue'}>
                                                100,008
                                            </Row>
                                        </Row>
                                    </Panel>
                                </div>
                            </Col>
                            <Col xs={8}>
                                <div className="analyticsBox3">
                                    <Panel shaded>
                                        <Row>
                                        <Row className={'panelCard'}>
                                            Recovered
                                        </Row>
                                        <Row className={'panelCardValue'}>
                                            100,016
                                        </Row>
                                        </Row>
                                    </Panel>
                                </div>
                            </Col>
                        </Row>
                            <BarChart data={diseasedDeathsData}>
                            <YAxis minInterval={1000000} axisLabel={(value) => `${value / 1000}`} />
                            <Bars name="Deaths" barWidth={10} />
                            <Line name="Diseased" />
                        </BarChart>
                        <Row>
                            <Col xs={12}>
                                <Panel header="Upcoming Appointments">
                                    <UpcomingAppointments />
                                </Panel>
                            </Col>
                            <Col xs={12}>
                                <Panel header='Visit Details'>
                                <PieChart name="Vist Type" data={monthlyPatientTypesData} legend={false} startAngle={210} />
                                </Panel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>

                </Row>

            </Grid>
        </div>
    );
}

export default Dashboard;
