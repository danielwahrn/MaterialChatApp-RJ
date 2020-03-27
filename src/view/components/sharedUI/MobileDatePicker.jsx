import  React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-mobile-datepicker';
const monthMap = {
	'1': 'January',
	'2': 'February',
	'3': 'March',
	'4': 'April',
	'5': 'May',
	'6': 'Jun',
	'7': 'July',
	'8': 'August',
	'9': 'September',
	'10': 'Octobor',
	'11': 'November',
	'12': 'December',
};
const dateConfig = {
    'date': {
		format: 'DD',
		caption: 'Day',
		step: 1,
	},
	'month': {
		format: value => monthMap[value.getMonth() + 1],
		caption: 'Mon',
		step: 1,
	},	
	'year': {
		format: 'YYYY',
		caption: 'Year',
		step: 1,
	},
}
class App extends React.Component {
	state = {
		time: new Date(),
		isOpen: true,
	}

	handleClick = () => {
		this.setState({ isOpen: true });
	}

	handleCancel = () => {
		this.setState({ isOpen: false });
	}

	handleSelect = (time) => {
		console.log('time')
		this.setState({ time, isOpen: false });
	}

	render() {
		return (
			<div className="sidebar-wrap">
				<DatePicker
					dateConfig={dateConfig}
					theme = "ios"
					showHeader = {false}
					confirmText=""
					cancelText=""
					dateFormat={['D', 'M', 'YYYY']}
					value={this.state.time}
					isOpen={this.state.isOpen}
					onSelect={this.handleSelect}
					onCancel={this.handleCancel} />
			</div>
		);
	}
}


export default App;