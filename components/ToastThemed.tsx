import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { ToastConfigParams } from "react-native-toast-message";

export default function ToastThemed<T>(props: ToastConfigParams<T>) {
    return (
        <View className="px-12 w-full">
            <Card className="w-full p-0 m-0">
            <Card.Content className="p-2"> 
                <Text style={props.text1Style}>{props.text1}</Text>
                <Text style={props.text2Style}>{props.text2}</Text>
            </Card.Content>
        </Card>
        </View>
    )
}