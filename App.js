import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Generador de ids
import uuid from 'react-native-uuid' // npm i react-native-uuid

// Hooks
import { useState } from 'react';

// Componentes
import Imagen from './src/components/Imagen';
import AddBook from './src/components/AddBook';


export default function App() {
  // Libros
  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [libros, setLibros] = useState([])

  const handlerIitulo = (t) => {
    setTitulo(t)
  }

  const handlerAutor = (t) => {
    setAutor(t)
  }

  const handlerDescripcion = (t) => {
    setDescripcion(t)
  }

  const agregarLibros = () => {
    const newBook = {
      id: uuid.v4(),
      agregado: new Date().toLocaleString(),
      titulo: titulo,
      autor: autor,
      descripcion: descripcion,
      leido: false
    }

    // medio spaniglish esto
    setLibros([...libros, newBook])

    setTitulo("")
    setDescripcion("")
    setAutor("")
  }

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <Imagen />

      {/* Agrega libros */}
      <AddBook
        titulo={titulo}
        handlerIitulo={handlerIitulo}
        descripcion={descripcion}
        handlerDescripcion={handlerDescripcion}
        autor={autor}
        handlerAutor={handlerAutor}
        agregarLibros={agregarLibros}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9EDBF',
  },
});
