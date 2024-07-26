import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';

export default function App() {
  return (
      <SafeAreaView>
        <ScrollView>
          <FlatCard/>
          <ElevatedCard/>
        </ScrollView>
      </SafeAreaView>
  );
}
