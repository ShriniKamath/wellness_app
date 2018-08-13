import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Snackbar from "material-ui/Snackbar";

import img from "./asset/1.png";
class Login extends Component {
  state = {
    username: "",
    paswword: "",
    open: false
  };
  handleChangeUser = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleChangePwd = event => {
    this.setState({
      password: event.target.value
    });
  };
  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };
  onSubmit = () => {
    if (this.state.username == "admin" && this.state.password == "admin") {
      window.open("/home", "_self");
    } else {
      this.setState({ open: true });
    }
  };
  render() {
    // console.log(this.state.Username, this.state.password);
    return (
      <div style={{ background: "white", height: "100%", width: "100%" }}>
        <Snackbar
          open={this.state.open}
          message="Loin Failed Contact Your Administrator."
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
                <div
          style={{
            marginTop: "auto",
            marginRight: "auto",
            marginBottom: "auto",
            marginLeft: "auto",
            background: "#4bcffa1a",
            height: 500,
            width: 400,
            boxShadow: "0px 1px 6px 3px #182C61"
          }}
        >
          <div
            style={{
              width: "40%",
              height: "20%",
              backgroundImage: `url(${img})`,
              backgroundSize: "100% 100%",
              position: "absolute",
              backgroundRepeat: "no-repeat",
              top: "12%",
              left: "25%"
            }}
          />
          <div style={{ paddingTop: "45%", paddingLeft: "17%" }}>
            <TextField
              floatingLabelText="UserName"
              floatingLabelFixed={true}
              value={this.state.username}
              floatingLabelStyle={{ color: "black" }}
              onChange={this.handleChangeUser.bind(this)}
            />
            <br />
            <TextField
              floatingLabelFixed={true}
              value={this.state.password}
              floatingLabelStyle={{ color: "black" }}
              floatingLabelText="Password"
              type="password"
              onChange={this.handleChangePwd.bind(this)}
            />
            <br />
            <RaisedButton
              label="Log in"
              onClick={this.onSubmit}
              primary={true}
              style={{
                marginRight: 12,
                width: "78%",
                marginTop: "21%",
                height: 60
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
