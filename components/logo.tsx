import { View } from "react-native";
import { Button } from "react-native-paper";

export default function Logo() {
    return <View className="flex justify-start flex-shrink">
        <Button className="flex-shrink" icon="chart-bar">
            ExpenseFlow
        </Button>
    </View>
}