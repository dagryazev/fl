import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import './index.css';


class Configuration extends Component{

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props){
        super( props );
        const { cookies } = props;
        this.state = {
            timeInterval: cookies.get('timeInterval') || '30',
            notification: cookies.get('notification') === 'true'
        };
    }

    state = {
        timeInterval: 30
    };

    handleChange__timeInterval = (event, value) => {
        const { cookies } = this.props;
        cookies.set('timeInterval', value, { path: '/' });
        this.setState({ timeInterval: value });
    };

    handleChange__notification = (event) => {
        const { cookies } = this.props;
        cookies.set('notification', event.target.checked, { path: '/' });
        this.setState({ notification: event.target.checked });
    };



    render() {
        return (
            <div className="Configuration">
                <Paper square={ true }>
                    <Typography>
                        Время обновления: { this.state.timeInterval } с.
                    </Typography>
                        <Slider
                            className = "configuration__slider"
                            id = "label"
                            value = { this.state.timeInterval }
                            step = {5}
                            onChange = {this.handleChange__timeInterval}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked = { this.state.notification }
                                    onChange = { this.handleChange__notification }
                                />
                            }
                            label="Оповещение по email"
                        />

                </Paper>
            </div>
        );
    }
}


export default withCookies( Configuration )