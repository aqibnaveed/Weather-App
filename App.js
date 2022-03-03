/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GetLocationOfDevice} from './src/utils/helperMethods';
import {WeatherAPI} from './src/utils/api';
import {API_KEY} from './src/constants';
import {DailyWeather} from './src/components/DailyWeather';
import {daily, weekly} from './src/data/weather';
import {WeeklyWeather} from './src/components/WeeklyWeather';

const App = () => {
  const [long, setLong] = React.useState(1);
  const [lat, setLat] = React.useState(1);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    GetLocationOfDevice().then(loc => {
      if (loc.latitude) {
        setLong(loc.longitude);
        setLat(loc.latitude);
      }
    });
  }, []);

  React.useEffect(
    () => () => {
      setData();
      // if(lat && long) {
      //   fetch(
      //   `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${API_KEY}&units=imperial`,
      //   {
      //     method: 'GET'
      //   },
      //   ).then(
      //     res => {return res.json()}
      //   ).then(
      //     res => setData(res)
      //   )
      // }
    },
    [lat, long],
  );

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{backgroundStyle}}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
      <View contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <DailyWeather data={daily} />
          <WeeklyWeather data={weekly} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
