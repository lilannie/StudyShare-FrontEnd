import React from 'react';
import SubjectItem from './SubjectItem';

export default class SubjectAll extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        foo: 'bar'
    };

    constructor(props) {
        super(props);

        this.getItems = this.getItems.bind(this);
    }

    getItems() {
        return this.props.subjects.map(function (subject) {
            return <SubjectItem key={"subject-"+subject.id}
                                title={subject.title}
                                description={subject.description}
                                content={subject.content} />;
        });
    }

    render() {

        return (
            <div>
                {this.getItems()}
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