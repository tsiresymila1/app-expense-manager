import { useAllCategoryQuery } from '@/lib/client/__generated__/graphql';
import { FlatList, View } from 'react-native';
import { Chip, FAB, List, Searchbar, Text } from 'react-native-paper';


export default function CategoryScreen() {
  const { data, refetch, loading } = useAllCategoryQuery()
  return (
    <View className='h-full w-auto flex gap-8 px-6 py-6'>
      <View className='flex gap-1'>
        <Text variant="headlineSmall">Categories</Text>
        <Text variant="bodyMedium">Manage expense categories forx@ better organization.</Text>
      </View>
      <FAB
        icon="plus"
        onPress={() => console.log('Pressed')}
        className='absolute bottom-0 right-0 m-4 bg-expense-500 elevation-lg'
        // style={{ position: 'absolute', bottom: 16, right: 16, elevation: 1 }}
      />
      <View className='flex gap-4 flex-1'>
        <Searchbar value='' placeholder='Search' />
        <FlatList
          refreshing={loading}
          onRefresh={() => refetch()}
          data={data?.getAllCategory ?? []}
          renderItem={(info) => {
            return <List.Item
              title={info.item.name}
              titleStyle={{ fontSize: 16}}
              descriptionStyle={{ fontSize: 14 }}
              descriptionNumberOfLines={2}
              className='flex gap-2 flex-1'
              description="Item description"
              left={props => <List.Icon {...props} icon="folder" />}
              right={props => <Chip {...props} style={{ borderRadius: 200, ...props.style }} className='rounded-full' children={info.item._count?.expenses ?? 0} />}
            />
          }} />
      </View>
    </View>
  );
}


