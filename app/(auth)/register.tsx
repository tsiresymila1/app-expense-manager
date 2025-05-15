import { SafeAreaView, View } from "react-native";
import RegisterForm from "./components/register-form";
import { Button, Card, Text, useTheme } from "react-native-paper";
import { router } from "expo-router";

export default function RegisterPage() {
    const theme = useTheme()
    return <SafeAreaView className="min-h-full">
        <View className="w-full h-full px-6 justify-center pb-40">
        <View className="w-full" >
        <Card.Title
            titleVariant="headlineMedium"
            titleStyle={{
                textAlign: "center", color: theme.colors.primary,
                fontWeight: "bold",
                textOverflow: "clip",
                marginBottom: 8
            }}
            title="Create new account"
            subtitle="Enter your information for your ExpenseFlow account"
            subtitleNumberOfLines={3}
            subtitleStyle={{ textAlign: "center" }}
        />
            <RegisterForm />
            <View className="flex gap-1  px-4 flex-row items-center justify-center">
            <Text>Already have an account ?</Text>
            <Button mode="text"
                labelStyle={{ textDecorationLine: "underline" }}
                textColor={theme.colors.primary}
                onPress={() => router.replace("/(auth)/login")}
                className="py-1">Login</Button>
        </View>
        <View className="flex gap-1 px-12 flex-row items-center justify-center">
            <View className="w-full h-[1px] flex-1 bg-expense-600" />
            <Text>OR</Text>
            <View className="w-full h-[1px] flex-1 bg-expense-600" />
        </View>
    </View>
        </View>
    </SafeAreaView>
}