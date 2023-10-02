import { View, Text } from "react-native";
import React from "react";
import ItemCard from "./ItemCard/ItemCard";
import { itemsData } from "../../../assets/static/bodyItemsData";

export default function BodyItems() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,

        flexWrap: "wrap",
        width: "100%",
        flex: 1,
        paddingBottom: 20,
      }}>
      {itemsData.map((item, i) => (
        <ItemCard data={item} key={i} />
      ))}
    </View>
  );
}
