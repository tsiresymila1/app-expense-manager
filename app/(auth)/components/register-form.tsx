import { authClient } from "@/lib/auth";
import useAuthStore from "@/lib/store/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button, Card, Checkbox, HelperText, Text, TextInput, useTheme } from "react-native-paper";
import Toast from "react-native-toast-message";
import * as z from "zod";

const schema = z.object({
    name: z.string(),
    email: z.string().email("Invalid email"),
    password: z
        .string({
            required_error: "Password required"
        })
        .min(6, "Password must be at least 6 characters"),
    confirm_password: z
        .string({
            required_error: "COnfirmation password required"
        }),
    cgu: z.boolean({
        message: "You must accept the terms and conditions",
    }).refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    })
}).refine((data) => data.password === data.confirm_password, {
    message: "Password not confirm"
    , path: ["confirm_password"]
});

export default function RegisterForm() {
    const theme = useTheme()
    const { setAuth } = useAuthStore()
    const [showPaswword, setShowPassword] = useState(false)
    const {
        control, formState: { errors, isSubmitting }, handleSubmit } = useForm<z.infer<typeof schema>>({
            resolver: zodResolver(schema),
            defaultValues: {
                name: __DEV__ ? "Tsiresy" : "",
                email: __DEV__ ? "test@mail.com" : "",
                password: __DEV__ ? "testtest" : "",
                confirm_password: __DEV__ ? "testtest" : "",
                cgu: __DEV__ ? true : false
            }
        })
    const onSubmit = async (data: z.infer<typeof schema>) => {
        console.log("data", data)
        const res = await authClient.signUp.email(data)
        if (res.data && res.data.token) {
            setAuth(res.data.token, res.data.user);
            router.replace("/(private)/(tabs)")
        } else {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: res.error?.message ?? '',
                position: "bottom",
                visibilityTime: 3000,
            });
            console.log("res.error.message", res.error?.message)
        }
    }
    const onError = (errors: any) => {
        console.log("errors", errors)
    }
    return <>
        <Card.Content className="flex pt-6">
            <View>
                <Text>Name</Text>
                <Controller
                    name="name"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value, }, fieldState }) =>
                        <TextInput
                            label="Name"
                            mode="flat"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={fieldState.error != null}
                            dense
                            theme={{ roundness: 4 }}
                        />
                    } />
                <HelperText type="error" visible={errors.name != null}>
                    {errors?.name?.message}
                </HelperText>
            </View>
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
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={fieldState.error != null}
                            dense
                            theme={{ roundness: 4 }}
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
                    render={({ field: { onChange, onBlur, value, }, fieldState }) =>
                        <TextInput
                            label="Password"
                            mode="flat"
                            theme={{ roundness: 4 }}
                            onBlur={onBlur}
                            value={value}
                            error={fieldState.error != null}
                            secureTextEntry={!showPaswword}
                            right={<TextInput.Icon
                                icon={showPaswword ? "eye-off" : "eye"}
                                onPress={() => setShowPassword(!showPaswword)}
                            />}
                            dense
                        />
                    } />
                <HelperText type="error" visible={errors.password != null}>
                    {errors?.password?.message}
                </HelperText>
            </View>
            <View>
                <Text>Confirm password</Text>
                <Controller
                    name="confirm_password"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value, }, fieldState }) =>
                        <TextInput
                            label="Confirm password"
                            mode="flat"
                            theme={{ roundness: 4 }}
                            onBlur={onBlur}
                            value={value}
                            error={fieldState.error != null}
                            dense
                            secureTextEntry={!showPaswword}
                        />
                    } />
                <HelperText type="error" visible={errors.confirm_password != null}>
                    {errors?.confirm_password?.message}
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
            <Button disabled={isSubmitting} loading={isSubmitting} onPress={handleSubmit(onSubmit)} mode="contained" textColor="white" className="py-1">Register</Button>
        </View>
    </>


}