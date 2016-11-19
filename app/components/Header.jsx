import React from "react";
import { View, TitleBar } from 'react-desktop/macOs';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isFullscreen: false
    };
  }
  render() {
    return (<TitleBar
      title="untitled text 5"
      controls
      isFullscreen={this.state.isFullscreen}
      onCloseClick={() => console.log('Close window')}
      onMinimizeClick={() => console.log('Minimize window')}
      onMaximizeClick={() => console.log('Mazimize window')}
      onResizeClick={() => this.setState({
      isFullscreen: !this.state.isFullscreen
    })}/>);
  }
}


export default Header;