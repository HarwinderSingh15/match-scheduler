import React from 'react';

import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '@/screens/Home/Home.styles';
import {useSelector} from 'react-redux';
import {Button} from '@/components';
import {NAVIGATION} from '@/constants/navigation';

export function Home({navigation}) {
  const {allSchedules} = useSelector(state => state?.matches);

  return (
    <View style={styles.container}>
      <Button
        title="Create"
        onPress={() => {
          navigation.navigate(NAVIGATION.calendar);
        }}
      />
      <FlatList
        keyExtractor={item => item?.id?.toString()}
        data={allSchedules || []}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NAVIGATION.viewMatchSchedule, {id: item?.id})
            }
            style={{
              borderColor: '#000',
              borderWidth: 1,
              margin: 10,
              padding: 10,
            }}>
            <Text>Match Name: {item?.name}</Text>
            <Text>Total players: {item?.participants?.length}</Text>
            <Text>Date: {item?.timeSlots.selectedDate}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
