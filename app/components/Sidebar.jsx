import React from "react";
import { Pane, NavGroup, NavTitle, NavGroupItem } from "react-photonkit";

class Sidebar extends React.Component {
  render() {
    const {select} = this.props;
    return (
      <Pane ptSize="sm" sidebar>
        <NavGroup activeKey={1} onSelect={select}>
          <NavGroupItem eventKey={1} glyph="home" text="home" />
          <NavGroupItem eventKey={2} glyph="download" text="download" />
        </NavGroup>
      </Pane>
    );
  }
}

export default Sidebar;