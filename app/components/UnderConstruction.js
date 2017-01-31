import React from 'react';
import ContentHeader from 'ContentHeader';

import {Row, Col} from 'react-bootstrap';
import '../scss/underconstruction.scss';

export default class UnderConstruction extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="under-construction">
                <div className="title ">
                    <h1>
                        New Feature <b>Coming Soon!</b>
                    </h1>
                </div>
            </div>
        );
    }
}