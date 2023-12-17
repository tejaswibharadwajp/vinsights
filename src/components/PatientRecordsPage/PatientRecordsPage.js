import React from "react";
import {Sidenav, Nav, Toggle, Grid, Row, Col, Table, Pagination} from 'rsuite';
import './PatientRecordsPage.css';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { mockUsers } from './mock';
const defaultData = mockUsers(100);

function PatientRecordsPage() {
    const [expanded, setExpanded] = React.useState(false);
    const [activeKey, setActiveKey] = React.useState('1');
    const [limit, setLimit] = React.useState(50);
    const [page, setPage] = React.useState(1);
    const { Column, HeaderCell, Cell } = Table;
    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const data = defaultData.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });
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
                    <Col className="" xs={20}>
                        <Table height={420} data={data}>
                            <Column width={50} align="center" fixed>
                                <HeaderCell>Id</HeaderCell>
                                <Cell dataKey="id" />
                            </Column>

                            <Column width={100} fixed>
                                <HeaderCell>First Name</HeaderCell>
                                <Cell dataKey="firstName" />
                            </Column>

                            <Column width={100}>
                                <HeaderCell>Last Name</HeaderCell>
                                <Cell dataKey="lastName" />
                            </Column>

                            <Column width={200}>
                                <HeaderCell>City</HeaderCell>
                                <Cell dataKey="city" />
                            </Column>
                            <Column width={200} flexGrow={1}>
                                <HeaderCell>Email</HeaderCell>
                                <Cell dataKey="email" />
                            </Column>
                        </Table>
                        <div style={{ padding: 20 }}>
                            <Pagination
                                prev
                                next
                                first
                                last
                                ellipsis
                                boundaryLinks
                                maxButtons={5}
                                size="xs"
                                layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                                total={defaultData.length}
                                limitOptions={[10, 30, 50]}
                                limit={limit}
                                activePage={page}
                                onChangePage={setPage}
                                onChangeLimit={handleChangeLimit}
                            />
                        </div>
                    </Col>
                </Row>

            </Grid>
        </div>
    );
}

export default PatientRecordsPage;
