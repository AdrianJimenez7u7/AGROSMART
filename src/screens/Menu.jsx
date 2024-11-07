import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Accelerometer, Gyroscope } from 'expo-sensors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Menu = () => {
  const [accelerationData, setAccelerationData] = useState({});
  const [gyroscopeData, setGyroscopeData] = useState({});
  const [verifying, setVerifying] = useState(false);
  const [alertSent, setAlertSent] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // acelerómetro
  useEffect(() => {
    Accelerometer.setUpdateInterval(100); 
    const subscription = Accelerometer.addListener((data) => {
      setAccelerationData(data);
    });

    return () => subscription && subscription.remove();
  }, []);

  // giroscopio
  useEffect(() => {
    Gyroscope.setUpdateInterval(100); 
    const subscription = Gyroscope.addListener((data) => {
      setGyroscopeData(data);
    });

    return () => subscription && subscription.remove();
  }, []);

  // Convertir datos a grados para simular inclinación
  const getInclination = (axis) => {
    return (Math.atan2(axis, 1) * (180 / Math.PI)).toFixed(2);
  };

  // Iniciar verificación al presionar el botón
  const startVerification = () => {
    setVerifying(true);
    setAlertSent(false);
    setTimeElapsed(0);

    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      if (!alertSent) {
        Alert.alert("Planta con posición correcta");
      }
      setVerifying(false);
    }, 10000); // Tiempo de verificacion
  };

  // acelerometro
  useEffect(() => {
    if (verifying && !alertSent) {
      const accelInclinationX = Math.abs(getInclination(accelerationData.x));
      const accelInclinationY = Math.abs(getInclination(accelerationData.y));
      const accelInclinationZ = Math.abs(getInclination(accelerationData.z));

      if (accelInclinationX > 20 || accelInclinationY < 40) {
        Alert.alert("Planta inclinada", "Acomodar Correctamente");
        setAlertSent(true);
        setVerifying(false); 
      }
    }
  }, [accelerationData, verifying, alertSent]);

  // giroscopio
  useEffect(() => {
    if (verifying && !alertSent) {
      const gyroRotationX = Math.abs(getInclination(gyroscopeData.x));
      const gyroRotationY = Math.abs(getInclination(gyroscopeData.y));
      const gyroRotationZ = Math.abs(getInclination(gyroscopeData.z));

      if (gyroRotationX > 45 || gyroRotationY > 45 || gyroRotationZ > 45) {
        Alert.alert("Rotación detectada", "El dispositivo ha sido girado significativamente.");
        setAlertSent(true);
        setVerifying(false);
      }
    }
  }, [gyroscopeData, verifying, alertSent]);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="leaf" size={64} color="#4CAF50" />
      <Text style={styles.header}>Monitoreo de Planta Recta</Text>
      
      <View style={styles.sensorContainer}>
        <Text style={styles.label}>Acelerómetro</Text>
        <Text style={styles.data}>X: {getInclination(accelerationData.x)}°</Text>
        <Text style={styles.data}>Y: {getInclination(accelerationData.y)}°</Text>
        <Text style={styles.data}>Z: {getInclination(accelerationData.z)}°</Text>
      </View>

      <View style={styles.sensorContainer}>
        <Text style={styles.label}>Giroscopio</Text>
        <Text style={styles.data}>X: {getInclination(gyroscopeData.x)}°</Text>
        <Text style={styles.data}>Y: {getInclination(gyroscopeData.y)}°</Text>
        <Text style={styles.data}>Z: {getInclination(gyroscopeData.z)}°</Text>
      </View>

      {verifying && (
        <Text style={styles.timerText}>Tiempo transcurrido: {timeElapsed}s</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={startVerification}>
        <Text style={styles.buttonText}>Iniciar Verificación</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E8F5E9',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#388E3C',
    marginBottom: 20,
  },
  sensorContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#C8E6C9',
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  data: {
    fontSize: 16,
    color: '#1B5E20',
  },
  timerText: {
    fontSize: 18,
    color: '#2E7D32',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Menu;
