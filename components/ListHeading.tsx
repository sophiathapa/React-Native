import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export interface ListHeadingProps {
  title: string;
}

const ListHeading = ({ title }: ListHeadingProps) => {
  return (
    <View className="flex flex-row justify-between items-center mt-5">
      <Text className="text-2xl font-sans-bold">{title}</Text>
      <TouchableOpacity className="border rounded-4xl py-2 px-4">
        <Text className="text-base">View all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeading;
