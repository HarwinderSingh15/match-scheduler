import {NAVIGATION} from '@/constants/navigation';
import {
  ViewMatchDetails,
  addMatch,
  editMatchSchedule,
} from '@/redux/actions/MatchesActions';
import {generateRandomId} from '@/utils/globalMethods';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const MatchDetailsScreen = ({navigation, route}) => {
  const {timeSlots, id} = route.params;

  const dispatch = useDispatch();

  const details = useSelector(s => s?.matches?.viewSingleSchedule);

  const {name, location, participants} = details || {};

  const [matchDetails, setMatchDetails] = useState({
    participants: participants || [],
    location: location || '',
    name: name || '',
  });

  console.log(matchDetails)

  const dummyParticipants = [
    'Player 1',
    'Player 2',
    'Player 3',
    'Player 4',
    'Player 5',
    'Player 6',
    'Player 7',
    'Player 8',
    'Player 9',
    'Player 10',
    'Player 11',
    'Player 12',
    'Player 13',
    'Player 14',
    'Player 15',
    'Player 16',
    'Player 17',
    'Player 18',
    'Player 19',
    'Player 20',
    'Player 21',
    'Player 22',
  ];

  // Function to handle saving match details
  const saveMatchDetails = () => {
    if (matchDetails?.participants?.length === 0) {
      alert('Select players ');
      return;
    } else if (matchDetails?.participants?.length < 11) {
      alert('You have to selected 11 players');
      return;
    }
    // Include selectedDates and timeSlots in the matchDetails object
    const updatedMatchDetails = {
      ...matchDetails,
      id: generateRandomId(),
      timeSlots: timeSlots,
    };
    if (id) {
      updatedMatchDetails.id = id;
      dispatch(editMatchSchedule(updatedMatchDetails));
    } else {
      dispatch(addMatch(updatedMatchDetails));
    }
    navigation.navigate(NAVIGATION.home);
  };

  // Function to handle participant selection
  const toggleParticipantSelection = participant => {
    const index = matchDetails?.participants?.findIndex(p => p === participant);

    if (index !== -1) {
      // If participant is already selected, remove it
      const updatedParticipants = [...(matchDetails?.participants || [])];
      updatedParticipants?.splice(index, 1);
      setMatchDetails(prev => ({...prev, participants: updatedParticipants}));
    } else {
      // If participant is not selected and maximum limit is not reached, add it
      if (matchDetails?.participants?.length < 11) {
        setMatchDetails(prev => ({
          ...prev,
          participants: [...matchDetails?.participants, participant],
        }));
      } else {
        // If maximum limit is reached, show an alert or any other notification
        alert('Maximum 11 players can be selected.');
      }
    }
  };

  useEffect(() => {
    if (id) {
      setMatchDetails(prev => ({...prev, participants}));
      dispatch(ViewMatchDetails(id))};
  }, [id]);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, padding: 20}}>
      <Text style={{fontSize: 20, marginBottom: 20}}>Match Details</Text>
      <Text>Match Name</Text>
      <TextInput
        style={{borderColor: '#000', borderWidth: 1}}
        value={matchDetails.name}
        onChangeText={t => setMatchDetails(prev => ({...prev, name: t}))}
      />
      <Text style={{fontSize: 16}}>Select Participants:</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {dummyParticipants.map((participant, index) => (
          <TouchableOpacity
            key={index}
            style={{
              borderWidth: 1,
              borderColor: matchDetails?.participants?.includes(participant)
                ? 'blue'
                : '#ccc',
              padding: 10,
              marginRight: 10,
              marginBottom: 10,
              borderRadius: 5,
            }}
            onPress={() => toggleParticipantSelection(participant)}>
            <Text>{participant}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{fontSize: 16, marginTop: 20}}>Date selected:</Text>
      <Text>{timeSlots.selectedDate}</Text>
      <Text style={{fontSize: 16}}>Time selcted:</Text>
      <Text>
        {timeSlots.startTime} - {timeSlots.endTime}
      </Text>
      <TouchableOpacity onPress={saveMatchDetails}>
        <Text style={{fontSize: 16, color: 'blue'}}>Save Match Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MatchDetailsScreen;
