import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';


export default function ActivityScreen() {
  return (
    <ScrollView>
      <View className='h-full w-auto flex gap-8 px-6 py-6'>
        <View className='flex gap-1'>
          <Text variant="headlineSmall">Activities</Text>
          <Text variant="bodyMedium">Keep track of your actions and updates effortlessly.</Text>
        </View>
        <View className='flex gap-4'>
        </View>
      </View>
    </ScrollView>
  );
}





