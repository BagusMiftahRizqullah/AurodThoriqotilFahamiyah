import React, {useEffect} from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import Root from './Root';
import codePush from "react-native-code-push";

const App = () => {
  return (
    <>
      <Root />
    </>
  )
}

// let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, installMode: codePush.InstallMode.ON_NEXT_RESUME };
// Apps = codePush(codePushOptions)(App);

export default codePush(App);
// AppRegistry.registerComponent('App', () => Apps);
