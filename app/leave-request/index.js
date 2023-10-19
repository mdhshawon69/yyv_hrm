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
        <View style={styles.container}>
          <FormControl isRequired isInvalid w="full">
            <FormControl.Label>Reason</FormControl.Label>
            <Input placeholder="Enter Reason" />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Try different from previous passwords.
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl w="full" isRequired isInvalid>
            <FormControl.Label>Choose Leave Type</FormControl.Label>
            <Select
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: "teal.600",
              }}
              mt="1">
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Please make a selection!
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid w="full">
            <FormControl.Label>Leave Starts From</FormControl.Label>
            <Input
              placeholder="Enter Date"
              onPressIn={() => setShowStartDate(true)}
            />
            {showStartDate && <RNDateTimePicker value={new Date()} />}
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Try different from previous passwords.
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid w="full">
            <FormControl.Label>Leave End Day</FormControl.Label>
            <Input
              placeholder="Enter Date"
              onPressIn={() => setShowEndDate(true)}
            />
            {showEndDate && <RNDateTimePicker value={new Date()} />}
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Try different from previous passwords.
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl w="full" isInvalid>
            <FormControl.Label>Choose Partial Hours (If any)</FormControl.Label>
            <Select
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: "teal.600",
              }}
              mt="1">
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Please make a selection!
            </FormControl.ErrorMessage>
          </FormControl>
          <View style={styles.buttonContainer}>
            <Button flex="1" py="4">
              Submit
            </Button>
            <Button flex="1" py="4" bg="red.500">
              Cancel
            </Button>
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
    gap: 10,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    gap: 10,
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
