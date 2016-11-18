import React from "react";
import {Toolbar, Actionbar, Button, ButtonGroup} from "react-photonkit";

class Header extends React.Component {
  log() {
    var app = require('electron').remote;
    var dialog = app.dialog;
    var fs = require('fs');
    var content = {
      name: "davide",
      surname: "Fucci"
    };
    var contentJSON = JSON.stringify(content);
    fs.writeFile("db.json", contentJSON, function (err) {
      if (err) {
        alert("An error ocurred creating the file " + err.message)
      }
      alert("The file has been succesfully saved");
    });
  };
  render() {
    return (
      <Toolbar psType="footer">
        <Actionbar>
          <ButtonGroup>
            <Button glyph="minus"/>
            <Button glyph="plus" onClick={this.log}/>
          </ButtonGroup>
        </Actionbar>
      </Toolbar>
    );
  }
}

export default Header;