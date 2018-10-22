import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography/Typography";

class Task extends Component{
    constructor(props) {
        super(props);
        this.arrayTask = {
            title: this.props.title,
            price: this.props.price
        };
    }



    render(){
        return (
            <div>
                <Paper>
                    <Typography variant="h5" gutterBottom>
                        { this.arrayTask.title }
                    </Typography>
                    <Typography variant="caption">
                        { this.arrayTask.price }
                    </Typography>
                </Paper>
            </div>
        );
    }
}

export default Task;