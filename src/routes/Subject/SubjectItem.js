import React from 'react';
import classNames from 'classnames';
import {withRouter} from 'react-router';

import {
    Badge,
} from '@sketchpixy/rubix';

@withRouter
export default class SubjectItem extends React.Component {
    handleClick(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.router.push('/ltr/mailbox/mail');
    }

    render() {
        var classes = classNames({
            'inbox-item': true,
            'unread': this.props.unread
        });

        var linkProps = {
            href: '/ltr/mailbox/mail',
            onClick: ::this.handleClick,
            className: classes,
        };

        return (
            <a {...linkProps}>
                <div className='inbox-avatar'>
                    <div className='inbox-date hidden-sm hidden-xs fg-darkgray40 text-right'>
                        <div style={{position: 'relative'}}>{this.props.date}</div>
                    </div>
                    <div className='inbox-avatar-name'>
                        <div className='fg-darkgrayishblue75'>{this.props.name}</div>
                        <div>
                            <small>
                                <Badge className={this.props.labelClass} style={{
                                    marginRight: 5,
                                    display: this.props.labelValue ? 'inline' : 'none'
                                }}>{this.props.labelValue}</Badge>
                                <span>{this.props.description}</span>
                            </small>
                        </div>
                    </div>

                </div>
            </a>
        );
    }
}