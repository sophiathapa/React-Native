import { colors, components } from "@/constraints/theme";
import "@/global.css";
import { Tabs } from "expo-router";
import { House, Settings, SquareCheckBig, SquareStar } from "lucide-react-native";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { tabBar } = components;

const tabs = [
  { name: "index", title: "Home", icon: House },
  { name: "insights", title: "Insights", icon: SquareStar },
  { name: "subscriptions", title: "Subscriptions", icon: SquareCheckBig },
  { name: "settings", title: "Settings", icon: Settings },
];

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },

        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
        },

        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {tabs.map(({ name, title, icon: Icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,

            tabBarIcon: ({ focused, size, color }) => (
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: tabBar.radius,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? colors.accent : "transparent",
                }}
              >
                <Icon size={size} color={focused ? colors.primary : color} />
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
