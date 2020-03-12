import { connect } from 'react-redux';
import React, {Component} from 'react';
import MaterialTable from "material-table";
import Header from "../../library/common/components/Header";
import {planetsTable} from "./dataModel";
import {tableIcons} from "../../library/common/constants/TableIconsConstants";
import {fetchPlanets} from "./planetsAction";


export class Planets extends Component {

    state = {
    };

    componentDidMount() {
        console.log(this.props);
        document.title = 'Planets List';
        const {fetchPlanets} = this.props;
        fetchPlanets();
    }

    render() {
        const { planets } = this.props;

        return (
            <div>
                <Header history={this.props.history}/>
                <div className='col-12 justify-content-center align-items-center'>
                    <div style={{maxWidth: '100%'}}>
                        <MaterialTable
                            icons={tableIcons}
                            columns={planetsTable}
                            data={planets}
                            title="Planets"
                        />
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ planets }) => {
    return {
        planets: planets.planets
    };
};

const mapDispatchToProps = () => {
    return {
        fetchPlanets: () => {fetchPlanets()}
    };
};


export default connect(mapStateToProps, {fetchPlanets})(Planets);
