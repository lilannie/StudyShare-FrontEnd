import React from 'react';

import '../../../scss/accordion.scss';


class HeaderThree extends React.Component {
    static defaultProps = {
        headerId: 0,
        title: "",
        content: "",
        h4: [
            {
                headerId: 0,
                title: "",
                content: ""
            }
        ]
    };
    state = {
        foo: "bar"
    };

    constructor(props) {
        super(props);

        this.getChildren = this.getChildren.bind(this);
    }

    getChildren() {
        return this.props.h4.map(function (h4) {
            return [
                (<h4 key={'h4-' + h4.headerId}>{h4.title}</h4>),
                (<div key={'h4-content-' + h4.headerId}>{h4.content}</div>),
            ];
        });
    }

    render() {
        return (
            <div>
                {this.getChildren()}
            </div>
        );
    }
}

class HeaderTwo extends React.Component {
    static defaultProps = {
        headerId: 0,
        title: "",
        content: "",
        h3: [
            {
                headerId: 0,
                title: "",
                content: "",
                h4: [
                    {
                        headerId: 0,
                        title: "",
                        content: ""
                    }
                ]
            }
        ]
    };

    constructor(props) {
        super(props);

        this.getChildren = this.getChildren.bind(this);
    }

    getChildren() {
        return this.props.h3.map(function (h3) {
            return [
                (<h3 key={'h3-' + h3.headerId}>{h3.title}</h3>),
                (<HeaderThree key={'h3-child-' + h3.headerId}
                              content={h3.content}
                              h4={h3.h4}/>)
            ];
        });
    }

    render() {
        return (
            <div>
                {this.props.content}
                {this.getChildren()}
            </div>

        );
    }
}

class HeaderOne extends React.Component {
    static defaultProps = {
        headerId: 0,
        title: "",
        content: "",
        h2: [
            {
                headerId: 0,
                title: "",
                content: "",
                h3: [
                    {
                        headerId: 0,
                        title: "",
                        content: "",
                        h4: [
                            {
                                headerId: 0,
                                title: "",
                                content: ""
                            }
                        ]
                    }
                ]
            }
        ]
    };

    constructor(props) {
        super(props);

        this.getChildren = this.getChildren.bind(this);
    }

    getChildren() {
        return this.props.h2.map(function (h2) {
            return [
                (<h2 key={'h2-' + h2.headerId}>{h2.title}</h2>),
                (<HeaderTwo key={'h2-child-' + h2.headerId}
                            content={h2.content}
                            h3={h2.h3}
                />)
            ];
        });
    }

    render() {
        return (
            <div>
                {this.props.content}
                {this.getChildren()}
            </div>
        );
    }
}

export default class Accordion extends React.Component {
    static defaultProps = {
        h1: [
            {
                headerId: 0,
                title: "Header 1 - 1",
                content: "",
                h2: [
                    {
                        headerId: 0,
                        title: "",
                        content: "",
                        h3: [
                            {
                                headerId: 0,
                                title: "",
                                content: "",
                                h4: [
                                    {
                                        headerId: 0,
                                        title: "",
                                        content: ""
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                headerId: 1,
                title: "Header 1 - 2",
                content: "",
                h2: [
                    {
                        iheaderId: 1,
                        title: "",
                        content: "",
                        h3: [
                            {
                                headerId: 1,
                                title: "",
                                content: "",
                                h4: [
                                    {
                                        headerId: 1,
                                        title: "",
                                        content: ""
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    constructor(props) {
        super(props);

        this.getContent = this.getContent.bind(this);
    }

    getContent() {
        return this.props.h1.map(function (h1) {
            return [
                (<h1 key={'h1-' + h1.headerId}>{h1.title}</h1>),
                (<HeaderOne key={'h1-child-' + h1.headerId}
                            content={h1.content}
                            h2={h1.h2}
                /> )
            ];
        });
    }

    render() {
        return (
            <aside className="accordion" onClick={accordionHandle}>
                {this.getContent()}
            </aside>
        );
    }
}