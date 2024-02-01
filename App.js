import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Generador de ids
import uuid from 'react-native-uuid' // npm i react-native-uuid

// Hooks
import { useState } from 'react';

// Componentes
import Imagen from './src/components/Imagen';
import AddBook from './src/components/AddBook';
import BookList from './src/components/BookList';
import ModalDelete from './src/components/ModalDelete';


export default function App() {
  // Libros
  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [libros, setLibros] = useState([])

  // Modal para eliminar
  const [verModal, setVerModal] = useState(false)
  const [libroSelected, setLibroSelected] = useState({})

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

  const updateLectura = (id) => {
    setLibros(libros.map(libro => {
      if (libro.id === id) {
        return { ...libro, ...{ leido: !libro.leido } }
      }
      return libro
    }))
  }

  const handlerModal = (libro) => {
    setLibroSelected(libro)
    setVerModal(!verModal)
  }

  const deleteBook = () => {
    setLibros(libros.filter(libros => libros.id != libroSelected.id))
    setVerModal(!verModal)
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

      {/* Muestra los libros */}
      <BookList
        libros={libros}
        updateLectura={updateLectura}
        handlerModal={handlerModal}
      />

      {/* Cuando se quiere borrar, el modal abre para confirmar */}
      <ModalDelete
        modalVisible={verModal}
        libroSelected={libroSelected}
        handlerModal={handlerModal}
        deleteBook={deleteBook}
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
