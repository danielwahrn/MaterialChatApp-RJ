import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import 'react-html5-camera-photo/build/css/index.css';
import SetColor from './SetColor';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorpicker: [
                {id: 1, color: '#000000'},
                {id: 2, color: '#ff0000'},
                {id: 3, color: '#ff0000'},
                {id: 4, color: '#ffff00'},
                {id: 5, color: '#008837'},
                {id: 6, color: '#00a0c6'},
                {id: 7, color: '#13007c'},
                {id: 8, color: '#f0047f'},
                {id: 9, color: '#c2000b'},
                {id: 10, color: '#fd1a16'},
                {id: 11, color: '#fe330a'},
                {id: 12, color: '#ff8000'},
                {id: 13, color: '#fea621'},
                {id: 14, color: '#f2f91c'},
                {id: 15, color: '#cce70b'},
                {id: 16, color: '#80c41c'},
                {id: 17, color: '#40a629'},
                {id: 18, color: '#237d26'},
                {id: 19, color: '#12491d'},
                {id: 20, color: '#41aa54'},
                {id: 21, color: '#349980'},
                {id: 22, color: '#4fa0ca'},
                {id: 23, color: '#2e58a6'},
                {id: 24, color: '#110b79'},
                {id: 25, color: '#0b0146'},
                {id: 26, color: '#4a007d'},
                {id: 27, color: '#82027e'},
                {id: 28, color: '#d6a7be'},
                {id: 29, color: '#93014a'},
                {id: 30, color: '#e0013f'},
                {id: 31, color: '#f4136b'},
                {id: 32, color: '#beac83'},
                {id: 33, color: '#916f5d'},
                {id: 34, color: '#be894a'},
                {id: 35, color: '#63300f'},
                {id: 36, color: '#4d1f03'}
            ]
        };
    }
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };
    handleChange = name => event => {   
        this.setState({
            [name]: event.target.value,
        });
    };
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        console.log(color.hex)
    };
    colorcode = (index , e) => {
        const copyemps = Object.assign([], this.state.colorpicker);
        const x = this.state.colorpicker[index].color;
        console.log(x);
        /*copyemps.splice(index, 1);
        this.setState({emps:copyemps});*/
    } 
    render() {
        const { billdetails } = this.props;
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
        return (
            <div className="custom-colorpicker">
                <div className="position-relative">
                    
                    <div className="color-picker-btn">
                        <ul>
                            <li>
                                <button onClick={ this.handleClick } className="picker-circle"></button>
                                { this.state.displayColorPicker ? <div style={ popover } >
                                <div onClick={ this.handleClose } />
                                    <ChromePicker />
                                </div> : null }
                            </li>
                            {
                                this.state.colorpicker.map((cc, id) => {
                                return (<SetColor color={cc.color} 
                                    key={cc.id}
                                    changeEvent = {this.colorcode.bind(this, id)}>
                                   </SetColor>)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
