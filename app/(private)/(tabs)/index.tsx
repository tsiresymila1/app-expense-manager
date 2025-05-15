import { useDashQuery } from '@/lib/client/__generated__/graphql';
import { formatDate } from 'date-fns';
import { RefreshControl, ScrollView, View } from 'react-native';
import { Card, Divider, Icon, ProgressBar, Text, useTheme } from 'react-native-paper';
import CardItem from '../_components/card-tem';


export default function HomeScreen() {
  const theme = useTheme()
  const { data, loading, refetch } = useDashQuery()
  const currency = data?.dash?.currency ?? '$'
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={loading} onRefresh={refetch} />
      } className='h-full w-auto'>
      <View className='h-full w-auto flex gap-8 px-6 py-6'>
        <View className='flex gap-1'>
          <Text variant="headlineSmall">Dashboard</Text>
          <Text variant="bodyMedium">Overview of your expenses and spending patterns.</Text>
        </View>
        <View className='flex gap-4'>
          <View className='flex flex-row gap-4'>
            <CardItem
              title='Total Expenses'
              subtitle={`${(((data?.dash.total.current ?? 0) - (data?.dash.total.previous ?? 0)) / (data?.dash.total.current ?? 1) * 100).toFixed(1)}% from last month`}
              bold={`${currency} ${data?.dash.total.current ?? '0'}`}
            />
            <CardItem
              title='Monthly Average'
              subtitle={`${(data?.dash.average.percentageChange ?? 0).toFixed(2)}% from previous month`}
              bold={`${currency} ${data?.dash.average.current ?? 0}`}
            />
          </View>
          <View className='flex flex-row gap-4'>
            <CardItem
              title='Highest Category'
              subtitle={`${data?.dash.highestCategory.percentage ?? .000}% of your expenses`}
              bold={data?.dash.highestCategory.name ?? 'N/A'}
            />
            <CardItem
              title='Recent Expense'
              subtitle={`${data?.dash.recent?.name ?? '_'} - ${data?.dash.recent?.date ? formatDate(data?.dash.recent?.date, 'dd/MM/y') : '_'}`}
              bold={`${currency} ${data?.dash?.recent?.amount ?? 0}`}
            />
          </View>
        </View>
        <Card className='flex gap-4 border-0 px-4 py-4 rounded-lg'>
          <View className='flex gap-1'>
            <Text variant="bodyLarge">Monthly Trend</Text>
            <Text variant="bodySmall">Your spending pattern over time</Text>
          </View>
          <Divider />
          <View className='flex gap-2'>
            <View className='flex items-center gap-2'>
              <Icon
                source={data?.dash.trending.percent ?? 0 > 0 ? "trending-up" : "trending-down"}
                size={40}
                color={data?.dash.trending.percent ?? 0 > 0 ? theme.colors.error : theme.colors.primary}
              />
              <Text>Test</Text>
              <Text variant="bodyMedium" className="font-bold">
                {data?.dash.trending.percent ?? 0 > 0 ? "Consider reviewing your expenses!" : "Keep up the good work!"}
              </Text>
            </View>
          </View>
        </Card>
        <Card className='flex gap-4 border-0 px-4 py-4 rounded-lg'>
          <View className='flex gap-1'>
            <Text variant="bodyLarge">Expense Breakdown</Text>
            <Text variant="bodySmall">Your spending by category.</Text>
          </View>
          <Divider />
          <View className='flex gap-2 pt-4'>
            {data?.dash.categoryStats.map((category) => (
              <View key={category.name} className='flex flex-row items-center gap-2'>
                <Text variant="bodyMedium" className="font-bold w-24">{category.name}</Text>
                <ProgressBar className='flex-1' progress={category.percentage / 100} color={theme.colors.primary} />
                <Text variant="bodyMedium" className="font-bold w-20">{`${category.percentage?.toFixed(2)}%`}</Text>
              </View>
            ))}
          </View>
        </Card>
      </View>
    </ScrollView>

  );
}


