import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ViewMatchDetails} from '@/redux/actions/MatchesActions';
import {Button} from '@/components';
import {NAVIGATION} from '@/constants/navigation';

const ViewMatchSchedule = ({navigation, route}) => {
  const {id} = route?.params || {};
  const dispatch = useDispatch();
  const details = useSelector(s => s?.matches?.viewSingleSchedule);

  const {name, location, participants, timeSlots} = details;

  useEffect(() => {
    dispatch(ViewMatchDetails(id));
  }, []);

  return (
    <View>
      <Text>Match id: {id}</Text>
      <Text>Match Name: {name}</Text>
      <Text>selected players: {participants?.join(', ')}</Text>
      <Text>location: {location}</Text>
      <Text>Date: {timeSlots?.selectedDate}</Text>
      <Text>Time: {timeSlots?.startTime}</Text>

      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Button
          onPress={() =>
            navigation.navigate(NAVIGATION.matchDetails, {id, timeSlots})
          }
          style={{width: '45%'}}
          title="Edit"
        />
        <Button style={{width: '45%'}} title="Delete" />
      </View>
    </View>
  );
};

export default ViewMatchSchedule;

const styles = StyleSheet.create({});
