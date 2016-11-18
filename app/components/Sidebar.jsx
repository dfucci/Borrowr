import React from "react";
import {
  Button,
  Options,
  TextArea,
  Input,
  Pane,
  NavGroup,
  NavTitle,
  NavGroupItem
} from "react-photonkit";

class Sidebar extends React.Component {
  render() {
    const {select} = this.props;
    return (
      <Pane ptSize="sm" sidebar>
        <NavGroup activeKey={1} onSelect={select}>
          <NavGroupItem eventKey={1} glyph="list" text="All"/>
          <NavGroupItem eventKey={2} glyph="login" text="Lent"/>
          <NavGroupItem eventKey={3} glyph="logout" text="Borrowed"/>
        </NavGroup>
      </Pane>
    );
  }
}

export default Sidebar;