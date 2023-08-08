import * as React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {useEffect, useState} from "react";
import SystemsStatus from "./SystemsStatus";
import {Box, Typography} from "@mui/material";
import AuditMessages from "./AuditMessages";

const options = {
    title: {
        text: 'My chart'
    },
    series: [{
        data: [1, 2, 3]
    }]
}

export default function Home() {
    return (
        <Typography variant="h2">Administration système MonEDM</Typography>
    )
}