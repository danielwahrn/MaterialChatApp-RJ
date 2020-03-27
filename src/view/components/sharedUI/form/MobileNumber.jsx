import React, { Component } from "react";
import { TextMaskCustom } from '../../../../helpers/commonFunctions';
import { FormControl, TextField, InputLabel } from '@material-ui/core';


export class MobileNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <InputLabel shrink htmlFor="phone">{this.props.label}</InputLabel>
                <FormControl style={{ flexDirection: 'row' }} >
                    <TextField
                        id={this.props.code_id}
                        name={this.props.code_id}
                        placeholder="+61"
                        value={this.props.country_code}
                        style={{ width: '50px' }}
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true
                        }}
                    />
                    <TextField
                        id={this.props.id}
                        name={this.props.id}
                        onChange={this.props.onChange}
                        placeholder="0000 000 000"
                        value={this.props.value}
                        InputProps={{
                            inputComponent: TextMaskCustom,
                            value: this.state.textmask,
                            disableUnderline: true,
                            autoComplete: 'off'
                        }}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </FormControl>
            </>
        );
    }
}

export default MobileNumber;