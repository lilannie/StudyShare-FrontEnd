import React from 'react';

import SubjectItemHeader from './SubjectItemHeader';
import SubjectItemContent from './SubjectItemContent';
import SubjectItemActions from './SubjectItemActions';

export default class SubjectItem extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="card-content">
                        <SubjectItemHeader title={this.props.title}/>
                        <div className="card-body">
                            <SubjectItemContent description={this.props.description}/>
                        </div>
                        <SubjectItemActions/>
                    </div>
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