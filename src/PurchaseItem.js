import React, { Component } from "react";
import AutoComplete from "material-ui/AutoComplete";
import Snackbar from "material-ui/Snackbar";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import muiThemeable from 'material-ui/styles/muiThemeable';


class PurchaseItem extends Component {
  state = {
    selected: [1],
    selectedItem: [],
    searchText: "",
    open: false,
    message: "",
    totalAmount: 0
  };
  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleUpdateInput = searchText => {
    this.setState({
      searchText: searchText
    });
  };

  handleNewRequest = (selected, index) => {
    var selectedItem = this.state.selectedItem;
    let boolen = false;
    selectedItem.map(element => {
      if (element.key == selected.key) {
        boolen = true;
      }
    });
    if (boolen)
      this.setState({ open: true, message: "Item already exist in cart." });
    else selectedItem.push(selected);
    this.setState({
      selectedItem,
      searchText: ""
    });
  };
  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };
  handlePrice = (rowIndex, event) => {
    let selectedItem = this.state.selectedItem;
    let totalAmount = 0;
    selectedItem.map((element, index) => {
      if (rowIndex == index) {
        element.totalAmount =
          event.target.value * element.price + event.target.value * element.gst;
      }
    });
    selectedItem.map((element, index) => {
      totalAmount = element.totalAmount + totalAmount;
    });
    this.setState({ totalAmount, selectedItem });
  };
  render() {
    const dataSource3 = [
      { name: "Crocin", key: "crocin", price: 10, gst: 10 },
      { name: "TriPride 1", key: "tripride1", price: 20, gst: 15 },
      { name: "TripRide 2", key: "tripride2", price: 30, gst: 15 },
      { name: "Dolo 350g", key: "dolo350", price: 50, gst: 20 },
      { name: "Dolo 600g", key: "dolo600", price: 100, gst: 20 }
    ];
    const dataSourceConfig = {
      text: "name",
      value: "key"
    };

    return (
      <div style={{ display: "flex" }}>
        <Paper zDepth={2} style={{ width: "65%" }}>
                <div style={{ height: 400, padding: 10 }}>
            <Snackbar
              open={this.state.open}
              message={this.state.message}
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}
            />
                   <AutoComplete
              floatingLabelText="Same text, different values"
              filter={AutoComplete.caseInsensitiveFilter}
              openOnFocus={true}
              onUpdateInput={this.handleUpdateInput}
              onNewRequest={this.handleNewRequest}
              dataSource={dataSource3}
              dataSourceConfig={dataSourceConfig}
            />
            <Table selectable={false} multiSelectable={false}>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}
              >
                <TableRow>
                  <TableHeaderColumn>Item Name</TableHeaderColumn>
                  <TableHeaderColumn>Price</TableHeaderColumn>
                  <TableHeaderColumn>GST</TableHeaderColumn>
                  <TableHeaderColumn>Quantity</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={false}
                deselectOnClickaway={false}
                showRowHover={false}
                stripedRows={false}
              >
                {this.state.selectedItem.map((Object, index) => (
                  <TableRow>
                    <TableRowColumn>{Object.name}</TableRowColumn>
                    <TableRowColumn>{Object.price}</TableRowColumn>
                    <TableRowColumn>{Object.gst}</TableRowColumn>
                    <TableRowColumn>
                      <TextField
                        hintText="Enter the Quantity"
                        type="number"
                        onChange={this.handlePrice.bind(this, index)}
                      />
                    </TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Paper>
        <Paper
          zDepth={2}
          style={{ marginLeft: 20, width: "35%", height: "250px" }}
        >
          <div style={{ display: "flow-root", padding: "20px 10px 10px 10px" }}>
            <span style={{ float: "left" }}> Total MRP:</span>
            <span style={{ float: "right" }}>{this.state.totalAmount}</span>
          </div>
          <div style={{ display: "flow-root", padding: 10 }}>
            <span style={{ float: "left" }}> Total Discount:</span>
            <span style={{ float: "right" }}>
              -{this.state.totalAmount / 10}
            </span>
          </div>
          <div style={{ display: "flow-root", padding: 10 }}>
            <span style={{ float: "left" }}>Shipping Charges:</span>
            <span style={{ float: "right" }}>As per delivery address</span>
          </div>
          <div
            style={{ display: "flow-root", padding: 10, fontWeight: "bold" }}
          >
            <span style={{ float: "left" }}>To be paid:</span>
            <span style={{ float: "right" }}>
              {this.state.totalAmount - this.state.totalAmount / 10}
            </span>
          </div>
          <div
            style={{ display: "flow-root", padding: 10, fontWeight: "bold" }}
          >
            <span style={{ float: "left" }}>Credited in Loyality Card:</span>
            <span style={{ float: "right" }}>
              {(this.state.totalAmount - this.state.totalAmount / 10) / 10}
            </span>
          </div>
          <div
            style={{
              display: "flow-root",
              background: "lightgrey",
              padding: 10,
              fontWeight: "bold"
            }}
          >
            <span>Total Savings :</span>
            <span style={{ padding: "0px 30px" }}>
              {this.state.totalAmount / 10 +
                (this.state.totalAmount - this.state.totalAmount / 10) / 10}
            </span>
          </div>
        </Paper>
      </div>
    );
  }
}
export default muiThemeable()(PurchaseItem);
