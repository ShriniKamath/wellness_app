import React, { Component } from "react";
import SelectField from 'material-ui/SelectField'; 
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

 
class Settings extends Component {

  onChangeTheme = (themeColor,value) => {
    localStorage.setItem('secondaryColor', value)
  }
  render(){
    return (
      <div style={{height:400}}>
       <RadioButtonGroup name="shipSpeed" onChange={this.onChangeTheme.bind(this)}defaultSelected="not_light">
      <RadioButton
        value="red"
        label="Red"
        
      />
      <RadioButton
        value="#9C27B0"
        label="Purple"
      />
      </RadioButtonGroup>
      </div>
    );
  }
}
 
export default muiThemeable()(Settings);
