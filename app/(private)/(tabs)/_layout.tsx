import { HapticTab } from '@/components/HapticTab';
import TabBar from '@/components/TabBar';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarButton: HapticTab
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={24} name={focused ? 'home' : 'home-outline'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={24} name={focused? "cog": "cog-outline"} color={color} />,
        }}
      />
    </Tabs>
  );
}
