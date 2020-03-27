import React, { Component } from 'react';

export default class Image extends Component {
    render() {
        let { mode, src, height, width, style, ...props } = this.props;
        let modes = {
            'fill': 'cover',
            'fit': 'contain'
        };
        let size = modes[mode] || 'contain';

        let important = {
            backgroundImage: `url("${src}")`,
            backgroundSize: size,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
        };

        return <div {...props} className="icon" style={{ ...style, ...important }} />
    }
}