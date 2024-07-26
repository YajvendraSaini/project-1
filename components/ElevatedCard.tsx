import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
        <Text style={styles.headingText}>Elevated Card</Text>
        <ScrollView horizontal={true} style={styles.container}>

            <View style={[styles.card, styles.cardElevated]}>
                <Text>🙋🏻</Text>
            </View>

            <View style={[styles.card, styles.cardElevated]}>
                <Text>😁</Text>
            </View>
            
            <View style={[styles.card, styles.cardElevated]}>
                <Text>🪻</Text>
            </View>

            <View style={[styles.card, styles.cardElevated]}>
                <Text>😉</Text>
            </View>

            <View style={[styles.card, styles.cardElevated]}>
                <Text>😗</Text>
            </View>

            <View style={[styles.card, styles.cardElevated]}>
                <Text>🥰</Text>
            </View>

            <View style={[styles.card, styles.cardElevated]}>
                <Text>🦄</Text>
            </View>

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },

    container: {
        padding: 10,
        
    },

    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 10,
    },

    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,

        shadowOffset: {
            width: 0,
            height: 2,
        },

        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,

        },
    
})
