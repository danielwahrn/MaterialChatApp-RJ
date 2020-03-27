import React, { Component } from "react";
import { InputAdornment, Input, IconButton, InputLabel,TextField } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';

class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            showPassword: false,
        };
    }
    handleChange = (event) => {
        this.setState({ password: event.target.value });
    };
    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };
    handleMouseDownPassword = event => {
        event.preventDefault();
    };
    render() {
        return (
            <>
                <TextField 
                id={this.props.id}
                label = {this.props.label}
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
                InputLabelProps={{shrink:true}}
                InputProps={{
                    disableUnderline: true, 
                    autoComplete: 'off',
                    endAdornment:
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                                className={this.state.showPassword ? 'visible' : 'notvisible'}
                            >
                                {this.props.visibility ?(this.state.showPassword ? <Visibility color="primary" /> : <Visibility color="disabled"/>):''}
                            </IconButton>
                        </InputAdornment>
                    
                }}
                
                
                placeholder={(this.props.placeholder) ? this.props.placeholder : "**********"}
                
                error={this.props.error}
                helperText={this.props.helpertext}
                />
                {/* <InputLabel shrink htmlFor={this.props.id} error helperText="incorrect password">{this.props.label}</InputLabel>
                <Input
                    id={this.props.id}
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={this.state.password}
                    onChange={this.handleChange.bind(this)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                                className={this.state.showPassword ? 'visible' : 'notvisible'}
                            >
                                {this.state.showPassword ? <Visibility color="primary" /> : <Visibility color="disabled"/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    
                    placeholder={(this.props.placeholder) ? this.props.placeholder : "**********"}
                    fullWidth
                    disableUnderline={true}
                    autoComplete='off'
                /> */}
            </>
        );
    }
}

export default Password;