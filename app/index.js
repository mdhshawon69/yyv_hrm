import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import HeaderButtonLeft from "../components/Home/HeaderButtonLeft/HeaderButtonLeft";
import HeaderButtonRight from "../components/Home/HeaderButtonRight/HeaderButtonRight";
import moment from "moment";
import BodyItems from "../components/Home/BodyItems/BodyItems";
import RecentLeave from "../components/Home/RecentLeave/RecentLeave";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#C82159",
          },
          headerShadowVisible: false,
          headerLeft: () => {
            return <HeaderButtonLeft />;
          },
          headerRight: () => {
            return <HeaderButtonRight />;
          },
          headerTitle: "",
          headerTitleAlign: "center",
        }}
      />

      <ScrollView>
        <View style={{}}>
          <View style={{ flex: 1, backgroundColor: "#C82159", height: hp(20) }}>
            <View style={{ paddingLeft: 15, marginTop: hp(3) }}>
              <Text style={{ fontSize: hp(2.5), color: "#fff" }}>
                Hi Mahmudul,
              </Text>
              <Text
                style={{ fontSize: hp(3), color: "#fff", fontWeight: "bold" }}>
                Good morning
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              height: 70,
              backgroundColor: "#fff",
              marginTop: -50,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingTop: 25,
              paddingLeft: 15,
              paddingRight: 15,
            }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", flexBasis: "auto" }}>
                Overview
              </Text>
              <View
                style={{
                  borderRadius: 20,
                  backgroundColor: "rgba(0,0,0, 0.2)",
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    color: "#222",
                  }}>
                  {moment().format("ll")}
                </Text>
              </View>
            </View>
          </View>

          <BodyItems />
          <RecentLeave />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
