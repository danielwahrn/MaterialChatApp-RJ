import React, { Component } from 'react';
import { Button,GridList ,GridListTile} from '@material-ui/core';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {id: 1, img: require('../../../../assets/images/background1.png')},
                {id: 2, img: require('../../../../assets/images/background2.png')},
                {id: 3, img: require('../../../../assets/images/background3.png')},
                {id: 4, img: require('../../../../assets/images/background4.png')},
                {id: 5, img: require('../../../../assets/images/background5.png')},
                {id: 6, img: require('../../../../assets/images/background6.png')},
                {id: 7, img: require('../../../../assets/images/background7.png')}
            ]
        };
        this.selectImage = this.selectImage.bind(this);
    }
   
    selectImage(img){
        console.log(img);
    }
    render() {
        return (
            <div className="image-gallery">
                <GridList cellHeight={120} spacing={1}  className="gridList" cols={3}>
                    {this.state.images.map(image => (
                    <GridListTile key={image.img}>
                        <Button onClick={() => this.selectImage(image)} >
                            <img src={image.img} alt={image.id} />
                        </Button>
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

export default Gallery;
