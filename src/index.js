import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()


const Main = () => (
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>
)

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
