import { Stack } from "expo-router";
import React from "react";
import ThemeAppBar from "./components/app-bar";

export default function AuthLayout() {
    return <Stack screenOptions={{
        headerShown: true,
        animation: "fade",
        header(props) {
            return <ThemeAppBar {...props} />
        },
    }} />
}