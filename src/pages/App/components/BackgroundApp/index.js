import React from 'react';
import Paper from '@material-ui/core/Paper';

import useStyles from './styles';

import logo from '../../../../../public/images/logo.jpeg'

export default  ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.fullPage}>
            <div className={classes.container}>
                <Paper className={classes.paper}>
                    <div className={classes.fotoLogo}>
                        <a href='#'>
                            <img style={{margin: 16}}
                                 src= {logo}
                                 alt='logo arcom'
                            />
                        </a>
                    </div>
                    {children}
                </Paper>
            </div>
        </div>
    );
};
