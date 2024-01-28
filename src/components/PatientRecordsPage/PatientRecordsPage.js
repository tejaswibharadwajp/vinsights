import React from "react";
import {Sidenav, Nav, Toggle, Grid, Row, Col, Table, Pagination} from 'rsuite';
import './PatientRecordsPage.css';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { mockUsers } from './mock';
import { createBrowserHistory } from 'history';


const defaultData = mockUsers(100);

function PatientRecordsPage() {
    const [expanded, setExpanded] = React.useState(false);
    const [activeKey, setActiveKey] = React.useState('1');
    const [limit, setLimit] = React.useState(50);
    const [page, setPage] = React.useState(1);
    const [pageChanged, setPageChanged] = React.useState(false);
    const { Column, HeaderCell, Cell } = Table;
    const history = createBrowserHistory();
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
                    <Col className="" xs={20}>
                        <div className={'pageHeader'}>Patients Details</div>
                        <Table onRowClick={() => {
                            window.location.replace('/patientDetails');
                        }} height={720} data={data}>
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
