import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.string.isRequired
};

class DashboardModel extends React.Component {
    static modals = [];

    static open = (id) => (e) => {
        e.preventDefault();
        // open modal specified by id
        let modal = DashboardModel.modals.find(x => x.props.id === id);
        modal.setState({ isOpen: true });
        document.body.classList.add('dashboard-modal-open');
    }

    static openModel = (id) => {
        console.log(id, 'opencall');
        // open modal specified by id
        let modal = DashboardModel.modals.find(x => x.props.id === id);
        modal.setState({ isOpen: true });
        document.body.classList.add('dashboard-modal-open');
    }

    static close = (id) => (e) => {
        e.preventDefault();

        // close modal specified by id
        let modal = DashboardModel.modals.find(x => x.props.id === id);
        modal.setState({ isOpen: false });
        document.body.classList.remove('dashboard-modal-open');
    }

    constructor(props) {
        super(props);
        this.state = { isOpen: (props.showOnLoad) ? true : false };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        // document.body.appendChild(this.element);
        var rootEl = document.getElementById('dashboard-wrap');
        if (rootEl) {

            rootEl.appendChild(this.element)
        }
        // add this modal instance to the modal service so it's accessible from other components
        DashboardModel.modals.push(this);
    }

    componentWillUnmount() {
        // remove this modal instance from modal service
        DashboardModel.modals = DashboardModel.modals.filter(x => x.props.id !== this.props.id);
        if (this.element && this.props.removeUnmount)
            this.element.remove();
    }

    openModel(id) {
        let model = DashboardModel.modals.find(x => x.props.id === id);
        console.log(model);
        model.setState({ isOpen: true });
        document.body.classList.add('dashboard-modal-open');
    }

    handleClick(e) {
        // close modal on background click
        if (e.target.className === 'dashboard-modal' && this.props.outsideClickClose) {
            DashboardModel.close(this.props.id)(e);
        }
    }

    render() {
        var isOpen = (this.props.isOpen) ? this.props.isOpen : this.state.isOpen;
        console.log('isopen', this.props.isOpen);
        return (
            <div id="dashboardmenumodal" style={{ display: + isOpen ? '' : 'none' }} onClick={this.handleClick} ref={el => this.element = el}>
                <div className="dashboard-modal">
                    <div className="dashboard-modal-body">
                        {this.props.children}
                    </div>
                </div>
                <div className="dashboard-modal-background"></div>
            </div>
        );
    }
}

DashboardModel.propTypes = propTypes;
export { DashboardModel };