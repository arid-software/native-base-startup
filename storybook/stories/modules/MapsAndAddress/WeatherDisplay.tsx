import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Pressable,
  Divider,
  Hidden,
  Spacer,
  ScrollView,
  Stack,
} from 'native-base';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import IconSun from './components/IconSun';
import DashboardLayout from '../../layouts/DashboardLayout';

const List = [
  {
    iconName: 'wind',
    iconText: '5 km/h',
  },
  {
    iconName: 'droplet',
    iconText: '0%',
  },
  {
    iconName: 'sun',
    iconText: '14h',
  },
];
const information = [
  {
    text: 'Temperature',
    unit: 'Celsius',
    iconName: 'chevron-right',
  },
  {
    text: 'Wind Speed',
    unit: 'km/h',
    iconName: 'chevron-right',
  },
  {
    text: 'Source',
    unit: 'Weather.gov',
    iconName: 'chevron-right',
  },
];
const currentWeather = [
  {
    time: 'Now',
    iconName: 'sun',
    type: '23°',
  },
  {
    time: '02:00',
    iconName: 'sun',
    type: '26°',
  },
  {
    time: '03:00',
    iconName: 'cloud',
    type: '25°',
  },
  {
    time: '04:00',
    iconName: 'cloud-rain',
    type: '21°',
  },
  {
    time: '05:00',
    iconName: 'cloud-rain',
    type: '18°',
  },
  {
    time: '04:00',
    iconName: 'sun',
    type: '26°',
  },
  {
    time: '05:00',
    iconName: 'cloud',
    type: '25°',
  },
];
const sevenDayWeather = [
  {
    day: 'Sunday',
    minTemp: '24°',
    maxTemp: '25°',
  },
  {
    day: 'Monday',
    minTemp: '19°',
    maxTemp: '21°',
  },
  {
    day: 'Tuesday',
    minTemp: '24°',
    maxTemp: '25°',
  },
  {
    day: 'Wednesday',
    minTemp: '28°',
    maxTemp: '29°',
  },
  {
    day: 'Thursday',
    minTemp: '28°',
    maxTemp: '29°',
  },
];

function WeatherList() {
  return (
    <VStack space="3">
      {List.map((item, index) => {
        return (
          <HStack space="2" key={index}>
            <Icon as={Feather} name={item.iconName} size="5" color="white" />
            <Text color="white" fontSize="sm">
              {item.iconText}
            </Text>
          </HStack>
        );
      })}
    </VStack>
  );
}

function WeatherCard() {
  return (
    <Box px={{ base: '4', md: '0' }}>
      <Hidden colorMode="light">
        <HStack
          h="48"
          alignSelf="stretch"
          justifyContent="space-between"
          bg={{
            linearGradient: {
              colors: ['red.400', 'violet.900'],
              start: [0, 0],
              end: [1, 1],
            },
          }}
          shadow="2"
          rounded="lg"
          p="4"
          space={{ lg: '12' }}
        >
          <VStack>
            <Text bold color="white">
              Dubai
            </Text>
            <Spacer />
            <WeatherList />
          </VStack>
          <VStack pt="4">
            <IconSun />
          </VStack>
          <VStack alignItems="flex-end">
            <Text bold color="white">
              01:30
            </Text>
            <Spacer />
            <Text fontWeight="medium" color="white" fontSize="5xl">
              39°
            </Text>
          </VStack>
        </HStack>
      </Hidden>
      <Hidden colorMode="dark">
        <HStack
          h="48"
          alignSelf="stretch"
          justifyContent="space-between"
          bg={{
            linearGradient: {
              colors: ['red.400', 'violet.900'],
              start: [0, 0],
              end: [1, 1],
            },
          }}
          shadow="2"
          rounded="lg"
          p="4"
          space={{ lg: '12' }}
        >
          <VStack>
            <Text bold color="white">
              Dubai
            </Text>
            <Spacer />
            <WeatherList />
          </VStack>
          <VStack pt="4">
            <IconSun />
          </VStack>
          <VStack alignItems="flex-end">
            <Text bold color="white">
              01:30
            </Text>
            <Spacer />
            <Text fontWeight="medium" color="white" fontSize="5xl">
              39°
            </Text>
          </VStack>
        </HStack>
      </Hidden>
    </Box>
  );
}
function WeatherDegreeUnits() {
  return (
    <VStack
      justifyContent={{ base: 'space-between', md: 'center' }}
      space={{ base: 4, md: 3 }}
      pr={{ base: '4', md: '0' }}
      pl={{ base: '4', md: '0', lg: '6' }}
      py={{ base: '5', lg: '0' }}
      flex={{ md: 1 }}
    >
      {information.map((item, index) => {
        return (
          <Pressable key={index}>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              key={index}
            >
              <Text
                fontSize="md"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                {item.text}
              </Text>
              <HStack space="2" alignItems="center">
                <Text
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.300' }}
                >
                  {item.unit}
                </Text>
                <Icon
                  size="5"
                  as={MaterialIcons}
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.300' }}
                  name={item.iconName}
                />
              </HStack>
            </HStack>
          </Pressable>
        );
      })}
    </VStack>
  );
}
function WeatherPredictions() {
  return (
    <Box
      _light={{ bg: 'white' }}
      _dark={{ bg: 'coolGray.800' }}
      pt={{ base: '5', md: '0' }}
      pb="6"
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        _light={{ color: 'coolGray.800' }}
        _dark={{ color: 'coolGray.50' }}
        px={{ base: '4', md: '0' }}
      >
        Today
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}
      >
        <HStack
          space={{ base: '12' }}
          flex="1"
          px={{ base: '4', md: '0' }}
          justifyContent={{ base: 'space-evenly', md: 'space-between' }}
        >
          {currentWeather.map((item, index) => {
            return (
              <VStack alignItems="center" mt="5" space="2" key={index}>
                <Text
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.200' }}
                  fontSize="sm"
                >
                  {item.time}
                </Text>
                <Icon
                  size="5"
                  as={Feather}
                  _light={{ color: 'coolGray.400' }}
                  _dark={{ color: 'coolGray.400' }}
                  name={item.iconName}
                />
                <Text
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.200' }}
                  fontSize="md"
                  bold
                >
                  {item.type}
                </Text>
              </VStack>
            );
          })}
        </HStack>
      </ScrollView>
    </Box>
  );
}
function WeatherNextWeek() {
  return (
    <Box
      _light={{ bg: 'white' }}
      _dark={{ bg: 'coolGray.800' }}
      pt={{ base: '5', md: '0' }}
      pb={{ base: '6', md: '0' }}
      px={{ base: '4', md: '0' }}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        _light={{ color: 'coolGray.800' }}
        _dark={{ color: 'coolGray.50' }}
      >
        Next 7 Days
      </Text>
      <VStack space="4" mt="4">
        {sevenDayWeather.map((item, index) => {
          return (
            <HStack justifyContent="space-between" key={index}>
              <Text
                fontSize="md"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                {item.day}
              </Text>
              <Text
                bold
                fontSize="sm"
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
              >
                {item.minTemp}
                <Text
                  fontSize="sm"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.300' }}
                >
                  {'/'}
                  {item.maxTemp}
                </Text>
              </Text>
            </HStack>
          );
        })}
      </VStack>
    </Box>
  );
}

export default function (props: any) {
  return (
    <>
      <DashboardLayout title="Weather" displaySidebar={false}>
        <VStack
          safeAreaBottom
          flex="1"
          space={{ base: '4', md: '5' }}
          px={{ base: '0', md: '40' }}
          pt={{ base: '4', md: '8' }}
          pb={{ base: '4', md: '16' }}
          rounded={{ md: 'lg' }}
          borderWidth={{ base: '0', md: '1' }}
          _light={{
            bg: 'white',
            borderColor: 'coolGray.200',
          }}
          _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
        >
          <VStack
            _light={{ bg: { base: 'primary.50', md: 'white' } }}
            _dark={{ bg: { base: 'coolGray.700', md: 'coolGray.800' } }}
            space={{ base: '1.5', md: '7' }}
            divider={
              <Box>
                <Hidden till="md">
                  <Divider />
                </Hidden>
              </Box>
            }
          >
            <Stack
              flexDirection={{ lg: 'row' }}
              _light={{ bg: { base: 'white' } }}
              _dark={{ bg: 'coolGray.800' }}
              justifyContent={{ lg: 'space-between' }}
              pt={{ base: '4', md: 0 }}
            >
              <WeatherCard />
              <WeatherDegreeUnits />
            </Stack>
            <WeatherPredictions />
            <WeatherNextWeek />
          </VStack>
        </VStack>
      </DashboardLayout>
    </>
  );
}
