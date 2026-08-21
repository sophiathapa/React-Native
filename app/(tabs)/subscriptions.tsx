import SubscriptionCard from "@/components/SubscriptionCard";
import { HOME_SUBSCRIPTIONS } from "@/constraints/data";
import { styled } from "nativewind";
import React, { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const subscriptions = () => {
  const [search, setSearch] = useState<string>("");
  const [subcriptionId, setSubcriptionId] = useState<string | null>("");

     const filteredSubscriptions = HOME_SUBSCRIPTIONS.filter((subscription) =>
        subscription.name.toLowerCase().includes(search.toLowerCase()) ||
        subscription.category?.toLowerCase().includes(search.toLowerCase()) ||
        subscription.plan?.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <SafeAreaView className="bg-background p-5 min-h-screen">
      <FlatList
        ListHeaderComponent={
          <View className="flex flex-col gap-5">
            <Text className="text-3xl font-sans-extrabold">Subscriptions</Text>
            <View>
              <TextInput onChangeText={setSearch} value={search} placeholder="useless placeholder" className="h-12 p-2 border border-border rounded-xl" />
            </View>
          </View>
        }
        data={filteredSubscriptions}
        renderItem={({ item }) => <SubscriptionCard {...item} expanded={subcriptionId === item.id} onPress={() => setSubcriptionId((currentId) => (currentId === item.id ? null : item.id))} />}
        contentContainerStyle={{ gap: 20 }}
        showsVerticalScrollIndicator={false}
        extraData={subcriptionId}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      />
    </SafeAreaView>
  );
};

export default subscriptions;
