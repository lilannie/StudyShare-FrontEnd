import React from 'react';

import GroupDashboardItem from './GroupDashboardItem';
import '../../../scss/group-dashboard.scss';

export default class GroupDashboard extends React.Component {
    static defaultProps = {
        content: [
            {
                id: 3,
                title: "Discussion",
                glyph: "fa fa-comments-o",
                style: {
                  color: "white"
                },
                type: 3
            },
            {
                id: 4,
                title: "Members",
                glyph: "fa fa-users",
                style: {
                    color: "white"
                },
                type: 4
            },
            {
                id: 0,
                title: "Subjects",
                glyph: "fa fa-mortar-board",
                style: {
                    color: "white"
                },
                type: 0
            },
            {
                id: 1,
                title: "Notebooks",
                glyph: "fa fa-book",
                style: {
                    color: "white"
                },
                type: 1
            },
            {
                id: 2,
                title: "Notecards",
                glyph: "fa fa-stack-exchange",
                style: {
                    color: "white"
                },
                type: 2
            },
            {
                id: 5,
                title: "Settings",
                glyph: "fa fa-cogs",
                style: {
                    color: "white"
                },
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
                title={content.title} type={content.type}
                glyph={content.glyph}
                style={content.style}/>
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