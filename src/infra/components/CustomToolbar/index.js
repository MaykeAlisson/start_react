import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';
import isEmpty from 'Util/isEmpty';

const Componente = ({
    children,
    onClickMenu
}) => {

    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => {}}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Projeto
                    </Typography>
                </Toolbar>
            </AppBar>
         </>
    )
};

Componente.propType = {
    onClickMenu: PropTypes.func
};

Componente.defaultProps = {
    onClickMenu: () => {}
};

export default Componente
