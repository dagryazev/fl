import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import MessageIcon from '@material-ui/icons/Message';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Message from "./message/";

class Messages extends Component{
    constructor( props ){
        super(props)
    }
    state = {
        OpenMessages: false,
        items: [
            {
                id: 1,
                task: 'My first task',
                message: 'Hello Denis.'
            },
            {
                id: 2,
                task: 'My second task',
                message: 'Hello Piter.'
            },
            {
                id: 3,
                task: 'My last task',
                message: 'Fuck You Denis.'
            },
        ]
    }

    handleClick_changeOpenMessages = () => {
        this.setState( { OpenMessages: !this.state.OpenMessages })
    }
    render(){
        return (
            <div className="Message">
                <Paper>
                    <ListItem button onClick={this.handleClick_changeOpenMessages}>
                        <ListItemIcon>
                            <MessageIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Новые сообщения" />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.OpenMessages} timeout="auto" unmountOnExit>
                        {this.state.items.map(item => <Message key={item.id} task={item.task} message={item.message} />)}
                    </Collapse>
                </Paper>
            </div>
        )
    }
}

export default Messages
