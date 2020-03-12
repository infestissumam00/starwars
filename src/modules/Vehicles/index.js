import { connect } from 'react-redux';
import React, {Component} from 'react';
import MaterialTable from "material-table";
import { fetchVehicles } from './vehiclesAction';
import Header from "../../library/common/components/Header";
import {vehiclesTable} from "./dataModel";
import {tableIcons} from "../../library/common/constants/TableIconsConstants";


export class Vehicles extends Component {
    state = {
    };

    componentDidMount() {
        document.title = 'StarShips List';
        const { fetchVehicles } = this.props;
        fetchVehicles();
    }

    render() {
        const { vehicles } = this.props;

        return (
            <div>
                <Header history={this.props.history}/>
                <div className='col-12 justify-content-center align-items-center'>
                    <div style={{maxWidth: '100%'}}>
                    <MaterialTable
                        icons={tableIcons}
                        columns={vehiclesTable}
                        data={vehicles}
                        title="Star Ships"
                    />
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ vehicles }) => {
    return {
        vehicles: vehicles.vehicles,
    };
};


export default connect(mapStateToProps, { fetchVehicles })(Vehicles);
