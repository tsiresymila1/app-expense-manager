import { useRouter } from "expo-router";
import { SafeAreaView, View } from "react-native";
import { Button, Card, Checkbox, Text, TextInput, useTheme } from "react-native-paper";

export default function LoginPage() {
    const theme = useTheme()
    const router = useRouter()
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
                <Card.Content className="flex gap-4">
                    <View>
                        <Text>Email</Text>
                        <TextInput
                            label="Email"
                            mode="flat"
                            theme={{ roundness: 4 }}
                        />
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput
                            label="Password"
                            mode="flat"
                            theme={{ roundness: 4 }}
                        />
                    </View>
                    <View className="flex flex-row items-center w-full">
                        <Checkbox uncheckedColor={theme.colors.primary} onPress={() => { }} status={"unchecked"} />
                        <Text className="flex-1 flex justify-center items-center" ellipsizeMode="clip">
                            I agree the <Text className="text-expense-500">Privacy Policy</Text> and <Text className="py-0">Terms of Service</Text> dsd
                        </Text>
                    </View>

                </Card.Content>
                <View className="flex gap-6 py-6 px-4">
                    <Button mode="contained" textColor="white" className="py-1">Login</Button>
                </View>
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