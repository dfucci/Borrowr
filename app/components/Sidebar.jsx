import React from "react";
import styles from "./Sidebar.css";
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
        <AddBook/>
      </Pane>
    );
  }
}

class AddBook extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <TextArea rows="3" placeholder="Title"/>
        <Input placeholder="To whom?"/>
        <Input type="email" placeholder="email"/>
        <Options items={["Borrow", "Lend"]}/>
        <div className={styles.btnContainer}>
          <Button glyph="plus"/>
        </div>
      </div>
    )
  }
}

export default Sidebar;