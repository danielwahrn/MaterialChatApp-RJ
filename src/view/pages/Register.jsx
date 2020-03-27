import React from 'react';
import { Typography, Container, Grid, FormControl, TextField, Button, Link, Checkbox, FormControlLabel } from '@material-ui/core';
import Layout from '../LayoutBlank';
import SiteLogo from '../components/SiteLogo';
import Password from '../components/sharedUI/form/Password';
import CountryDropdown from '../components/sharedUI/form/CountryDropdown';
import MobileNumber from '../components/sharedUI/form/MobileNumber';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country_code: ''
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });

  };
  onCountryChange = value => {
    this.setState({
      country_code: value
    })
  }
  handleCheckboxChange = name => event => {
    this.setState({
      [name]: event.target.checked,
    });
  };
  render() {
    return (
      <Layout className="register-page register" >
        <Container  >
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            className="page-offset"
            style={{ textAlign: "center" }}
          >
            <Grid item md={7}></Grid>
            <Grid item md={6}>
              <SiteLogo />
              <Typography variant="h2" component="h2" className="page-title">SIGN UP</Typography>
              <Typography className="form-note" >Please select your country code from the list and enter your details to <span className="color-red"> Sign Up!</span></Typography>
              <div className="form-container register">

                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item md={8} align="center">
                    <form autoComplete="off">
                      <FormControl fullWidth={true}>
                        <CountryDropdown label="Select your country" id="country" onChange={this.onCountryChange.bind(this)} />
                      </FormControl>
                      <FormControl fullWidth={true}>
                        <MobileNumber
                          label="Your Phone Number"
                          id="phone"
                          code_id="country_code"
                          value=""
                          country_code={this.state.country_code}
                          onChange={this.handleChange('phone').bind(this)}
                        />
                      </FormControl>
                      <FormControl fullWidth={true}>
                        <TextField
                          onChange={this.handleChange('name').bind(this)}
                          id="name"
                          label="Your Name"
                          placeholder="Who are you"
                          fullWidth
                          margin="normal"
                          InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                          InputLabelProps={{ shrink: true }}
                        /></FormControl>
                      <FormControl fullWidth={true}>
                        <TextField
                          type="email"
                          onChange={this.handleChange('email').bind(this)}
                          id="email"
                          label="Your Email"
                          placeholder="sample@gmail.com"
                          fullWidth
                          margin="normal"
                          InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                          InputLabelProps={{ shrink: true }}
                        /></FormControl>

                      <FormControl fullWidth={true}>
                        <Password
                          id="password"
                          label="Your Password"
                          placeholder="**********"
                          onchange={this.handleChange('password').bind(this)} />
                      </FormControl>
                      <FormControl fullWidth={true}>
                        <Password
                          id="rePassword"
                          label="Repeat Password"
                          placeholder="**********"
                          onchange={this.handleChange('repassword').bind(this)} />
                      </FormControl>

                      <FormControlLabel className="term-label"
                        control={
                          <Checkbox
                            onChange={this.handleCheckboxChange('terms').bind(this)}
                            value="yes"
                            icon={<span className="checkboxIcon" ><span className="checkboxInner" ></span></span>}
                            checkedIcon={<span className="checkboxIcon checked" />}
                          />}
                        label="You accept our Terms and Conditions"
                      />

                      <div className="form-bottom">
                        <Button color="primary" className="btn rounded-radius" variant="contained">Sign Up</Button>

                        <Typography variant="body2" gutterBottom>
                          Already have an  <Link href="/login" className="color-red" >Account?</Link>
                        </Typography>
                      </div>
                    </form>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>

      </Layout>
    );
  }
}
export default Register;