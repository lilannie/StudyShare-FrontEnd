import React from 'react';

import GroupDashboardItem from './GroupDashboardItem';
import '../../../scss/group-dashboard.scss';

export default class GroupDashboard extends React.Component {
    static defaultProps = {
        content: [
            {
                id: 0,
                title: "Subjects",
                type: 0
            },
            {
                id: 1,
                title: "Notebooks",
                type: 1
            },
            {
                id: 2,
                title: "Notecards",
                type: 2
            },
            {
                id: 3,
                title: "Discussion",
                type: 3
            },
            {
                id: 4,
                title: "Members",
                type: 4
            },
            {
                id: 5,
                title: "Settings",
                type: 5
            }
        ]

    };
    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);

        this.getContent = this.getContent.bind(this);
    }

    getContent() {
        return this.props.content.map(function (content) {
            return <GroupDashboardItem
                key={'item-'+content.id}
                itemId={content.id}
                title={content.title} type={content.type}/>
        });
    }

    render() {
        return (
            <div className="group-dashboard">
                <div className="dashboard-content">
                    <div className="container-fluid">
                        <div className="content-container">
                            <ul className="content-list">
                                {this.getContent()}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}