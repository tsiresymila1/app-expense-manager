import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';


export default function SettingScreen() {
  return (
    <ScrollView>
      <View className='h-full w-auto flex gap-8 px-6 py-6'>
        <View className='flex gap-1'>
          <Text variant="headlineSmall">Settings</Text>
          <Text variant="bodyMedium">Manage your account settings and preferences here.</Text>
        </View>
        <View className='flex gap-4'>
        </View>
      </View>
    </ScrollView>
  );
}


