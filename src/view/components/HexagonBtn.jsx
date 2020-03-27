import React from 'react';
import { Link } from "react-router-dom";
import Image from './Image';
const chatIcon = require('../../assets/images/menu/group-chat.svg');

class HexagonBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var btnclasses = ['hexagon-btn'];
        if (typeof this.props.icon !== 'undefined' && this.props.icon !== false) {
            btnclasses.push("with-icon");
        }
        if (typeof this.props.bg !== 'undefined' && this.props.bg !== false) {
            btnclasses.push('bg-' + this.props.bg);
        }
        if (typeof this.props.color !== 'undefined' && this.props.color !== false) {
            btnclasses.push('color-' + this.props.color);
        }
        if (typeof this.props.size !== 'undefined' && this.props.size !== false) {
            btnclasses.push(this.props.size);
        }
        if (typeof this.props.className !== 'undefined' && this.props.className !== false) {
            btnclasses.push(this.props.className);
        }
        return (
            <>
                <Link
                    {...this.props.btnProps}
                    to={this.props.href}
                    underline="none" color="inherit"
                    className={btnclasses.join(' ')}
                >
                    {(typeof this.props.icon !== 'undefined' && this.props.icon !== false) ?
                        (<div className="row"><img src={this.props.icon} alt="icon"/></div>) :
                        ('')}
                    {this.props.text}
                </Link>
            </>
        );
    }
}
export default HexagonBtn;