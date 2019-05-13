import { AppRegistry } from 'react-360'
import { LeftPanel, CenterPanel, RightPanel } from './src/panels'
import store from './src/store'
import { getAccessToken } from './src/actions'

AppRegistry.registerComponent('LeftPanel', () => LeftPanel);
AppRegistry.registerComponent('CenterPanel', () => CenterPanel);
AppRegistry.registerComponent('RightPanel', () => RightPanel);

store.dispatch(getAccessToken())