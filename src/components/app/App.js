import React, { useEffect } from 'react';
import {
  upAction,
  rightAction,
  downAction,
  leftAction,
} from '../../actions/keyPressedActions/KeyPressedActions';
import { connect } from 'react-redux';
import './App.scss';


export const bindActionsToWindow = ({
  upAction,
  rightAction,
  downAction,
  leftAction,
}) => {
  window.document.addEventListener('keydown', (e) => {
    const { code } = e;
    console.log(code)
    switch( code ) {
      case 'ArrowUp':
        upAction();
        break;
      case 'ArrowRight':
        rightAction();
        break;
      case 'ArrowDown':
        downAction();
        break;
      case 'ArrowLeft':
        leftAction();
        break;
      default:

    }
  });
};

export const App = props => {

  useEffect(() => {
    bindActionsToWindow(props);
  }, []);

  return (
    <div className="app"
    >
      App
    </div>
  );
};

export default connect(
  null,
  {
    upAction,
    rightAction,
    downAction,
    leftAction
  }
)(App);
