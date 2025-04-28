import { useRouter } from "expo-router";
import { SafeAreaView, View } from "react-native";
import { Button, Card, Checkbox, Text, TextInput, useTheme } from "react-native-paper";

export default function RegisterPage() {
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
                        textOverflow: "clip",
                        marginBottom: 8
                    }}
                    title="Create new account"
                    subtitle="Enter your information for your ExpenseFlow account"
                    subtitleNumberOfLines={3}
                    subtitleStyle={{ textAlign: "center" }}
                />
                <Card.Content className="flex gap-4 pt-6">
                    <View>
                        <Text>Name</Text>
                        <TextInput
                            label="Name"
                            mode="flat"
                            theme={{ roundness: 4 }}
                        />
                    </View>
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
                    <View>
                        <Text>Confirm password</Text>
                        <TextInput
                            label="Confirm password"
                            mode="flat"
                            theme={{ roundness: 4 }}
                        />
                    </View>
                    <View className="flex flex-row items-center overflow-clip w-full">
                        <Checkbox uncheckedColor={theme.colors.primary} onPress={() => { }} status={"unchecked"} />
                        <Text className="flex flex-1" ellipsizeMode="clip" style={{ textOverflow: "ellipsis" }}>
                            I agree the Privacy Policy and Terms of Service
                        </Text>
                    </View>

                </Card.Content>
                <View className="flex gap-6 py-6 px-4">
                    <Button mode="contained" textColor="white" className="py-1">Register</Button>
                </View>
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