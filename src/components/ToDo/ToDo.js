import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

// Class Component - To Do
class ToDo extends React.Component {

    render = () => {
        
        const calendarStrings = {
            lastDay : '[Yesterday at] LT',
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            lastWeek : '[Last] dddd [at] LT',
            nextWeek : 'dddd [at] LT',
            sameElse : 'DD-MMM-YYYY - HH:MM'
        };
        const datetime = this.props.todo.date + 'T' + this.props.todo.time;

        return (<>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{this.props.todo.task}</div>
                    <Moment calendar={calendarStrings}>
                        {datetime} 
                    </Moment> ( <Moment fromNow>{this.props.todo.date}</Moment> )
                </div>
                <span className="badge bg-primary rounded-pill">{this.props.todo.time}</span>
            </li>
        </>);
    }
}

export default ToDo;