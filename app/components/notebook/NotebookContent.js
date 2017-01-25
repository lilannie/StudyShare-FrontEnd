import React from 'react';
import NotebookItem from './NotebookItem';

export default class NotebookContent extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        subjects: [
            {
                id: 0,
                title: "Book 1",
                summary: "orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum dui non feugiat sollicitudin. Integer nec porttitor augue, volutpat rhoncus nisl. Suspendisse interdum metus a ornare pretium. Curabitur euismod mattis dui, non ornare nisi imperdiet ac. Morbi sed rutrum arcu. Phasellus nec sollicitudin nulla, quis pretium neque. Nulla hendrerit commodo finibus. Praesent eget metus maximus, auctor sem ac, euismod eros. Aenean vel leo volutpat, euismod elit sodales, volutpat nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin elit orci, venenatis sed justo sed, blandit condimentum odio.",
            },
            {
                id: 1,
                title: "Book 2",
                summary: "orem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum dui non feugiat sollicitudin. Integer nec porttitor augue, volutpat rhoncus nisl. Suspendisse interdum metus a ornare pretium. Curabitur euismod mattis dui, non ornare nisi imperdiet ac. Morbi sed rutrum arcu. Phasellus nec sollicitudin nulla, quis pretium neque. Nulla hendrerit commodo finibus. Praesent eget metus maximus, auctor sem ac, euismod eros. Aenean vel leo volutpat, euismod elit sodales, volutpat nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin elit orci, venenatis sed justo sed, blandit condimentum odio.",
            }
        ]
    };

    constructor(props) {
        super(props);

        this.getItems = this.getItems.bind(this);
    }

    getItems() {
        return this.state.subjects.map(function (subject) {
            return <NotebookItem key={"subject-"+subject.id}
                                title={subject.title}
                                description={subject.summary} />;
        });
    }

    render() {
        return (
            <div>
                {this.getItems()}
            </div>
        );
    }

    componentWillMount() {}

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

}