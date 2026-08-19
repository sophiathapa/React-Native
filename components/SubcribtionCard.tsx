import { formatCurrency, formatStatusLabel, formatSubscriptionDateTime } from "@/lib/utils";
import { SubscriptionCardProps } from "@/type";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const SubcribtionCard = ({ name, icon, renewalDate, currency, price, color, category, plan, billing, expanded, onPress, paymentMethod, status, startDate }: SubscriptionCardProps) => {
  return (
    <Pressable onPress={onPress} className="flex flex-col bg-accent rounded-tr-2xl rounded-bl-2xl p-5 mt-5" style={color && !expanded ? { backgroundColor: color } : { backgroundColor: "bg-subscription" }}>
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row gap-3 items-center">
          <View className="bg-muted rounded-2xl p-3">
            <Image source={icon} alt="icon image" className="size-10" />
          </View>
          <View>
            <Text className="text-lg font-sans-bold">{name}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" className="text-sm font-sans-semibold text-muted-foreground">
              {category?.trim() || plan?.trim() || (renewalDate ? formatSubscriptionDateTime(renewalDate) : "")}
            </Text>
          </View>
        </View>
        <View>
          <Text className="text-lg font-sans-bold">{formatCurrency(price, currency)}</Text>
          <Text className="text-sm font-sans-semibold text-muted-foreground">{billing}</Text>
        </View>
      </View>

      {expanded && (
        <View className="sub-body">
          <View className="sub-details">
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Payment:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                  {paymentMethod?.trim() ?? "Not provided"}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Category:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                  {(category?.trim() || plan?.trim()) ?? "Not provided"}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Started:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                  {startDate ? formatSubscriptionDateTime(startDate) : "Not provided"}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Renewal date:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                  {renewalDate ? formatSubscriptionDateTime(renewalDate) : "Not provided"}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Status:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                  {status ? formatStatusLabel(status) : "Not provided"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default SubcribtionCard;
