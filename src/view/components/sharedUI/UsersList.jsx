import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Link, Button } from '@material-ui/core';

import { Toolbar, IconButton, Paper } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

class UsersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            searchString: '',
            filteredUsers: [],
            selectedUsers: []
        };
    }

    componentDidMount() {
        this.setState({
            users: this.props.users,
            filteredUsers: this.props.users
        });
    }

    handleChange(event) {
        this.setState({
            searchString: event.target.value,
            filteredUsers: this.setFilterdUsers()
        });
    }

    setFilterdUsers() {

        if (this.state.searchString) {
            return this.state.users.filter(user => user.name.includes(this.state.searchString))
        } else {
            return this.state.users
        }

    }

    selectUser(selecteditem) {
        let { selectedUsers } = this.state;
        var hasSelectedItem = selectedUsers.find(function (item) {
            return item.id === selecteditem.id ? true : false;
        });
        if (typeof hasSelectedItem === 'undefined' && !hasSelectedItem) {
            selectedUsers.push(selecteditem);
            this.setState({ selectedUsers });
        }
    }
    deselectUser(selecteditem) {
        let { selectedUsers } = this.state;
        var hasSelectedItem = selectedUsers.find(function (item) {
            return item.id === selecteditem.id ? true : false;
        });
        if (typeof hasSelectedItem !== 'undefined' && hasSelectedItem) {
            let filteredArray = selectedUsers.filter(item => item.id !== selecteditem.id)
            this.setState({ selectedUsers: filteredArray });
        }
    }

    showListItem(item, j) {
        return <ListItem key={j} disableGutters={true} >
            <ListItemAvatar>
                <Avatar>
                    <Avatar alt="" src={item.image} />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={<Link component="button"
                    variant="body2"
                    onClick={() => this.selectUser(item)}>{item.name}</Link>}
            />
        </ListItem>
    }
    showSelectdListItem(item, j) {
        return <ListItem key={j} disableGutters={true}>
            <Link component="button" className="closeIcon"
                variant="body2"
                onClick={() => this.deselectUser(item)}>
                <ListItemAvatar>
                    <Avatar>
                        <Avatar alt="" src={item.image} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    secondary={item.name}
                />
            </Link>
        </ListItem>
    }

    render() {
        let group = this.state.users;
        if (this.props.groupAlfa && this.state.searchString === '') {
            group = this.state.users
                .sort((a, b) => a.name.localeCompare(b.name))
                .reduce((r, e) => {
                    const key = e.name[0];
                    if (!r[key]) r[key] = []
                    r[key].push(e);
                    return r;
                }, {});
        }
        return (
            <>
                <div className="userlist-wrap-inner">
                    {(this.state.selectedUsers.length > 0) ? (
                        <List className="selected-userlist" disablePadding={true} >
                            {this.state.selectedUsers.map((item, j) => this.showSelectdListItem(item, j))}
                        </List>
                    ) : ('')}
                    {this.props.search ?
                        (<Toolbar className="search-toolbar">
                            <Paper className="search-form" component="form">
                                <IconButton type="submit" aria-label="search" size="small">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    id="s"
                                    name="s"
                                    value={this.state.searchString}
                                    placeholder="Search For Friends"
                                    onChange={this.handleChange.bind(this)}
                                    ref="search"
                                />
                            </Paper>
                        </Toolbar>) : ('')
                    }

                    <List className="Listing-alpha userlist" style={{ padding: "30px" }} >
                        {this.props.showFrequent !== false && this.state.searchString === '' ? (
                            this.props.frequent ?
                                (<div key={0} className="list-main">
                                    <h3 className="color-black">Frequently contacted</h3>
                                    {this.props.frequent.map((item, j) => this.showListItem(item, j))}
                                </div>) : ('')
                        ) : ('')}
                        {this.props.groupAlfa && this.state.searchString === '' ? (
                            Object.entries(group)
                                .map(([key, value], i) => {
                                    return <div key={i} className="list-main">
                                        <h3>{key}</h3>
                                        {value.map((item, j) => this.showListItem(item, j))}
                                    </div>
                                })
                        ) : (
                                (this.state.filteredUsers !== '') ?
                                    this.state.filteredUsers.map((item, j) => this.showListItem(item, j))
                                    : ('')
                            )}

                    </List>
                    {(this.state.selectedUsers.length > 0) ? (
                        <Button
                            className="btn btn-small color-white bg-green rounded-radius text-center selected-userlist-next"
                            onClick={() => this.props.onNextBtn(this.state.selectedUsers)}
                        >Next</Button>
                    ) : ('')}
                </div>
            </>
        );
    }
}

export default UsersList;