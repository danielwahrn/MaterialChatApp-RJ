import React, { Component } from 'react';
import FileData from './FileData';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filedata: [
                {
                    id: 1, 
                    replica: require('../../../../assets/images/pdf.png'),
                    filename: 'tendoc.pdf',
                    noofpages: '1',
                    size: '473KB',
                    type: 'pdf'
                },
                {
                    id: 2, 
                    replica: require('../../../../assets/images/pdf.png'),
                    filename: 'tendoc.pdf',
                    noofpages: '1',
                    size: '473KB',
                    type: 'pdf'
                }
            ]
        };
    }
    render() {
        return (
            <div className="docs-main">
                {
                    this.state.filedata.map((cc, id) => {
                        return (
                            <FileData 
                                key = {cc.id} 
                                id = {cc.id}
                                replica = {cc.replica}
                                filename = {cc.filename}
                                noofpages = {cc.noofpages}
                                size = {cc.size}
                                type = {cc.type}
                                >
                            </FileData>
                        )
                    })
                }
            </div>
        );
    }
}

export default File;