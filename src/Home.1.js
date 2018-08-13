import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import ActionHome from "material-ui/svg-icons/action/home";
import muiThemeable from "material-ui/styles/muiThemeable";
import Header from "./header";

class Home extends Component {
  state = {
    purchaseEntry: false
  };
  onPurchaseClick = () => {
    window.open("/purchaseEntry", "_self");
  };
  render() {
    return (
      <div>
        <Header />
        {/* <div style={{
          padding: '45px 15px 10px 15px', textAlign: 'justify', width: 300,
          height: 200, border: '4px solid', borderBottomColor: 'yellow',
          borderTopColor: 'red', borderLeftColor: 'red', borderRightColor: 'yellow',
          color: 'black'
        }}>
          <div style={{ fontSize: 22, padding: '10px 0px', textAlign: 'center' }}> Entry</div>

          <div style={{overflow: 'scroll', height:165,overflowX:'hidden'}}>
            <div style={{ fontSize: 20, padding: '10px 0px', textAlign: 'center' }}>Purchase Entry</div>
            <div style={{ fontSize: 20, padding: '10px 0px', textAlign: 'center' }}>Sales Entry</div>
            <div style={{ fontSize: 20, padding: '10px 0px', textAlign: 'center' }}>WareHouse Entry</div>
            <div style={{ fontSize: 20, padding: '10px 0px', textAlign: 'center' }}>Medicine Entry</div>
            <div style={{ fontSize: 20, padding: '10px 0px', textAlign: 'center' }}>GST IN Entry</div>
          </div>
        </div>
        <div style={{
          borderRadius: '50%', width: 60, height: 60, background: 'aqua', border: '3px solid blue', position: 'absolute', top: '0px', left: '10%'
        }}>
          <IconButton
            iconStyle={{
              width: 60,
              height: 60
            }}
            style={{
              width: 120,
              height: 120,
              position: 'absolute',
              top: '-32px',
              left: '-29px'
            }}
          >
            <ActionHome />
          </IconButton>
        </div> */}
        <div style={{
        textAlign: 'justify',
          height: 'auto', border: '4px solid', borderBottomColor: 'yellow',
          borderTopColor: 'red', borderLeftColor: 'red', borderRightColor: 'yellow',
          color: 'black',marginTop:150,width:'30%',background:'lightblue'}}>
          hello
          </div>
        <RaisedButton
          label="Purchase Entry"
          onClick={this.onPurchaseClick}
          primary={true}
          style={{  
            marginRight: 12,
            width: "30%",
            marginTop: "10%",
            height: 40
          }}
        />
      </div>
    );
  }
}

export default muiThemeable()(Home);
