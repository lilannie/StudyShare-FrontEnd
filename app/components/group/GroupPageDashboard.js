import React from 'react';

import '../../scss/group-dashboard.scss';

export default class GroupPageBody extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };
    state = {
        foo: 'bar'
    };
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <div className="group-dashboard">
                <div className="container-fluid">
                    <div className="quick-actions_homepage">
                        <ul className="quick-actions">
                            <li className="bg_lb"> 
                                <a href="index.html"> 
                                <i className="icon-dashboard"></i> 
                                <span className="label label-important">20</span> 
                                    My Dashboard 
                                </a> 
                            </li>
                            <li className="bg_lg span3"> 
                                <a href="charts.html"> 
                                    <i className="icon-signal"></i> 
                                    Charts
                                    </a> 
                            </li>
                            <li className="bg_ly"> 
                                <a href="widgets.html"> 
                                    <i className="icon-inbox"></i>
                                    <span className="label label-success">101</span> 
                                    Widgets 
                                </a> 
                            </li>
                            <li className="bg_lo"> <a href="tables.html"> <i className="icon-th"></i> Tables</a> </li>
                            <li className="bg_ls"> <a href="grid.html"> <i className="icon-fullscreen"></i> Full width</a> </li>
                            <li className="bg_lo span3"> <a href="form-common.html"> <i className="icon-th-list"></i> Forms</a> </li>
                            <li className="bg_ls"> <a href="buttons.html"> <i className="icon-tint"></i> Buttons</a> </li>
                            <li className="bg_lb"> <a href="interface.html"> <i className="icon-pencil"></i>Elements</a> </li>
                            <li className="bg_lg"> <a href="calendar.html"> <i className="icon-calendar"></i> Calendar</a> </li>
                            <li className="bg_lr"> <a href="error404.html"> <i className="icon-info-sign"></i> Error</a> </li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}