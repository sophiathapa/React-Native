import ListHeading from "@/components/ListHeading";
import SubscriptionCard from "@/components/SubscriptionCard";
import UpcomingSubcribtionCard from "@/components/UpcomingSubcribtionCard";
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, UPCOMING_SUBSCRIPTIONS } from "@/constraints/data";
import images from "@/constraints/images";
import { formatCurrency } from "@/lib/utils";
import { useUser } from "@clerk/expo";
import dayjs from "dayjs";
import { CirclePlus } from "lucide-react-native";
import { styled } from "nativewind";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView); //add tailwind style to the SafeAreaView

export default function App() {
  const { user } = useUser();
  const [subcriptionId, setSubcriptionId] = useState<string | null>(null);
  const displayName = user?.firstName || user?.fullName || user?.emailAddresses[0]?.emailAddress || "User";

  return (
    <SafeAreaView className="p-5 bg-background min-h-screen">
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row gap-3 items-center">
                <Image source={user?.imageUrl ? { uri: user?.imageUrl } : images.avatar} className="size-16 rounded-full" alt="avtar" />
                <Text className="text-lg font-sans-bold text-primary">{displayName}</Text>
              </View>
              <CirclePlus color={"black"} size={40} strokeWidth={1} />
            </View>
            <View className="flex flex-col p-6 justify-between bg-accent min-h-50 rounded-tr-4xl rounded-bl-4xl mt-5">
              <Text className="text-xl text-white/80 font-sans-semibold">Balance</Text>
              <View className="flex flex-row justify-between items-center">
                <Text className="text-4xl text-white font-sans-extrabold">{formatCurrency(HOME_BALANCE.amount)}</Text>
                <Text className="text-xl text-white font-sans-medium">{dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}</Text>
              </View>
            </View>
            <View className="flex flex-col gap-5">
              <ListHeading title="Upcoming" />
              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                renderItem={({ item }) => <UpcomingSubcribtionCard {...item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={<Text className="text-xl">No upcoming renewals yet.</Text>}
                ItemSeparatorComponent={() => <View className="w-4" />}
              />
            </View>
            <ListHeading title="All Subscription" />
          </>
        )}
        data={HOME_SUBSCRIPTIONS}
        renderItem={({ item }) => <SubscriptionCard {...item} expanded={subcriptionId === item.id} onPress={() => setSubcriptionId((currentId) => (currentId === item.id ? null : item.id))} />}
        showsVerticalScrollIndicator={false}
        extraData={subcriptionId}
        ListEmptyComponent={<Text>No subcribtion</Text>}
        ItemSeparatorComponent={() => <View className="h-4" />}
        contentContainerClassName="pb-10"
      />
    </SafeAreaView>
  );
}
