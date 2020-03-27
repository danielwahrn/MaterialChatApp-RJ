import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.string.isRequired
};

class SettingMenuModal extends React.Component {
    static modals = [];
    constructor(props) {
        super(props);
        this.state = { isOpen: (props.showOnLoad) ? true : false };

        this.handleClick = this.handleClick.bind(this);
    }
    static open = (id) => (e) => {
        e.preventDefault();
        // open modal specified by id
        let modal = SettingMenuModal.modals.find(x => x.props.id === id);
        modal.setState({ isOpen: true });
        document.body.classList.add('dashboard-modal-open');
    }

    static openModel = (id) => {
        // open modal specified by id
        let modal = SettingMenuModal.modals.find(x => x.props.id === id);
        modal.setState({ isOpen: true });
        document.body.classList.add('dashboard-modal-open');
        
    }

    static close = (id) => (e) => {
        e.preventDefault();

        // close modal specified by id
        let modal = SettingMenuModal.modals.find(x => x.props.id === id);
        modal.setState({ isOpen: false });
        document.body.classList.remove('dashboard-modal-open');
    }

    

    componentDidMount() {
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        // document.body.appendChild(this.element);
        var rootEl = document.getElementById('dashboard-wrap');
        if (rootEl) {

            rootEl.appendChild(this.element)
        }
        // add this modal instance to the modal service so it's accessible from other components
        SettingMenuModal.modals.push(this);
    }

    componentWillUnmount() {
        // remove this modal instance from modal service
        SettingMenuModal.modals = SettingMenuModal.modals.filter(x => x.props.id !== this.props.id);
        if (this.element && this.props.removeUnmount)
            this.element.remove();
    }

    openModel(id) {
        let model = SettingMenuModal.modals.find(x => x.props.id === id);
        console.log(model);
        model.setState({ isOpen: true });
        document.body.classList.add('dashboard-modal-open');
    }

    closeModal(id) {
        let model = SettingMenuModal.modals.find(x => x.props.id === id);
        
        model.setState({ isOpen: false });
        document.body.classList.remove('dashboard-modal-open');
    }

    handleClick(e) {
        // close modal on background click
        if (e.target.className === 'settingmenu-modal' && this.props.outsideClickClose) {
            SettingMenuModal.close(this.props.id)(e);
        }
    }

    render() {
        var isOpen = (this.props.isOpen) ? this.props.isOpen : this.state.isOpen;
        return (
            <div id="settingmenumodal" style={{ display: + isOpen ? '' : 'none' }} onClick={this.handleClick} ref={el => this.element = el}>
                <div className="settingmenu-modal">
                    <div className="settingmenu-body">
                        {this.props.children}
                    </div>
                </div>
                <div className="settingmenu-modal-background"></div>
            </div>
        );
    }
}

SettingMenuModal.propTypes = propTypes;
export { SettingMenuModal };