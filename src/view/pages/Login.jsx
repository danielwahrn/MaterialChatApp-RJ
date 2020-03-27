import React from 'react';
import { Typography, Container, Grid, FormControl, Button, Link } from '@material-ui/core';
import Layout from '../LayoutBlank';
import SiteLogo from '../components/SiteLogo';
import Password from '../components/sharedUI/form/Password';
import CountryDropdown from '../components/sharedUI/form/CountryDropdown';
import MobileNumber from '../components/sharedUI/form/MobileNumber';

class Login extends React.Component {
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
      <Layout className="login-page" >
        <Container >
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            className="page-offset"
            style={{ textAlign: "center" }}
          >
            <Grid item md={6}>
            </Grid>
            <Grid item md={7} className="space-both">
              <SiteLogo />
              <Typography variant="h2" component="h2" className="login page-title">LOG IN TO SHARE</Typography>
              <Typography className="form-note" >Please select your country from the list and enter your details to <span className="color-red"> Log In!</span></Typography>

              <div className="form-container">

                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item md={6} align="center">
                    <form autoComplete='off'>
                      <FormControl fullWidth={true}>
                        <CountryDropdown label="Select your country" id="country" onChange={this.onCountryChange.bind(this)} />
                      </FormControl>
                      <FormControl fullWidth={true}>
                        <MobileNumber
                          label="Your Phone Number"
                          id="phone"
                          code_id="country_code"
                          value={this.state.phone}
                          value_country_code={this.state.country_code}
                          country_code={this.state.country_code}
                          onChange={this.handleChange('phone').bind(this)}
                        />
                      </FormControl>
                      <FormControl fullWidth={true}>
                        <Password
                          id="password"
                          label="Your Password"
                          placeholder="**********"
                          onchange={this.handleChange('password').bind(this)} />
                      </FormControl>
                      <div className="form-bottom">
                        <Button color="primary" className="btn rounded-radius" variant="contained">Log in</Button>

                        <Typography variant="body2" gutterBottom>
                          Forgot your <Link href="/forgot" className="color-red" > password? </Link>
                        </Typography>
                        <Typography variant="body2" className="signup-text" gutterBottom>
                          <Link href="/register" className="color-red" > Sign Up </Link> now to start sharing </Typography>
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
export default Login;