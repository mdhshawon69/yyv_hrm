import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function RecentLeave() {
  return (
    <View style={styles.container}>
      <View style={styles.recentLeaveContainer}>
        <Text style={styles.recentLeaveText}>Recent Leave Application</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.leaveCard}>
        <Image
          source={require("../../../assets/dummy-profile-image-female.jpg")}
          style={styles.img}
        />
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.name}>Mahmudul Haque</Text>
            <Text style={styles.date}>15 Sep - 22 Sep 2023</Text>
            <Text style={styles.leaveType}>Sick Leave</Text>
          </View>
          <Text style={styles.status}>Approved</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    paddingBottom: 20,
  },

  recentLeaveText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  seeAllText: {
    color: "#007FFF",
    fontWeight: "600",
  },

  recentLeaveContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  leaveCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    width: "100%",
    paddingVertical: 10,
    marginTop: 15,
    gap: 10,
  },

  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#002D62",
  },

  date: {
    fontWeight: "400",
    fontSize: 14,
    color: "#fd5c63",
  },

  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  status: {
    backgroundColor: "rgba(50, 222, 132, 0.2)",
    flexBasis: "auto",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    color: "#32de84",
    fontWeight: "bold",
  },

  leaveType: {
    color: "#999",
  },

  img: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});
