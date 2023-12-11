import * as React from 'react';
import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
import { Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import {API_PATH} from "../config";

export default function SystemsStatus({...props}) {
    const [systemsCheck, setSystemsCheck] = useState([]);
    const [rabbitConf, setRabbitConf] = useState({});

    const refreshSystemsCheck = () => fetch(API_PATH + "/systems/check")
        .then(response => response.json())
        .then(systems => setSystemsCheck(systems));

    const getRabbitConf = () => fetch(API_PATH + "/rabbit/topology")
        .then(response => response.json())
        .then(conf => setRabbitConf(conf));

    useEffect(()=>{
        refreshSystemsCheck().then(() => setTimeout(refreshSystemsCheck, 5000));
        getRabbitConf().then(() => { console.log("Rabbit conf OK");})
    },[]);

    return (
        <Paper {...props}>
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