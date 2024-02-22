import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";


export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}>
        <Text style={{ fontSize: 20, color: "white" }}>Pick a Sport</Text>
        <Ionicons name="settings-sharp" size={32} color="white" />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.sportsContainer}>
          <View style={styles.row}>
            {/* TODO CREATE COMPONENT FOR EACH ITEM*/}
            <View style={styles.item}>
              <TouchableOpacity>
                <ImageBackground
                  source={{ uri: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} 
                  style={styles.item}
                  imageStyle={styles.itemImage}
                >
                  <View style={styles.overlay}>
                    <Text style={styles.overlayText}>Swimming</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity>
                <ImageBackground
                  source={{ uri: "https://plus.unsplash.com/premium_photo-1664537976485-86c3a5d22ce9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} 
                  style={styles.item}
                  imageStyle={styles.itemImage}
                >
                  <View style={styles.overlay}>
                    <Text style={styles.overlayText}>Running</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
          <View style={styles.item}>
              <TouchableOpacity>
                <ImageBackground
                  source={{ uri: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} 
                  style={styles.item}
                  imageStyle={styles.itemImage}
                >
                  <View style={styles.overlay}>
                    <Text style={styles.overlayText}>Cycling</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity>
                <ImageBackground
                  source={{ uri: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} 
                  style={styles.item}
                  imageStyle={styles.itemImage}
                >
                  <View style={styles.overlay}>
                    <Text style={styles.overlayText}>Skiing</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
          <View style={styles.item}>
              <TouchableOpacity>
                <ImageBackground
                  source={{ uri: "https://images.unsplash.com/photo-1638149216002-1885e715f9d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} 
                  style={styles.item}
                  imageStyle={styles.itemImage}
                >
                  <View style={styles.overlay}>
                    <Text style={styles.overlayText}>XC</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity>
                <ImageBackground
                  source={{ uri: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} 
                  style={styles.item}
                  imageStyle={styles.itemImage}
                >
                  <View style={styles.overlay}>
                    <Text style={styles.overlayText}>Other</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.row}>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#1F283A",
  },
  settingsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignSelf: "center",
    width: "100%",
    marginTop: 100,
    padding: 20,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  sportsContainer: {
    flex: 1,
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: 'white',
    // borderRadius: 5,
    paddingBottom: 100,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  item: {
    width: 150,
    height: 150,
    backgroundColor: "#2B2D42",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  itemText: {
    color: "white",
    fontSize: 16,
  },
  itemImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 15,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(43, 45, 66, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  overlayText: {
    color: '#EDF2F4',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
