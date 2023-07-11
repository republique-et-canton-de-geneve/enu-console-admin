import * as React from 'react';
import {Typography} from "@mui/material";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

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
        <>
            <Typography>Contenu de l'appli</Typography>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </>
    )
}