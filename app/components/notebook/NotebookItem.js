import React from 'react';

import NotebookItemHeader from './NotebookItemHeader';
import NotebookItemContent from './NotebookItemContent';
import NotebookItemActions from './NotebookItemActions';
import NotebookEdit from './NotebookEdit';
import NotebookDelete from './NotebookDelete';

export default class NotebookItem extends React.Component {
    static defaultProps = {
        foo: 'bar'
    };

    state = {
        view: 0
    };

    constructor(props) {
        super(props);

        this.changeView = this.changeView.bind(this);
        this.getView = this.getView.bind(this);
    }

    changeView(viewId) {
        this.setState({view: viewId});
    }

    getView() {
        switch (this.state.view) {
            case 0: {
                return <NotebookItemContent
                    description={this.props.description}
                    content={this.props.content}/>;
            }
            case 1: {
                return <NotebookEdit
                    title={this.props.title}
                    description={this.props.description}/>;
            }
            case 2: {
                return <NotebookDelete />;
            }
        }
    }


    render() {
        return (
                <div className="card">
                    <div className="card-content">
                        <NotebookItemHeader title={this.props.title}/>
                        <div className="card-body">
                            {this.getView()}
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