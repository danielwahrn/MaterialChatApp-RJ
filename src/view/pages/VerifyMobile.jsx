import React from 'react';
import { Typography, Container, Grid, FormControl, TextField, Button } from '@material-ui/core';
import Layout from '../LayoutBlank';
import SiteLogo from '../components/SiteLogo';

class VerifyMobile extends React.Component {
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
              <Typography variant="h2" component="h2" className="login page-title">VERIFY YOUR PHONE NUMBER</Typography>
              <Typography className="form-note" >We have sent you an <span className="color-red">SMS/Email</span> with a code to verify your phone number and email. Choose any option and enter it below to get started. If you haven't received the code. <span className="color-red">Tap the Resend Code button.</span></Typography>

              <div className="form-container">
                <form autoComplete="off">
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item md={5} align="center">
                      <FormControl fullWidth={true} className='text-center'>
                        <TextField
                          type="password"
                          onChange={this.handleChange('code').bind(this)}
                          id="code"
                          label="Your email/sms CODE"
                          fullWidth
                          margin="normal"
                          placeholder="*****"
                          value={this.state.code}
                          onInput={(e) => {
                            console.log(e.target.value);
                            var val = Math.max(0, parseInt(e.target.value)).toString().slice(0, 5)
                            e.target.value = (val) ? val : '';
                          }}
                          InputProps={{ maxLength: 0, disableUnderline: true, autoComplete: 'off' }}
                          InputLabelProps={{ shrink: true }}
                        /></FormControl>
                    </Grid>
                  </Grid>
                  <Typography className="small-text" variant="body2" gutterBottom>You will receive an Email/SMS with your verification code</Typography>
                  <div className="form-bottom">
                    <p><Button color="primary" className="btn btn-min-width rounded-radius" variant="contained">Verify</Button></p>
                    <p>
                      <Button className="btn btn-min-width outline rounded-radius" variant="outlined" color="primary">Resend Code</Button></p>
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
export default VerifyMobile;