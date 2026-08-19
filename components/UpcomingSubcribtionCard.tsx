import { formatCurrency } from "@/lib/utils";
import { UpcomingSubscription } from "@/type";
import React from "react";
import { Image, Text, View } from "react-native";

const UpcomingSubcribtionCard = ({ name, price, daysLeft, icon, currency }: UpcomingSubscription) => {
  return (
    <View className="flex flex-col border-1 rounded-2xl p-5 gap-2">
      <View className="flex flex-row justify-start gap-5">
        <Image source={icon} className="size-12" />
        <View className="flex flex-col">
          <Text className="text-lg font-sans-bold text-primary">{formatCurrency(price, currency)}</Text>
          <Text className="text-sm font-sans-semibold text-muted-foreground">{daysLeft > 1 ? `${daysLeft} days left` : "Last day"}</Text>
        </View>
      </View>
      <Text className="text-xl font-sans-bold">{name}</Text>
    </View>
  );
};

export default UpcomingSubcribtionCard;
