import * as React from 'react';
import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
import { Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import {API_PATH} from "../config";

export default function SystemsStatus() {
    const [systemsCheck, setSystemsCheck] = useState([]);

    const refreshSystemsCheck = () => fetch(API_PATH + "/systems/check")
        .then(response => response.json())
        .then(systems => setSystemsCheck(systems));

    useEffect(()=>{
        refreshSystemsCheck().then(() => setTimeout(refreshSystemsCheck, 5000));
    },[]);

    return (
        <Paper sx={{width: "auto", margin: 1}}>
            <Typography variant="h5" sx={{marginLeft: 1}}>État des composants</Typography>
            <List dense={true}>
                {
                    Object.keys(systemsCheck).map((system, index) => (
                        <ListItem key={index} sx={{"&:nth-of-type(odd)": {backgroundColor: "#eee"}}}>
                            <ListItemIcon>
                                {systemsCheck[system] ? <CheckCircleIcon sx={{color: "green"}}/> : <CloseIcon sx={{color: "red"}}/>}
                            </ListItemIcon>
                            <ListItemText
                                primary={system}
                            />
                        </ListItem>
                    ))
                }
            </List>
        </Paper>
    )
};