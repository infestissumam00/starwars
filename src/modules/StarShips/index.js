import { connect } from 'react-redux';
import React, {Component} from 'react';
import MaterialTable from "material-table";
import { fetchStarShips } from './starShipsAction';
import Header from "../../library/common/components/Header";
import {starShipsTable} from "./dataModel";
import {tableIcons} from "../../library/common/constants/TableIconsConstants";


export class StarShips extends Component {
    state = {
    };

    componentDidMount() {
        document.title = 'StarShips List';
        const { fetchStarShips } = this.props;
        fetchStarShips();
    }

    render() {
        const { starShips } = this.props;

        return (
            <div>
                <Header history={this.props.history}/>
                <div className='col-12 justify-content-center align-items-center'>
                    <div style={{maxWidth: '100%'}}>
                    <MaterialTable
                        icons={tableIcons}
                        columns={starShipsTable}
                        data={starShips}
                        title="Star Ships"
                    />
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ starShips }) => {
    return {
        starShips: starShips.starShips,
    };
};


export default connect(mapStateToProps, { fetchStarShips })(StarShips);
