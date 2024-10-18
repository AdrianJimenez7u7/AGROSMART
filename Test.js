//importacion de componentes react-native (js)
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
// declaracion de constantes JS
const alumnoImage = require('./assets/alumno_image1.png');
const logoImage = require('./assets/logoApp.png');

//la funcion App es codigo JS que retorna etiquetas HTML
const Test = () => {
  // Inicio de Arreglo (JS)
  const alumnos = [
    { id: 1, nombre: 'Juan Pérez', sem: '7A'},
    { id: 2, nombre: 'Ana Gómez', sem: '7A'},
    { id: 3, nombre: 'Luis Martínez', sem: '7B'},
    { id: 4, nombre: 'Francisco Nuñez', sem: '7A'},
    { id: 5, nombre: 'Berenice Aguilar', sem: '7A'},
    { id: 6, nombre: 'Jose Hurtado', sem: '7B'},
  ];
  //Fin de Arreglo (JS)
  //aplica un return (js) que devuelve componentes (HTML) con componentes (CSS) 
  return (
    //inicio(HTML)
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
      </View>

    <ScrollView style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Text style={styles.title}>Lista de Alumnos</Text>
      
      {//Fin(HTML)
      //recorre el Arreglo de Alumnos (JS) para generar elementos con etiquetas HTML
      alumnos.map((alumno) => (
        //HTML con Parametros JS y CSS (StyleSheet)
        <View key={alumno.id} style={styles.alumnoCard}>
          <Image source={alumnoImage} style={styles.alumnoImage} />
          <View style={styles.alumnoInfo}>
            <Text style={styles.alumnoNombre}>{alumno.nombre}</Text>
            <Text style={styles.alumnoSem}>Semestre: {alumno.sem}</Text>
          </View>
        </View>
        //
      ))
      //fin de map (JS)
      }
    </ScrollView>
    </View>
  );
};

// Constante JS que guarda los estilos CSS(StyleSheet) con objetos JSON (JS)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  alumnoCard: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  alumnoImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  alumnoInfo: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  alumnoNombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  alumnoSem: {
    fontSize: 16,
    color: '#777',
  },
  logo: {
    marginTop: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

//Exporta la funcion JS
export default Test;