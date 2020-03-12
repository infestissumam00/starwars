import { connect } from 'react-redux';
import React from 'react';
import { Redirect, Route, withRouter, Switch} from 'react-router-dom';
import Home from 'modules/HomePage';
import Movies from 'modules/Movies';
import Planets from "modules/Planets";
import People from "modules/People";
import StarShips from "modules/StarShips"
import Vehicles from "modules/Vehicles"
import Species from "modules/Species"

const Routes = props => {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return <Redirect to="/home" />;
                    }}
                />
                <Route exact path="/home" component={Home} />
                <Route exact path="/movies" component={Movies} />
                <Route exact path="/planets" component={Planets} />
                <Route exact path="/people" component={People} />
                <Route exact path="/species" component={Species} />
                <Route exact path="/starships" component={StarShips} />
                <Route exact path="/vehicles" component={Vehicles} />
            </Switch>
        </div>
    );
};



export default withRouter(connect()(Routes));
