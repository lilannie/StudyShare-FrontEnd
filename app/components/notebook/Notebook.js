import React from 'react';
import ContentHeader from 'ContentHeader';
import NoteBookItem from './NoteBookItem';
import NotebookToolbar from './NotebookToolbar';

import {Row, Col} from 'react-bootstrap';
import '../../scss/notebook.scss';

export default class Notebook extends React.Component {
    static defaultProps = {
        notebooks: [
            {
                id: 0,
                title: 'Civil War',
                description: 'List of all major events and dates.'
            },
            {
                id: 1,
                title: 'Linear Functions',
                description: (<div className="body-list">
                    <ul>
                        <li>Definition of Linear Functions</li>
                        <li>Identifying Linear Functions</li>
                        <li>Working with Linear Functions</li>
                    </ul>
                </div>)
            },
            {
                id: 2,
                title: 'Chemical Compounds',
                description: (<div className="body-list">
                    <ul>
                        <li>Ionic Bonds</li>
                        <li>Hydrogen Bonds</li>
                        <li>Covalent Bonds</li>
                    </ul>
                </div>)
            },
            {
                id: 3,
                title: 'Photosynthesis',
                description: "Detailed analysis of the process and mechanisms in photosynthesis."
            },
            {
                id: 4,
                title: 'Create your own website',
                description: (<div className="body-list">
                    <ul>
                        <li>For Beginners</li>
                        <li>HTML CSS JavaScript</li>
                        <li>In-note animations and multimedia</li>
                    </ul>
                </div>)
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
        let col0 = [], col1 = [], col2 = [], col3 = [], col4 = [];
        let count = 0;
        this.props.notebooks.map(function (notebook) {
            let item = (<NoteBookItem key={'notebook-' + notebook.id}
                                      title={notebook.title}
                                      description={notebook.description}/>);
            switch (count) {
                case 0: {
                    col0.push(item);
                    break;
                }
                case 1: {
                    col1.push(item);
                    break;
                }
                case 2: {
                    col2.push(item);
                    break;
                }
                case 3: {
                    col3.push(item);
                    break;
                }
                case 4: {
                    col4.push(item);
                    break;
                }
            }
            if (count == 4) {
                count = 0;
            }else {
                count++;
            }
        });
        return (
            <div className="notebook-body row">
                <div className="col-md-2">
                    {col0}
                </div>
                <div className="col-md-2">
                    {col1}
                </div>
                <div className="col-md-2">
                    {col2}
                </div>
                <div className="col-md-2">
                    {col3}
                </div>
                <div className="col-md-2">
                    {col4}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="notebook-body-container">
                <NotebookToolbar />
                <ContentHeader title="Notebooks"
                               md={2}
                               mdPull={0}
                               headerStyle={this.props.headerStyle}/>

                {this.getContent()}

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