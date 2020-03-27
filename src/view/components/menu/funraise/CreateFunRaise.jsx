import React from 'react';
import {
    Paper, Button, TextField, FormLabel,
    Radio, RadioGroup, FormControlLabel, FormControl
} from '@material-ui/core';

import { DashboardModel } from '../../DashboardModel';

import DateFnsUtils from "@date-io/date-fns";
import {
    DatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";

import SidebarHeader from '../SidebarHeader';

class CreateFunRaise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            showTargetBilling: false,
            formData: { targetBilling: '' }
        }
    }

    componentDidMount() {
        if (this.state.formData.targetBilling == '')
            DashboardModel.openModel('target-billing');
    }

    setTargetBilling(val) {
        console.log(val);
        this.setState((state) => ({
            formData: {
                ...state.formData,
                targetBilling: val
            }
        }));
    }
    handleChange = name => event => {
        var value = event.target.value;
        this.setState((state) => ({
            formData: {
                ...state.formData,
                [name]: value,
            }
        }));
    };
    handleDateChange = date => {
        this.setState((state) => ({
            formData: {
                ...state.formData,
                'finish_date': date,
            }
        }));
    };
    onSubmit = () => {
        console.log('submiteddata', this.state.formData);
        this.props.showFunraiseSummary(this.state.formData);
    }

    render() {
        return (
            <>
                <div className="sidebar-wrap">
                    <SidebarHeader className="bg-orange color-white"
                        title="Create a new funraise"
                        backAction={this.props.close_form} />

                    <Paper square className="menu-contents-wrap sidebar-content">
                        <Paper square className="menu-contents dashboard-form">
                            {this.state.formData.targetBilling !== '' ? (
                                <form autoComplete="off">
                                    {this.state.formData.targetBilling === 'yes' ? (
                                        <FormControl fullWidth={true}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <DatePicker
                                                    variant="inline"
                                                    label="Finish Date"
                                                    format="dd/MM/yyyy"
                                                    placeholder="dd/mm/yyyy"
                                                    value={this.state.finish_date}
                                                    onChange={date => this.handleDateChange(date)}
                                                    InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                                    InputLabelProps={{ shrink: true }}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </FormControl>
                                    ) : (
                                            <FormControl fullWidth={true}>
                                                <TextField
                                                    onChange={this.handleChange('target_amount').bind(this)}
                                                    id="target_amount"
                                                    label="Target Amount"
                                                    placeholder="AUD"
                                                    fullWidth
                                                    margin="normal"
                                                    InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                                    InputLabelProps={{ shrink: true }}
                                                />
                                            </FormControl>
                                        )}
                                    <FormControl fullWidth={true}>
                                        <TextField
                                            onChange={this.handleChange('funraise_name').bind(this)}
                                            id="funraise_name"
                                            label="What For?"
                                            placeholder="Funraise Name"
                                            fullWidth
                                            margin="normal"
                                            InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                                            InputLabelProps={{ shrink: true }}
                                        /></FormControl>
                                    <FormControl fullWidth={true}>
                                        <TextField
                                            onChange={this.handleChange('description').bind(this)}
                                            id="desctiption"
                                            label="Description"
                                            placeholder="Write some details about why you are raising funds and what your goal is."
                                            fullWidth
                                            margin="normal"

                                            InputProps={{ multiline: true, disableUnderline: true, autoComplete: 'off' }}
                                            InputLabelProps={{ shrink: true }}
                                        /></FormControl>


                                    <FormControl component="fieldset" >
                                        <FormLabel className="privacy-label" component="legend">Privacy</FormLabel>
                                        <RadioGroup
                                            className="radio-buttons"
                                            aria-label="privacy"
                                            id="privacy"
                                            name="privacy" value={this.state.formData.privacy}
                                            onChange={this.handleChange('privacy').bind(this)}>
                                            <FormControlLabel
                                                className={'btn btn-rounded ' + (this.state.formData.privacy === 'private' ? 'active' : '')}
                                                value="private"
                                                control={<Radio color="primary" />}
                                                label="Private"
                                            />
                                            <FormControlLabel
                                                className={'btn btn-rounded ' + (this.state.formData.privacy === 'public' ? 'active' : '')}
                                                value="public"
                                                control={<Radio color="primary" />}
                                                label="Public"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                    <div className="form-bottom">
                                        <Button
                                            onClick={this.onSubmit.bind(this)}
                                            size="small"
                                            className="btn btn-small bg-green btn-rounded color-white"
                                            variant="contained">Done</Button>
                                    </div>
                                </form>
                            ) : ('')}
                        </Paper>
                    </Paper>
                </div>
                <DashboardModel id="target-billing" outsideClickClose={false} removeUnmount={false}>
                    <div className="model-content">
                        <h1>Hey there champ!</h1>
                        <p>Do you know your bills target amount?</p>
                        <div className="button-right">
                            <Button variant="contained" className="btn bg-orange btn-rounded"
                                onClick={(e) => { this.setTargetBilling('yes'); DashboardModel.close('target-billing')(e) }}>Yes</Button>
                            <Button variant="contained" className="btn bg-gray btn-rounded"
                                onClick={(e) => { this.setTargetBilling('no'); DashboardModel.close('target-billing')(e) }}>No</Button>
                        </div>
                    </div>
                </DashboardModel>
            </>
        );
    }
}
export default CreateFunRaise;