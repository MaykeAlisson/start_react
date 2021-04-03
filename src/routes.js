import React from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';

import FazerPedido from './pages/FazerPedido';
import Registros from './pages/Registros';
import Carteira from './pages/Carteira';
import MeusMotoristas from './pages/MeusMotoristas';

export default () => (

        <Switch>
            <Route path='/' exact component={FazerPedido} />
            <Route path='/registros' exact component={Registros} />
            <Route path='/carteira' exact component={Carteira} />
            <Route path='/meus-motoristas' exact component={MeusMotoristas} />
            {/*<Route path='/minha-conta' exact component={MinhaConta} />*/}
        </Switch>


)
