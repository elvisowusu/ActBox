import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  const tabs = ["index", "search", "saved", "profile"];
  return (
    <Tabs>
      {tabs.map((tab) => (
        <Tabs.Screen key={tab} name={tab} options={{ headerShown: false }} />
      ))}
    </Tabs>
  );
};

export default _layout;
