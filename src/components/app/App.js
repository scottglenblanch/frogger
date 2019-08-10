import React, { useEffect } from 'react';
import {
  upAction,
  rightAction,
  downAction,
  leftAction,
} from '../../actions/keyPressedActions/KeyPressedActions';
import { connect } from 'react-redux';
import AppPresenter from './appPresenter';


export const bindActionsToWindow = ({
  upAction,
  rightAction,
  downAction,
  leftAction,
}) => {
  window.document.addEventListener('keydown', (e) => {
    const { code } = e;
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
    <AppPresenter {...props} />
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
