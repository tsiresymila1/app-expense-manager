import { useAppColorScheme } from "@/hooks/useColorScheme";
import { View } from "react-native";
import { Card, Icon, Text, useTheme } from "react-native-paper";

type CardItemProps = {
    icon?: string,
    title: string
    bold: string,
    subtitle: string
}

export default function CardItem({icon="wallet",...props}: CardItemProps) {
    const scheme = useAppColorScheme()
    const theme = useTheme()
    return <Card mode="elevated" style={{
        // backgroundColor: scheme ? " rgba(2, 43, 42, 0.2)" : undefined
    }} className="flex-1 elevation-lg border-0 gap-3 rounded-lg px-2 py-4 bg-expense-50 dark:bg-expense-950/20">
        <View className="flex flex-row justify-between items-center px-4">
            <Text style={{ flex: 1}} variant="bodyMedium" ellipsizeMode="clip">{props.title}</Text>
            <Icon source={icon} size={20} />
        </View>
        <Card.Content className='flex'>
            <Text style={{ color: theme.colors.primary, fontWeight: "bold" }} variant="headlineSmall">{props.bold}</Text>
            <Text ellipsizeMode="clip" variant="bodySmall">{props.subtitle}</Text>
        </Card.Content>
    </Card>
}