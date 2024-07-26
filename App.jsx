import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';



export default function App() {
  return (
      <SafeAreaView>
          <ScrollView>
            <FlatCard/>
            <ElevatedCard/>
            <FancyCard/>
            <FancyCard/>
            <ActionCard/>
          </ScrollView>
      </SafeAreaView>
  );
}
