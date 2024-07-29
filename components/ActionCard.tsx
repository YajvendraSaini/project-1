import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Blog card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in React 18?
                    </Text>
                </View>

                <Image source={{ uri: "https://www.syncfusion.com/blogs/wp-content/uploads/2022/02/Everything-You-Should-Know-About-React-18.png" }} style={styles.cardImage} />

                <View style={styles.bodyContainer}>
                    <Text numberOfLines={2}>
                        React 18 is the latest version of the React library. It comes with a lot of new features and improvements. Some of the key features include automatic batching, concurrent rendering, and start transition.
                    </Text>
                </View>

                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://react.dev/blog/2022/03/29/react-v18')}>
                        <Text>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 340,
        marginHorizontal: 20,
        marginVertical: 12,
        
    },
    elevatedCard: {
        backgroundColor: '#C9DABF',
        elevation: 5,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',   
    },
    headerText: {
        color: '#242424',
        fontSize: 16,
        fontWeight: '600',
    },
    cardImage: {
        height: 190,
    },

    bodyContainer: {
        padding: 12,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

   
});
