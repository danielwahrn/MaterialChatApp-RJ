import React from 'react';
import { Typography, Container, Grid, FormControl, TextField, Button, Link } from '@material-ui/core';
import Layout from '../LayoutBlank';
import SiteLogo from '../components/SiteLogo';
import CountryDropdown from '../components/sharedUI/form/CountryDropdown';
import MobileNumber from '../components/sharedUI/form/MobileNumber';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openSelect: false };
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
      <Layout className="forgotpage forgot-pwd-page" >
        <Container  >
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            className="page-offset"
            style={{ textAlign: "center" }}
          >
            <Grid item md={6}></Grid>
            <Grid item md={7}>
              <SiteLogo />
              <Typography variant="h2" component="h2" className="login page-title">FORGOT PASSWORD</Typography>
              <Typography className="form-note" >Enter the phone number linked to your account.<br /> A new password will be sent to you via <span className="color-red">Email and/or SMS.</span></Typography>

              <div className="form-container">
                <form autoComplete="off">
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item md={5} align="center">
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
                    </Grid>
                  </Grid>
                  <div className="form-bottom">
                    <Button color="primary" className="btn rounded-radius" variant="contained">Send Now</Button>
                    <Typography className="normal-text" variant="body2" gutterBottom>Go back to <Link href="/login" className="color-red" > Log In.</Link> </Typography>
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </Container>

      </Layout>
    );
  }
}
export default ForgotPassword;