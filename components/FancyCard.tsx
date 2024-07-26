import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Pages</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2eSwINOINEN27AcHoewNVKAFyyaEufaEOR_uARkdi-bzYKOsWjPiSCuJXiMls1rECkFHs1L48LvBsZhCaX90j4VbcUaVswy5oN5jL5A",
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>

          <Text style={styles.cardLable}>Pink City, Jaipur</Text>

          <Text style={styles.cardDescraption}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace .
          </Text>

          <Text style={styles.cardFooter}>12 mins away</Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  cardElevated: {},
  cardImage: {
    height: 180,
  },
  cardBody: {},
  cardTitle: {},
  cardLable: {},
  cardDescraption: {},
  cardFooter: {},

});
