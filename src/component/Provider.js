import {PropTypes, Component} from 'react';

class Provider extends Component {
    static PropTypes() {
        
     }
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }
}

// 指定Provider是一个context提供者
Provider.childContextTypes = {
  store: PropTypes.object
};

export default Provider