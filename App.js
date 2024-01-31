import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Componentes
import Imagen from './src/components/Imagen';
import AddBook from './src/components/AddBook';



export default function App() {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <Imagen />

      {/* Agregar libros */}
      <AddBook />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9EDBF',
  },
});
