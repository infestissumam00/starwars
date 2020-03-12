import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'library/common/components';

import { homePageImage } from './constants';
import './homeStyles.scss';

export class HomePage extends Component {
    state = {
        isLoading: false,
    };

    componentDidMount() {
        document.title = 'Home';
    }

    handleNav = () => {
        this.props.history.push('/movies')
    };


    render() {
        const { isLoading } = this.state;

        return (
            <div className="vh-100 login bg-white d-flex justify-content-center align-items-center">
                <div className="col-12 home-background vh-100 p-0" style={{backgroundImage: `url(${homePageImage})`, backgroundSize: 'contain'}}>
                    <div className="col-sm-5 button-container">
                        <Button
                            type="submit"
                            loading={isLoading}
                            onClick={this.handleNav}
                            styleClass="btn-success btn-block btn-style"
                            value="Get Started"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, null )(HomePage));
