import React from "react";
import { Toolbar, Actionbar, Button, ButtonGroup } from "react-photonkit";

class Header extends React.Component {
   log(){
     console.log("object");
  };
  render() {
    return (
      <Toolbar title="">
        <Actionbar>
          <ButtonGroup>
            <Button glyph="minus" />
            <Button glyph="plus" onClick={this.log} />
          </ButtonGroup>
        </Actionbar>
      </Toolbar>
    );
  }
}

export default Header;