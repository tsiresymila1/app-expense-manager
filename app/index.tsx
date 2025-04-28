import useAuthStore from "@/lib/store/auth";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export default function SplashPage() {
    const { token, user } = useAuthStore()
    const router = useRouter()
    useFocusEffect(useCallback(() => {
        if (token && user) {
            router.navigate("/(private)/(tabs)")
        } else {
            router.navigate("/(auth)/login");
        }
    }, [token, user, router]))
    return <View className="w-full h-full justify-center items-center bg-expense-500/5">
        <ActivityIndicator />
    </View>
}