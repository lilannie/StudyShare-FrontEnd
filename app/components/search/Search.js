import React from 'react';

import ContentHeader from '../common/content/ContentHeader';

import '../../scss/search.scss';

export default class Search extends React.Component {
    static defaultProps = {
        input: ''
    };
    state = {
        input: ''
    };
    constructor(props){
        super(props);

        this.state.input = this.props.input;

        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(event) {
        this.setState({input: event.target.value});
    }

    componentDidMount() {
        setupSearch();
    }
    render() {
        return (
            <div className="search-page">
                <div className="search-toolbar">
                    <div id="nav_wrap">
                        <nav role='navigation'>
                            <a href="">
                                <i className="fa fa-book"></i>
                                 Subjects</a>
                            <a href="">
                                <i className="fa fa-users"></i>
                                 Users</a>
                            <a href="">
                                <i className="fa fa-sitemap"></i>
                                 Groups</a>
                            <a href="" style={{color: 'white'}}>Other</a>
                        </nav>
                    </div>

                    <section id="homesec" className="">
                        <ContentHeader title="Search"/>

                        <div id="mainlogo">
                            <div className="field" id="searchform">
                                <input type="text" id="searchterm"
                                       placeholder="What are you searching for?"
                                    value={this.state.input}
                                onChange={this.updateInput}/>
                                <button type="button" id="search">Find!</button>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        );
    }
}