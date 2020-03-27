import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { FormControlLabel,FormGroup,Switch} from '@material-ui/core';

const IOSSwitch = withStyles(theme => ({
    root: {
      width: 42,
      height: 26,
      padding: '0 0 4px 0', 
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: '2px',
      '&$checked': {
        transform: 'translateX(18px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#44D62C',
          opacity: 1,
          borderColor: '#44D62C'
        },
      },
      '&$focusVisible $thumb': {
        color: '#707070',
      },
    },
    thumb: {
      width: 20,
      height: 20,
      backgroundColor: '#fff'
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid #707070`,
      backgroundColor: '#888B8D',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });


class SwitchCustom extends React.Component {
    
    render() {
        return (
        <>
        <FormGroup aria-label="position" row>
        <FormControlLabel
            className="switch_field"
            control={
                <IOSSwitch
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    name={this.props.name}
                />
            }
            labelPlacement="start"
            label={this.props.label}
        />
        </FormGroup>
        </>);
    } 
}
export default SwitchCustom
