import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Imagen from './src/components/Imagen';

export default function App() {
  return (
    <View style={styles.container}>
      <Imagen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9EDBF',
    //alignItems: "center"
  },
});
