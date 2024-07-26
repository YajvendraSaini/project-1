import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Pages</Text>
      <View style={styles.container}>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2eSwINOINEN27AcHoewNVKAFyyaEufaEOR_uARkdi-bzYKOsWjPiSCuJXiMls1rECkFHs1L48LvBsZhCaX90j4VbcUaVswy5oN5jL5A",
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>

          <Text style={styles.cardLabel}>Pink City, Jaipur</Text>

          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace .
          </Text>

          <Text style={styles.cardFooter}>12 mins away</Text>

        </View>
      </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginHorizontal: 16,
      },

  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 16,
  },

  card: {
    width: 320,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    overflow: "hidden",
  },

  cardElevated: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 3,
  },

  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
  },

  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,

  },
  cardTitle: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardLabel: {
    color: "#000000",
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: "#242B2E",
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
  },
  cardFooter: {
    color: "#000000",
  },

});
