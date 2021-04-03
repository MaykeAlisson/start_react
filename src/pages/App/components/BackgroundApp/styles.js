import {makeStyles} from '@material-ui/core/styles';

import background from '../../../../../public/images/yoda.jpg'

export default makeStyles((theme) => ({
    fullPage: {
        width: '100%',
        height: '100vh',
        position: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(${background})`,

    },
    container: {
        width: '100%',
        height: '100vh',
        position: 'relative',
        background: '#00000050',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    paper: {
        width: '280px',
        padding: '30px'
    },
    fotoLogo: {
        textAlign: 'center',
        marginBottom: '24px'
    }
}));
