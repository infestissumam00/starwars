import { connect } from 'react-redux';
import React, {Component} from 'react';
import MaterialTable from "material-table";
import { fetchPeople } from './peopleAction';
import Header from "../../library/common/components/Header";
import {peopleTable} from "./dataModel";
import {tableIcons} from "../../library/common/constants/TableIconsConstants";


export class People extends Component {
    state = {
    };

    componentDidMount() {
        document.title = 'People List';
        const { fetchPeople } = this.props;
        fetchPeople();
    }

    render() {
        const { people } = this.props;

        return (
            <div>
                <Header history={this.props.history}/>
                <div className='col-12 justify-content-center align-items-center'>
                    <div style={{maxWidth: '100%'}}>
                    <MaterialTable
                        icons={tableIcons}
                        columns={peopleTable}
                        data={people}
                        title="People"
                    />
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ people }) => {
    return {
        people: people.people,
    };
};


export default connect(mapStateToProps, { fetchPeople })(People);
