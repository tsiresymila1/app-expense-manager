import { authClient } from "@/lib/auth";
import useAuthStore from "@/lib/store/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import Toast from 'react-native-toast-message';

import { useState } from "react";
import { Button, Card, Checkbox, HelperText, Text, TextInput, useTheme } from "react-native-paper";
import * as z from "zod";

const schema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    cgu: z.boolean({
        message: "You must accept the terms and conditions",
    }).refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    })
});


export default function LoginForm() {
    const theme = useTheme()
    const [showPaswword, setShowPassword] = useState(false)
    const { setAuth } = useAuthStore()
    const {
        control,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: __DEV__ ? "tsiresymila@gmail.com" : "",
            password: __DEV__ ? "testtest" : ""
        }
    })
    const onSubmit = async (data: z.infer<typeof schema>) => {
        const res = await authClient.signIn.email(data)
        if (res.data) {
            setAuth(res.data.token, res.data.user);
            router.replace("/(private)/(tabs)")
        } else {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: res.error.message,
                position: "bottom",
                visibilityTime: 3000,
            });
            console.log("res.error.message", res.error.message)
        }
    }
    return <>
        <Card.Content className="flex">
            <View>
                <Text>Email</Text>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value, }, fieldState }) =>
                        <TextInput
                            label="Email"
                            mode="flat"
                            value={value}
                            dense
                            theme={{ roundness: 4 }}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            error={fieldState.error != null}
                        
                        />
                    } />
                <HelperText type="error" visible={errors.email != null}>
                    {errors?.email?.message}
                </HelperText>
            </View>
            <View>
                <Text>Password</Text>
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value }, fieldState }) =>
                        <TextInput
                            label="Password"
                            mode="flat"
                            dense
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            right={<TextInput.Icon
                                icon={showPaswword ? "eye-off" : "eye"}
                                onPress={() => setShowPassword(!showPaswword)}
                            />}
                            secureTextEntry={!showPaswword}
                            theme={{ roundness: 4 }}
                            error={fieldState.error != null}
                        />
                    } />
                <HelperText type="error" visible={errors.password != null}>
                    {errors?.password?.message}
                </HelperText>
            </View>
            <View className="flex flex-row items-center w-full">
                <Controller
                    name="cgu"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value }, fieldState }) =>
                        <Checkbox
                            uncheckedColor={fieldState.error ? theme.colors.error : theme.colors.primary}
                            onPress={() => {
                                onChange(!value)
                            }} status={value ? "checked" : "unchecked"}
                        />
                    } />
                <Text className="flex-1 flex justify-center items-center" ellipsizeMode="clip">
                    I agree the <Text className="text-expense-500">Privacy Policy</Text> and <Text className="py-0">Terms of Service</Text>
                </Text>
            </View>
        </Card.Content>
        <View className="flex gap-6 py-6 px-4">
            <Button
                loading={isSubmitting}
                disabled={isSubmitting}
                onPress={handleSubmit(onSubmit)}
                mode="contained"
                textColor="white"
                className="py-1">Login</Button>
        </View>
    </>
}