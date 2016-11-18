import React from "react";
import styles from "./Form.css";
import {
    Button,
    Options,
    TextArea,
    Input,
    Pane,
    NavGroup,
    NavTitle,
    Actionbar,
    ButtonGroup,
    NavGroupItem
} from "react-photonkit"
class AddBook extends React.Component {
    handleClick() {
        console.log("object");
        // const Datastore = require('nedb'); const db = new Datastore({filename:
        // 'db/books', autoload: true});
    }
    render() {
        return (
            <div className={styles.sidebar}>
                <TextArea rows="3" placeholder="Title"/>
                <Input placeholder="To whom?"/>
                <Input type="email" placeholder="email"/>
                <Options items={["Borrow", "Lend"]}/>
                <div className={styles.btnContainer}>
                    <Actionbar>
                        <ButtonGroup>
                            <Button glyph="plus" onClick={this.handleClick}/>
                        </ButtonGroup>
                    </Actionbar>
                </div>
            </div>
        )
    }
}
export default AddBook;