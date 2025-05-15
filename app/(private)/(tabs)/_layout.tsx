import { HapticTab } from '@/components/HapticTab';
import TabBar from '@/components/TabBar';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router';
import React from 'react';
import TabAppBar from '../_components/tab-appbar';

export default function TabLayout() {

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: true,
        tabBarHideOnKeyboard: true,
        tabBarButton: HapticTab,
        header(props) {
            return <TabAppBar {...props} />
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={24} name={focused ? "view-dashboard-outline" : 'view-dashboard'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: 'Category',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={24} name={focused? "alpha-c": "alpha-c-box"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="expense"
        options={{
          title: 'Expense',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={24} name={focused? "currency-usd": "currency-usd"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={24} name={focused? "clipboard-list-outline": "clipboard-list"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={24} name={focused? "cog-outline": "cog"} color={color} />,
        }}
      />
    </Tabs>
  );
}
