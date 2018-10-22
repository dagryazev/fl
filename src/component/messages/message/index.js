import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';



class Message extends Component{

    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className="Message">
                    <List component="div" disablePadding>
                        <Typography variant="h5" gutterBottom>
                            { this.props.task }
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            { this.props.message }
                        </Typography>
                    </List>
            </div>
        )
    }
}

export default Message
