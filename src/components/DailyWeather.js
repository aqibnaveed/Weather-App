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
        paddingHorizontal: 10,
        alignItems: 'center',
      }}>
      <Text style={styles.time}>{item.item.time}</Text>
      <Image
        source={{uri: 'http://openweathermap.org/img/wn/10d@2x.png'}}
        style={{width: WP(14), height: WP(14)}}
      />
      <Text style={styles.smallText}>{item.item.temp}°</Text>
      <Text style={styles.smallText}>{item.item.percepitation}%</Text>
    </View>
  );
};

export const DailyWeather = props => {
  const {data} = props;
  console.log(data);

  return (
    <View
      style={{
        height: HP(45),
        backgroundColor: '#d5d7e6',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: 'http://openweathermap.org/img/wn/10d@2x.png'}}
            style={{width: WP(20), height: WP(20)}}
          />
          <Text style={styles.currentTemp}> {data.current.temp}° </Text>
        </View>
        <View>
          <Text style={styles.smallText}>{data.current.description}</Text>
          <Text style={styles.smallText}>
            {data.current.min}° / {data.current.max}°
          </Text>
          <Text style={styles.smallText}>
            Feels like {data.current.feelslike}°
          </Text>
        </View>
      </View>
      <FlatList
        data={data.hourly}
        renderItem={renderItem}
        keyExtractor={item => item.index}
        horizontal={true}
        scrollEnabled={true}
        key={item => item.index}
      />
      <Text style={styles.smallText}>MORE...</Text>
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
  currentTemp: {
    fontSize: WP(15),
    fontWeight: 'bold',
  },
});
