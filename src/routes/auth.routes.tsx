import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Welcome} from '../pages/Welcome';
import { Graficos } from '../pages/Graficos';

export default function AuthRoutes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component = {Welcome}/>
                <Route path="/" component = {Graficos}/>
            </Switch>
        </BrowserRouter>

    );
}


