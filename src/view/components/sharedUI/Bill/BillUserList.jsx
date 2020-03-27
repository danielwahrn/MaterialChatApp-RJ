import React from 'react';
import { Avatar, AppBar, Toolbar, Typography, IconButton, Paper, Button, TextField, FormLabel, Grid,ListItem, ListItemAvatar,
        List,ListItemIcon,ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class BillUserList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
  
    gotoBillHistory(e) {
      e.preventDefault();
      
      this.props.billHistoryPage();
    }
    render() {
      return (
        <>

              <Paper square className="menu-contents dashboard-form">
                <div className="search-list">
                	<List>
                    <ListItem fullwidth>
                    <div className="settings-item">
                      
						<TextField                                
                              id="target_amount"
                              label="WHO WILL PAY?"
                              placeholder="You"
                              fullWidth
                              margin="normal"  
                              InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                              InputLabelProps={{ shrink: true }}
                          />
                    </div>
                    </ListItem>
                    <ListItem>
                    <div className="chat-settings settings-item">
                      <TextField                                
                              id="target_amount"
                              label="FOR WHAT?"
                              placeholder="James' Birthday"
                              fullWidth
                              margin="normal"  
                              InputProps={{ disableUnderline: true, autoComplete: 'off' }}
                              InputLabelProps={{ shrink: true }}
                          />
                      </div>
                    </ListItem>
                  </List>
				</div>
				<section className="section">
                  
                  <UserList items={this.state.list} delete={this.removeItem} />                
                </section>
                <div className="row text-center">
                <Button                            
                    size="small"
                    className="btn btn-small btn-rounded bg-orange color-white"
                    variant="contained"
                    onClick={(e) => {this.gotoBillHistory(e)}}>
                        Next
                </Button>
            
                <div className="row text-center"><a style={{"fontSize":"10px"}}>CREATE A NEW GROUP</a></div>
                <div className="row text-center"><a style={{"fontSize":"10px"}}>SHARE WITH ONE PERSON</a></div>
              </div>
                  
              </Paper>
        
        </>
      )
    }
}
  
class UserList extends React.Component {
    constructor(props) {
      	super(props);
		this.state = {
			filtered: [],
			selectedValue: -1
		};

      	this.billlist = [
        {
            id: 0,
            label: "Super Friends",
            img:require("../../../../assets/images/user-img.png")
        },
        {
            id: 1,
            label: "Birthday gift for James",
            img:require("../../../../assets/images/user-img.png")
        },
        {
            id: 2,
            label: "Friday night drinks",
            img:require("../../../../assets/images/user-img.png")
        },
        {
            id: 3,
            label: "Work people",
            img:require("../../../../assets/images/user-img.png")
        },
        
      	];
	}
	
	handleChange = event => {
		this.setState({selectedValue: event.target.value})
	};
  
    componentDidMount() {
      	this.setState({filtered:this.billlist})
    }
  
    render() {
      return (
        <>
        <div className="search-list">
          	<Toolbar className="search-toolbar" onChange={this.handleChange}>
              	<Paper className="search-form" component="form">
					<IconButton type="submit" aria-label="search" size="small">
					<SearchIcon />
					</IconButton>
					<InputBase
					id="s"
					name="s"
					placeholder="Search For Friends"
					/>
				</Paper>
            </Toolbar> 
            <div className="heading-main settings-item">
              	<Typography component="label" variant="caption" color="primary">Who are we sharing with?</Typography>
            </div>
            <List>
			
				{this.state.filtered.map(item => (
				<ListItem key={item.id} >
					<Avatar src={item.img} />
					<Typography variant="subtitle2" color="textPrimary" gutterBottom> {item.label}</Typography>
					<ListItemSecondaryAction>
						<Radio 
							checked={this.state.selectedValue === item.id}
							onChange={this.handleChange} 
							name="radio-button" value={item.id} 
							size="small" 
							color="primary">
						</Radio>
					</ListItemSecondaryAction>
				</ListItem>
				))}
            </List>
        </div>
        
        </>
      )
    }
  }

export default BillUserList;