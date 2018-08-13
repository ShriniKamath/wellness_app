import React, { Component } from "react";
import AutoComplete from 'material-ui/AutoComplete';  
import TextField from 'material-ui/TextField';

import muiThemeable from 'material-ui/styles/muiThemeable';

 
class CustomerInfo extends Component {
	state = {
    selectedItem:{},
     searchText: '',
  };

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest = (selectedItem,index) => {
    this.setState({
      selectedItem,
      searchText: '',
    });
  };
  render() {
	
const dataSource3 = [
  {name: 'Srinivas Kamath', number:"9844673304", address:"Bangalore",email:"srinivaskamath@gmail.com" ,points:100},
  {name: 'Hemanth Kumar', number: '9822673674', address:"Bangalore",email:"hemanthkumar@gmail.com",points:10},
  {name: 'Anil Sharma', number: '6303673304', address:"Mysore",email:"anilsharma@gmail.com",points:5},
  {name: 'Kapil Kapoor', number: '9844623204', address:"Udupi",email:"kapilkapoor@gmail.com",points:230},
  {name: 'Rohit Sinha', number: '9544634558', address:"Karkala",email:"rohitsihna@gmail.com",points:123}
];
const dataSourceConfig = {
  text: 'number',
  value: 'name',
};

    return (
      <div style={{height:400}}>
       <AutoComplete
      floatingLabelText="Enter Customer Info"
      filter={AutoComplete.caseInsensitiveFilter}
      openOnFocus={true}
                onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
      dataSource={dataSource3}
      dataSourceConfig={dataSourceConfig}
    /> 
    <br/>
    {this.state.selectedItem.points?<span>Total Points Earned : {this.state.selectedItem.points}</span>:null}
    <br/>
<TextField
      floatingLabelText="Customer Name"
      value={this.state.selectedItem.name}
      floatingLabelFixed={true}
    />
    <br />
    <TextField
      floatingLabelText="Customer Number"
      value={this.state.selectedItem.number}

      floatingLabelFixed={true}
    />
    <br />
    <TextField
      value={this.state.selectedItem.address}
      floatingLabelText="Customer Address"
      floatingLabelFixed={true}
    />
    <br />
    <TextField
      value={this.state.selectedItem.email}
      floatingLabelText="Customer EmailId"
      floatingLabelFixed={true}
    />
      </div>

    );
  }
}
 
export default muiThemeable()(CustomerInfo);
