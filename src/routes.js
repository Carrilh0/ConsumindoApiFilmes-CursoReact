import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/';
import Erro from './pages/Erro';
import Filme from './pages/Filme';
import { autenticado } from './auth';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        autenticado() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
    )} />
);

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <PrivateRoute exact path="/filme/:id" component={Filme}/>
                <Route path="*" component={Erro}/>
            </Switch>
            
        </BrowserRouter>
    );
}

export default Routes;