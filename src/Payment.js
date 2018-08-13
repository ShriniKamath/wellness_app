import React, { Component } from "react";
import SelectField from 'material-ui/SelectField'; 
import MenuItem from 'material-ui/MenuItem'; 
import muiThemeable from 'material-ui/styles/muiThemeable';

 
class Payment extends Component {
  state={
    value:1
  }
    handleChange = (event, index, value) => this.setState({value});
  render(){
    return (
      <div style={{height:400}}>
       <SelectField
          floatingLabelText="Frequency"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="PAYTM" />
          <MenuItem value={2} primaryText="CASH" />
          <MenuItem value={3} primaryText="DEBIT CARD" />
          <MenuItem value={4} primaryText="CREDIT CARD" />
          <MenuItem value={5} primaryText="LOYALTY CARD" />
        </SelectField>
      </div>
    );
  }
}
 
export default muiThemeable()(Payment);

