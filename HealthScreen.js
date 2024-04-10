// HealthScreen.js

import { View, Text, StyleSheet } from 'react-native';

  const MetricsBar = ({label, value, maxValue}) => {
    const percentage = (value / maxValue) * 100;

    return(
    <View style = {styles.container}>
      <Text style = {styles.label}>{label}</Text>
      <View style = {styles.barContainer}>
        <View style = {[styles.bar, {width: '${percentage}%'}]}></View>
        </View>
        <Text style = {styles.value}>{'${value}/ ${maxValue}'}</Text>

    </View>
  );
};

//Test
const HealthScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Health Metrics</Text>
      <MetricsBar label = "Sleep Duration" value = {6} maxValue = {8} color= "purple" />
      <MetricsBar label = "Exercise Amount"value = {0.5} maxValue = {2} color = "orange"/>
      <MetricsBar label = "Water Intake" value = {2} maxValue = {8} color = "aqua" />
      <MetricsBar label = "Caffeine Consumption" value = {300} maxValue = {500} color = "#F5F5D"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  label:{
    fontsize: 18,
    marginBottom: 5,
  },
  barContainer:{
    backgroundColor: '#ddd',
    height: 20,
    width: '100%',
    borderRadius: 10,
    marginBottom: 5,
  },
  bar:{
    height:'100%',
    borderRadius: 10, 
  }, 
  value: {
    fontSize: 16,
  },


});

export default HealthScreen;