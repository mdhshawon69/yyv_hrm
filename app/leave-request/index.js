import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
  Switch,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePickerAndroid from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import moment from "moment";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function LeaveRequest() {
  const [date, setDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const router = useRouter();
  //Router

  const onStartDateSet = (e) => {
    if (e) {
      setStartDate(moment(e.nativeEvent.timestamp).format("YYYY-MM-DD"));
      setShowStartDatePicker(false);
    } else {
      setShowStartDatePicker(false);
    }
  };

  const onEndDateSet = (e) => {
    if (e) {
      setEndDate(moment(e.nativeEvent.timestamp).format("YYYY-MM-DD"));
      setShowEndDatePicker(false);
    } else {
      setShowEndDatePicker(false);
    }
  };
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
        <View style={styles.container}>
          <View>
            <Text style={styles.label}>Leave Type:</Text>
            <View
              style={{
                backgroundColor: "#ccc",
                borderRadius: 6,
                marginBottom: 15,
              }}
            >
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                  { label: "Sick Leave", value: "2" },
                  { label: "Casual Leave", value: "3" },
                  { label: "Annual Leave", value: "4" },
                  { label: "Maternity Leave", value: "5" },
                  { label: "Bereavement Leave", value: "6" },
                  { label: "Marriage Leave", value: "7" },
                  { label: "Leave Without Pay", value: "8" },
                ]}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Reason:</Text>
            <TextInput
              cursorColor={"#C82159"}
              style={styles.input}
              placeholder="Enter Your Reason"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Leave Starts From:</Text>
            <Pressable onPress={() => setShowStartDatePicker(true)}>
              <TextInput
                cursorColor={"#ccc"}
                style={styles.input}
                editable={false}
                value={startDate}
                placeholder="Select Start Date"
              />
            </Pressable>
            {showStartDatePicker && (
              <DateTimePickerAndroid
                onChange={onStartDateSet}
                mode="date"
                value={date}
              />
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Leave Ends:</Text>
            <Pressable onPress={() => setShowEndDatePicker(true)}>
              <TextInput
                cursorColor={"#ccc"}
                style={styles.input}
                editable={false}
                value={endDate}
                placeholder="Select End Date"
              />
            </Pressable>
            {showEndDatePicker && (
              <DateTimePickerAndroid
                onChange={onEndDateSet}
                mode="date"
                value={date}
              />
            )}
          </View>
          <View style={styles.inputContainer}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Leave Day Partials:
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#C82159" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>

          {isEnabled && (
            <View style={{ backgroundColor: "#ccc", borderRadius: 6 }}>
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                  { label: "5", value: "5" },
                  { label: "6", value: "6" },
                  { label: "7", value: "7" },
                ]}
              />
            </View>
          )}

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.apply}>
              <Text style={styles.btnText}>Apply</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancel}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontWeight: "500",
    height: 50,
    backgroundColor: "#ccc",
    borderRadius: 6,
  },

  label: {
    fontSize: 14,
    color: "#222",
    fontWeight: "500",
    marginBottom: 3,
  },

  container: {
    padding: 15,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },

  apply: {
    width: "49%",
    backgroundColor: "#0190FE",
    textAlign: "center",
    paddingVertical: 16,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },

  cancel: {
    width: "49%",
    backgroundColor: "#BDC6CC",
    textAlign: "center",
    paddingVertical: 16,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
