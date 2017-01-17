import React from 'react';

import SubjectItemHeader from './SubjectItemHeader';
import SubjectItemContent from './SubjectItemContent';
import SubjectItemActions from './SubjectItemActions';
import SubjectEdit from './SubjectEdit';
import SubjectDelete from './SubjectDelete';

export default class SubjectItem extends React.Component {
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
        this.handleEdit = this.handleEdit.bind(this);
    }

    changeView(viewId) {
        this.setState({view: viewId});
    }

    handleEdit(title, description) {
        console.log("SubjectItem -- Handle Edit");
        console.log("Id: "+this.props.id);
        console.log("Title: "+title);
        console.log("Description: "+description);
        console.log("Content: "+JSON.stringify(this.props.content));


        this.props.handleEdit(
            {
                id: this.props.id,
                title: title,
                description: description,
                content: this.props.content,
            }
        );
    }

    getView() {
        switch (this.state.view) {
            case 0: {
                return <SubjectItemContent
                    description={this.props.description}
                    content={this.props.content}/>;
            }
            case 1: {
                return <SubjectEdit
                    title={this.props.title}
                    description={this.props.description}
                    handleEdit={this.handleEdit}/>;
            }
            case 2: {
                return <SubjectDelete />;
            }
        }
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="card-content">
                        <SubjectItemHeader title={this.props.title}/>
                        <div className="card-body">
                            {this.getView()}
                        </div>
                        <SubjectItemActions changeView={this.changeView}/>
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