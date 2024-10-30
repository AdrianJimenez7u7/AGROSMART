import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CardMenu from '../../components/CardMenu';
import ListMenu from '../../components/ListMenu';

function Cortes() {
  const cortes = [
    { FechaHora: '12/10/24', Rancho:"AgricolaTo",Responsable:"Juan Perez",Variedad:"BK13",Sector:"1", Personal:[], KilosTotales:10, kilosAceptados:9, evidencia:""},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>
      <ScrollView contentContainerStyle={styles.menuContainer}>
        {cortes.map((corte, index) => (
          <ListMenu key={index} id={index} rancho={modulo.Rancho} date={modulo.FechaHora} />
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

export default Cortes;
