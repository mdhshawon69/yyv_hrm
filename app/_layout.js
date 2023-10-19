import React from "react";
import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";

export default function _layout() {
  return (
    <NativeBaseProvider>
      <Stack />
    </NativeBaseProvider>
  );
}
