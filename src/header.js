import React, { Component } from "react";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import Avatar from 'material-ui/Avatar';

import ActionHome from "material-ui/svg-icons/action/home";
import Apps from "material-ui/svg-icons/navigation/apps";
import muiThemeable from "material-ui/styles/muiThemeable";
import profile from "./asset/3.jpg";

class Header extends Component {
  state = {
    purchaseEntry: false
  };
  onPurchaseClick = () => {
    window.open("/purchaseEntry", "_self");
  };
  render() {
    return (
      <div
        style={{
          height: 50,
          width: "100%",
          left: 0,
          top: 0,
          position: "absolute",
          background: this.props.muiTheme.palette.primary1Color,
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px"
        }}
      >
        <Avatar
          src={profile}
          size={40}
          style={{
            float: "right"
          }}
        />
        <IconButton
          iconStyle={{
            width: 30,
            height: 30
          }}
          style={{
            float: "right"
          }}
        >
          <Apps />
        </IconButton>
        <IconButton
          iconStyle={{
            width: 30,
            height: 30
          }}
          style={{
            float: "right"
          }}
        >
          <ActionHome />
        </IconButton>
      </div>
    );
  }
}

export default muiThemeable()(Header);
