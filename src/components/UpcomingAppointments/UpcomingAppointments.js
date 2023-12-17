import React from "react";
import { Table, Tag, IconButton } from 'rsuite';
import CollaspedOutlineIcon from '@rsuite/icons/CollaspedOutline';
import ExpandOutlineIcon from '@rsuite/icons/ExpandOutline';
import { pData } from './mock';

const { Column, HeaderCell, Cell } = Table;
const data = pData;
const rowKey = 'id';

const ExpandCell = ({ rowData, dataKey, expandedRowKeys, onChange, ...props }) => (
    <Cell {...props} style={{ padding: 5 }}>
        <IconButton
            appearance="subtle"
            onClick={() => {
                onChange(rowData);
            }}
            icon={
                expandedRowKeys.some(key => key === rowData[rowKey]) ? (
                    <CollaspedOutlineIcon />
                ) : (
                    <ExpandOutlineIcon />
                )
            }
        />
    </Cell>
);

const renderRowExpanded = rowData => {
    return (
        <div style={{width:'100px'}}>
            <div
                style={{
                    width: 60,
                    height: 60,
                    float: 'left',
                    marginRight: 10,
                    background: '#eee'
                }}
            >
                <img src={rowData.avatar} style={{ width: 60 }} />
            </div>
            <p>Email: {rowData.email}</p>
            <p>Phone: {rowData.phone}</p>
        </div>
    );
};

const UpcomingAppointments = () => {
    const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);

    const handleExpanded = (rowData, dataKey) => {
        let open = false;
        const nextExpandedRowKeys = [];

        expandedRowKeys.forEach(key => {
            if (key === rowData[rowKey]) {
                open = true;
            } else {
                nextExpandedRowKeys.push(key);
            }
        });

        if (!open) {
            nextExpandedRowKeys.push(rowData[rowKey]);
        }

        setExpandedRowKeys(nextExpandedRowKeys);
    };

    return (
        <Table
            shouldUpdateScroll={false} // Prevent the scrollbar from scrolling to the top after the table content area height changes.
            height={300}
            data={data}
            rowKey={rowKey}
            expandedRowKeys={expandedRowKeys}
            onRowClick={data => {
                console.log(data);
            }}
            renderRowExpanded={renderRowExpanded}
        >
            <Column align="center">
                <HeaderCell>#</HeaderCell>
                <ExpandCell dataKey="id" expandedRowKeys={expandedRowKeys} onChange={handleExpanded} />
            </Column>

            <Column width={200}>
                <HeaderCell>Name</HeaderCell>
                <Cell dataKey="name" />
            </Column>

            <Column width={130}>
                <HeaderCell>Age</HeaderCell>
                <Cell dataKey="age" />
            </Column>

            <Column width={120}>
                <HeaderCell>Type</HeaderCell>
                <Cell dataKey="type" />
            </Column>

        </Table>
    );
};

export default UpcomingAppointments;