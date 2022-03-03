import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import {WP, HP} from '../utils/screenSize';

const renderItem = item => {
  console.log(item);
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={styles.time}>{item.item.day}</Text>
      <Image
        source={{uri: 'http://openweathermap.org/img/wn/10d@2x.png'}}
        style={{width: WP(10), height: WP(10)}}
      />
      <Text style={styles.smallText}>{item.item.percepitation}%</Text>
      <Text style={styles.smallText}>
        {item.item.min}°/{item.item.max}°
      </Text>
    </View>
  );
};

export const WeeklyWeather = props => {
  const {data} = props;
  console.log(data);

  return (
    <View
      style={{
        height: HP(50),
      }}>
      <FlatList
        data={data.week}
        renderItem={renderItem}
        keyExtractor={item => item.index}
        scrollEnabled={true}
        key={item => item.index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  smallText: {
    fontSize: WP(4),
  },
  time: {
    fontSize: WP(5),
  },
});
