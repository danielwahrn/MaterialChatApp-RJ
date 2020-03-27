import React, { Component } from 'react';
import LinkTabData from './LinkTabData';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

class LinkTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkdata: [
                {
                    id: 1, 
                    replica: require('../../../../../assets/images/background1.png'),
                    channelurl: 'https://medium.com/zomato-technology/zomatos-new-sudhi-design-system-d7149B64c5',
                    siteurl: 'medium.com'
                },
                {
                    id: 2, 
                    replica: require('../../../../../assets/images/background2.png'),
                    channelurl: 'https://medium.com/zomato-technology/zomatos-new-sudhi-design-system-d7149B64c5',
                    siteurl: 'medium.com'
                }
            ]
        };
    }
    render() {
        return (
            <div className="image-gallery">
                {
                    this.state.linkdata.map((cc, id) => {
                        return (
                            <LinkTabData 
                                key={cc.id} 
                                id={cc.id}
                                replica={cc.replica} 
                                channelurl={cc.channelurl} 
                                siteurl={cc.siteurl}
                                >
                            </LinkTabData>
                        )
                    })
                }
            </div>
        );
    }
}

export default LinkTab;