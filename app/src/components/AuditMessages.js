import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import {API_PATH} from "../config";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function AuditMessages() {
    const [auditMessages, setAuditMessages] = useState([]);

    useEffect(()=>{
        fetch(API_PATH + "/audit/messages")
            .then(response => response.json())
            .then(messages => setAuditMessages(messages));
    }, []);

    return (
        <Paper sx={{padding: 1}}>
            <Typography variant="h5">Analyse des messages</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="messages">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell>Prestation</StyledTableCell>
                            <StyledTableCell>Type</StyledTableCell>
                            <StyledTableCell>date</StyledTableCell>
                            <StyledTableCell>idDemarcheSiMetier</StyledTableCell>
                            <StyledTableCell>correlationId</StyledTableCell>
                            <StyledTableCell>user</StyledTableCell>
                            <StyledTableCell>sequence</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {auditMessages.map((message, index) => (
                            <StyledTableRow key={index}>
                                <TableCell>{message.isHandled ? <CheckCircleIcon sx={{color: "green"}}/> : <CloseIcon sx={{color: "red"}}/>}</TableCell>
                                <TableCell>{message["_id"].idPrestation}</TableCell>
                                <TableCell>{message.type}</TableCell>
                                <TableCell>{new Date(message.date["$date"]).toLocaleString()}</TableCell>
                                <TableCell>{message.idDemarcheSiMetier}</TableCell>
                                <TableCell>{message["_id"].correlationId}</TableCell>
                                <TableCell>{message.identifiant}</TableCell>
                                <TableCell>{message.headers.sequence ? message.headers.sequence + " / " + message.headers.total : ""}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
