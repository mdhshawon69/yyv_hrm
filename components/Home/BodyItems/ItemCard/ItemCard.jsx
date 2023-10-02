import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

export default function ItemCard({ data }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`${data.screen}`)}
      style={{
        width: "48.5%",
        marginVertical: "1.5%",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.16,
        elevation: 2,
        borderRadius: 10,
        backgroundColor: "#f7f7f7",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: 10,
        }}
      >
        <MaterialCommunityIcons
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            borderRadius: 50,
            backgroundColor: `${data.bg}`,
            color: "#fff",
          }}
          name={data.icon}
          size={40}
        />
        <Text style={{ fontSize: 14, marginTop: 10, fontWeight: 600 }}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
