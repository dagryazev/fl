import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import Task from './task/';
class Tasks extends Component{
    constructor(props) {
        super(props);

    }

    state = {
        tasks: [
            {
                id: 10,
                title: 'Разработать ПО под STM32 в сочетании с SPBTLE-RF',
                price: '500 руб. за час'
            },
            {
                id: 15,
                title: 'Разработка модуля подсчета людей в Матлаб',
                price: 'Договорная'
            }
        ],
        completed: 0
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 100);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        if (completed === 100) {
            this.setState({ completed: 0 });
        } else {
            this.setState({ completed: completed + 100/1000 });
        }
    };

    render(){
        return (
            <div>
                <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />
                {this.state.tasks.map(item =>
                    <Task
                        id={item.id}
                        title={item.title}
                        price={item.price}
                    />
                )}
            </div>
        );
    }
}

export default Tasks;