import React, { Component } from "react";
import ReactSelectMaterialUi from "react-select-material-ui";
import InputLabel from '@material-ui/core/InputLabel';
export class CountryDropdown extends Component {


    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ""
        };
    }
    handleChange = (value) => {
        console.log(value);
    };


    render() {
        const options = [
            { value: "+61", label: "Australia" },
            { value: "+1", label: "America" },
            { value: "+65", label: "Singapore" }];
        const stylesFn = {
            clearIndicator: (base) => ({
                ...base,
                color: '#888',
                '&:hover': { color: '#000' }
            }),
            control: (base, state) => ({
                ...base,
                background: 'transparent',
                borderBottom: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderRadius: 0,
                boxShadow: 'none',
                marginRight: 25
            }),
            indicatorSeparator: (base) => ({
                display: 'none'
            }),
            menu: (base) => ({
                ...base,
                border: 'none',
                boxShadow: 'none',
                borderRadius: '22px',
                borderTopRightRadius: '0',
                marginTop: '0',
                overflow: 'hidden'

            }),
            menuList: (base) => ({
                ...base,
                borderRadiusTopRight: '0'
            }),
            dropdownIndicator: (base) => ({
                ...base,
                color: '#fff',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.5)',
                padding: '2px',
                '&:hover': { background: '#000', color: '#fff' }
            }),
            option: (base, { isSelected }) => ({
                ...base,
                marginBottom: '5px',
                backgroundColor: '#f6f6f6',
                color: (isSelected) ? '#0047bb' : '#888b8d'
            }),
            singleValue: (base) => ({
                ...base,
                fontWeight: '700'
            }),
        }

        return (
            <>
                <InputLabel shrink htmlFor={this.props.id}>{this.props.label}</InputLabel>
                <ReactSelectMaterialUi
                    id={this.props.id}
                    value="Europe"
                    name={this.props.id}
                    placeholder=""
                    options={(this.props.options) ? this.props.options : options}
                    SelectProps={{
                        isClearable: true,
                        styles: stylesFn
                    }}
                    onChange={this.props.onChange.bind(this)} />
            </>
        );
    }
}

export default CountryDropdown;