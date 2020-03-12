import { connect } from 'react-redux';
import React, {Component} from 'react';
import MaterialTable from "material-table";
import { fetchSpecies } from './speciesAction';
import Header from "../../library/common/components/Header";
import {speciesTable} from "./dataModel";
import {tableIcons} from "../../library/common/constants/TableIconsConstants";


export class Species extends Component {
    state = {
    };

    componentDidMount() {
        document.title = 'Species List';
        const { fetchSpecies } = this.props;
        fetchSpecies();
    }

    render() {
        const { species } = this.props;

        return (
            <div>
                <Header history={this.props.history}/>
                <div className='col-12 justify-content-center align-items-center'>
                    <div style={{maxWidth: '100%'}}>
                    <MaterialTable
                        icons={tableIcons}
                        columns={speciesTable}
                        data={species}
                        title="Species"
                    />
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ species }) => {
    return {
        species: species.species,
    };
};


export default connect(mapStateToProps, { fetchSpecies })(Species);
