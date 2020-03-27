import React from 'react';
import {CardMedia,CardContent,CardActions,CardActionArea,Card, Typography, Icon, Grid} from '@material-ui/core'
import Button from '@material-ui/core/Button';
const ioncardIcon = require('../../../assets/images/icons/ioncard.svg');
class CreditCard extends React.Component {

  constructor(props) {
      super(props);
      this.state = {};      
  }

  render() {
    return (<>
          {this.ImgMediaCard(this.props.item)}
      </>
    );
  }
 ImgMediaCard(item) {
  return (<>
      <Card key={item.id} onClick={()=>{if(this.props.click)this.props.goNext(item.id)}}>
        <CardActionArea>
          <CardContent>
            <Icon><img src={ioncardIcon} alt="icon" /></Icon>
            <Typography gutterBottom variant="h5" color="textSecondary" component="p" style={{"fontSize":"16px"}}>
            {item.cardnumber}
            </Typography>
            <Typography className="text-center" variant="body2" color="textSecondary" component="p" style={{"fontSize":"13px"}}>
             {item.valid}
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p" style={{"fontSize":"14px"}}>
             {item.holdername}
            </Typography>
          </CardContent>
        </CardActionArea>      
      </Card>
      </>
    );
 }
}
export default CreditCard;