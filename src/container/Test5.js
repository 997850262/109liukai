import React from 'react';
import Switch from '../component/Weui/Switch';
import '../component/Weui/Switch.css'
export default class Test5 extends React.Component {
  state = {
    checked:false,
  };

  onChange = () => {
    this.setState({
      checked:!this.state.checked
    });
  }

  render() {
    return (
      <div>
        <Switch
        checked={this.state.checked}
        onChange={this.onChange}
        />
      </div>
    );
}
}