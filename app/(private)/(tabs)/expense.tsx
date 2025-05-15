import { ScrollView, View } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';


export default function ExpenseScreen() {
  return (
    <ScrollView>
      <View className='h-full w-auto flex gap-8 px-6 py-6'>
        <View className='flex gap-1'>
          <Text variant="headlineSmall">Expenses</Text>
          <Text variant="bodyMedium">Manage and track your expenses.</Text>
        </View>
        <View className='flex gap-4'>
          <Searchbar value='' placeholder='Search' />
        </View>
      </View>
    </ScrollView>
  );
}


