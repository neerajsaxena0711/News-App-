import React from 'react';
import { Provider} from 'react-redux';
import { Store } from './src/redux/store';
import NewsFeed from './src/screens/NewsFeed'
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const App = () => {
  
  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.container}>
        <NewsFeed />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: '#F8F8F8',
    flex: 1
  }
});

export default App;
