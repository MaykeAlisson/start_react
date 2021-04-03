import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Button, makeStyles, Paper, Tab, Tabs} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        display: "flex",
    },
});
const Componente = (props) => {

    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        history.push('/');
    }, [])

    const handleChange = (event, newValue) => {
        switch (newValue) {
            case 0 : history.push('/');
            break;
            case 1 : history.push('/registros');
            break;
            case 2 : history.push('/carteira');
            break;
            case 3 : history.push('/meus-motoristas');
            break;
            default:
                console.log(`Sorry, we are out of ${newValue}.`);
        }
        setValue(newValue);
        console.log(newValue)
    };

    return (
        <div>
            <Paper className={classes.root}>
                <span>Logo</span>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Fazer pedido"/>
                    <Tab label="Registros"/>
                    <Tab label="Carteira"/>
                    <Tab label="Meus motoristas"/>
                </Tabs>
                <Button>Usuario | R$ 0</Button>
            </Paper>
        </div>
    );

}

Componente.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
export default Componente;
