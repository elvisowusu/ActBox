import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import TabBtns from "../components/tabIcons";

const _layout = () => {
  const tabs = [
    { name: "index", title: "Home", icon: icons.home },
    { name: "search", title: "Search", icon: icons.search },
    { name: "saved", title: "Saved", icon: icons.save },
    { name: "profile", title: "Profile", icon: icons.person },
  ];

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height:52,
          position:'absolute',
          overflow:'hidden',
          borderWidth:1,
          borderColor:'#0F0D23'
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.name,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBtns focused={focused} title={tab.title} tabIcon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default _layout;
