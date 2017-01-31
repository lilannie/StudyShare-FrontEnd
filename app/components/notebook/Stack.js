import React from 'react';
import StackCard from './StackCard';

import '../../scss/notebook.scss';

export default class Stack extends React.Component {
    static defaultProps = {
        headerStyle: {
            paddingRight: 20
        }
    };

    state = {
        foo: 'bar'
    };

    render() {
        return (
            <div className="notebook-stack">
                <div id="stack1" className="card-container start">
                    <StackCard id={1}/>

                </div>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

}