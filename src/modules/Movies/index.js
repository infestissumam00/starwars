import { connect } from 'react-redux';
import React, {Component, forwardRef} from 'react';
import MaterialTable from "material-table";
import { fetchFilms } from './moviesAction';
import Header from "../../library/common/components/Header";
import {moviesTable} from "./dataModel";
import {tableIcons} from "../../library/common/constants/TableIconsConstants";


export class Movies extends Component {
    state = {
    };

    componentDidMount() {
        document.title = 'Movies List';
        const { fetchFilms } = this.props;
        fetchFilms();
    }

    render() {
        const { movies } = this.props;

        return (
            <div>
                <Header history={this.props.history}/>
                <div className='col-12 justify-content-center align-items-center'>
                    <div style={{maxWidth: '100%'}}>
                    <MaterialTable
                        icons={tableIcons}
                        columns={moviesTable}
                        data={movies}
                        title="Movies"
                    />
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ movies }) => {
    return {
        movies: movies.movies,
    };
};


export default connect(mapStateToProps, { fetchFilms })(Movies);
