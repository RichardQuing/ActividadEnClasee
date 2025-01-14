import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import React from "react";

export default function MapaScreen() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});
