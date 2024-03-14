import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '@/screens/Home/Home.styles';
import {getMatchesList} from '@/redux/actions/MatchesActions';

export function Home() {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {allMatches} = useSelector(state => state?.matches);

  console.log(allMatches)

  useEffect(() => {
    dispatch(getMatchesList());
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={allMatches.data}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
