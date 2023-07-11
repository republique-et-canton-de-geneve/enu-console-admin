import * as React from 'react';
import {AppBar, Toolbar, Typography, Button} from "@mui/material";
import LogoGE from '../icons/logo_ge_big.svg';

export default function Header () {

    function clickDisconnect() {
        console.warn("Implémenter déco appli interne")
    }

    return (
        <>
            <AppBar position="sticky" sx={{padding: 1}}>
                <Toolbar variant="dense">
                    <LogoGE style={{height: "45px"}}/>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>Console d'exploitation de MonEDM</Typography>
                    <Button color="inherit" onClick={clickDisconnect}>Déconnexion</Button>
                </Toolbar>
            </AppBar>
        </>
    );
}