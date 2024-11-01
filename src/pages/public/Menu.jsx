import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CardMenu from '../../components/CardMenu';

function Menu() {
  navigation.navigate('Menu');

  const modulos = [
    { modulo: 'Cortes', img: require('../../../assets/corte.jpg'), rute: 'Cortes'},
    { modulo: 'Asistencia', img: require('../../../assets/asistencia.jpg') ,rute: 'Cortes'},
    { modulo: 'Inventario', img: require('../../../assets/inventario.jpg'),rute: 'Cortes' },
    { modulo: 'Ranchos', img: require('../../../assets/rancho.jpg'),rute: 'Cortes' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>
      <ScrollView contentContainerStyle={styles.menuContainer}>
        {modulos.map((modulo, index) => (
          <CardMenu key={index} title={modulo.modulo} img={modulo.img} rute={modulo.rute}/>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Menu;
