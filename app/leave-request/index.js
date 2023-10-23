import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Select,
  FormControl,
  Input,
  WarningOutlineIcon,
  Button,
} from "native-base";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function LeaveRequest() {
  const router = useRouter();
  const [service, setService] = useState();
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#C82159",
          },
          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => router.back()}>
                <MaterialCommunityIcons
                  size={30}
                  color="#fff"
                  name="arrow-left"
                />
              </TouchableOpacity>
            );
          },

          headerTitle: "Leave Request",
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />

      <ScrollView style={{ flex: 1 }}>
        <View className="p-[15]">
          <View className="w-full border border-gray-500 py-10"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   input: {
//     flex: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     fontWeight: "500",
//     height: 50,
//     borderRadius: 6,
//   },

//   label: {
//     fontSize: 14,
//     color: "#222",
//     fontWeight: "500",
//     marginBottom: 3,
//   },

//   container: {
//     padding: 15,
//     gap: 10,
//   },

//   buttonContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 15,
//     gap: 10,
//   },

//   apply: {
//     width: "49%",
//     backgroundColor: "#0190FE",
//     textAlign: "center",
//     paddingVertical: 16,
//     borderRadius: 6,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   btnText: {
//     fontWeight: "bold",
//     fontSize: 16,
//     color: "#fff",
//   },

//   cancel: {
//     width: "49%",
//     backgroundColor: "#BDC6CC",
//     textAlign: "center",
//     paddingVertical: 16,
//     borderRadius: 6,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
