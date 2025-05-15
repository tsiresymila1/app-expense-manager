import { router } from "expo-router";
import { SafeAreaView, View } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";
import LoginForm from "./components/login-form";

export default function LoginPage() {
    const theme = useTheme()
    return <SafeAreaView className="min-h-full">
        <View className="w-full h-full px-6 justify-center pb-40">
            <View className="w-full" >
                <Card.Title
                    titleVariant="headlineMedium"
                    titleStyle={{
                        textAlign: "center", color: theme.colors.primary,
                        fontWeight: "bold",
                        marginBottom: 8
                    }}
                    title="Welcome back"
                    subtitle="Login to your ExpenseFlow account"
                    subtitleStyle={{ textAlign: "center" }}
                    subtitleNumberOfLines={3}
                />
                <LoginForm />
                <View className="flex gap-1  px-4 flex-row items-center justify-center">
                    <Text>Don't have an account ?</Text>
                    <Button mode="text"
                        labelStyle={{ textDecorationLine: "underline" }}
                        textColor={theme.colors.primary}
                        onPress={() => router.replace("/(auth)/register")}
                        className="py-1">Sign up</Button>
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