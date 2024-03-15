import React, {useEffect} from 'react';

import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '@/screens/Home/Home.styles';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '@/components';
import {NAVIGATION} from '@/constants/navigation';
import {getSchedulesList} from '@/redux/actions/MatchesActions';
import {useIsFocused} from '@react-navigation/native';

export function Home({navigation}) {
  const dispatch = useDispatch();
  const {allSchedules} = useSelector(state => state?.matches);

  const isFocused = useIsFocused();

  useEffect(() => {
    dispatch(getSchedulesList());
  }, [isFocused]);


  console.log(allSchedules)
  return (
    <View style={styles.container}>
      <Button
        title="Create Schedule"
        onPress={() => {
          navigation.navigate(NAVIGATION.calendar);
        }}
      />

      <Text>All Schedules</Text>
      <FlatList
        keyExtractor={item => item?.id?.toString()}
        data={allSchedules || []}
        ListEmptyComponent={<View>
          <Text>No Schedule created</Text>
        </View>}
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
