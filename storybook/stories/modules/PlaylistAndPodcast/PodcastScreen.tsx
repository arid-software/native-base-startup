import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  IconButton,
  Pressable,
  ScrollView,
  Divider,
  Hidden,
  Badge,
  Link,
} from 'native-base';

import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';

const album = [
  {
    imageUri: require('../../assets/eclipse1.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse2.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse3.jpeg'),
  },
  {
    imageUri: require('../../assets/eclipse4.jpeg'),
  },
];

const categoriesIconsList = [
  {
    name: 'Meditation',
    iconName: 'meditation',
    iconLibrary: MaterialCommunityIcons,
  },
  {
    name: 'Innovation',
    iconName: 'light-bulb',
    iconLibrary: Entypo,
  },
  {
    name: 'Coronavirus',
    iconName: 'virus',
    iconLibrary: MaterialCommunityIcons,
  },
  {
    name: 'Comedy',
    iconName: 'theater-masks',
    iconLibrary: FontAwesome5,
  },
  {
    name: 'Education',
    iconName: 'graduation-cap',
    iconLibrary: FontAwesome,
  },
  {
    name: 'News',
    iconName: 'news',
    iconLibrary: Entypo,
  },
  {
    name: 'Business',
    iconName: 'business-center',
    iconLibrary: MaterialIcons,
  },
  {
    name: 'Sports',
    iconName: 'game-controller',
    iconLibrary: Ionicons,
  },
  {
    name: 'More',
    iconName: 'dots-three-vertical',
    iconLibrary: Entypo,
  },
];
const trending = [
  {
    imageUri: require('./components/podcast1.png'),
    name: 'Story Seeds',
  },
  {
    imageUri: require('./components/podcast7.png'),
    name: 'Journey with ..',
  },
  {
    imageUri: require('./components/podcast2.jpg'),
    name: 'Small Beautiful',
  },
  {
    imageUri: require('./components/podcast3.png'),
    name: 'Dare to Lead',
  },
  {
    imageUri: require('./components/podcast4.png'),
    name: 'Story Seeds',
  },
  {
    imageUri: require('./components/podcast5.jpeg'),
    name: 'Journey with ..',
  },
  {
    imageUri: require('./components/podcast6.jpeg'),
    name: 'Small Beautiful',
  },
  {
    imageUri: require('./components/podcast7.png'),
    name: 'Dare to Lead',
  },
];

function FeaturedShows() {
  return (
    <VStack space="2" py={{ base: '4', md: '8' }}>
      <VStack space="2" px={{ base: '4', md: '8' }}>
        <Badge
          variant="solid"
          bg="red.400"
          alignSelf="flex-start"
          _text={{
            color: 'coolGray.50',
            fontWeight: 'bold',
            fontSize: '8',
          }}
        >
          FEATURED SHOWS
        </Badge>
        <Text
          fontWeight="bold"
          _dark={{ color: 'coolGray.50' }}
          _light={{ color: 'coolGray.800' }}
          fontSize="md"
        >
          How to Become Better leader
        </Text>
      </VStack>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pl={{ base: '4', md: '8' }}
      >
        <HStack space="3">
          {album.map((item, idx) => {
            return (
              <Pressable borderRadius="md" key={idx}>
                <Image
                  width="80"
                  height="40"
                  rounded="lg"
                  alt="Banner Image"
                  source={item.imageUri}
                />
              </Pressable>
            );
          })}
        </HStack>
      </ScrollView>
    </VStack>
  );
}

function Categories() {
  return (
    <VStack py="8" space="4">
      <Text
        fontWeight="bold"
        _dark={{ color: 'coolGray.50' }}
        _light={{ color: 'coolGray.800' }}
        fontSize="lg"
        px={{ base: '4', md: '8' }}
      >
        Categories
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        px={{ base: '4', md: '8' }}
      >
        <HStack space="9">
          {categoriesIconsList.map((category: any, idx: any) => (
            <VStack
              space="2"
              alignItems="center"
              justifyContent="center"
              key={idx}
            >
              <IconButton
                rounded="full"
                p="3"
                justifyContent="center"
                alignItems="center"
                _dark={{
                  bg: 'coolGray.700',
                }}
                _light={{
                  bg: 'primary.100',
                }}
                _icon={{
                  size: '7',
                  _dark: {
                    color: 'warmGray.50',
                  },
                  _light: {
                    color: 'primary.900',
                  },
                }}
                icon={
                  <Icon name={category.iconName} as={category.iconLibrary} />
                }
              />
              <Text
                _dark={{ color: 'coolGray.200' }}
                _light={{ color: 'coolGray.800' }}
              >
                {category.name}
              </Text>
            </VStack>
          ))}
        </HStack>
      </ScrollView>
    </VStack>
  );
}
function Trending() {
  return (
    <VStack space="3" py={{ base: '4', md: '8' }}>
      <HStack justifyContent="space-between" px={{ base: '4', md: '8' }}>
        <Text
          fontSize="lg"
          fontWeight="bold"
          _dark={{ color: 'coolGray.50' }}
          _light={{ color: 'coolGray.800' }}
        >
          Trending
        </Text>
        <Link
          _text={{
            _dark: { color: 'primary.700' },
            _light: { color: 'primary.900' },
            textDecorationLine: 'none',
          }}
        >
          See All
        </Link>
      </HStack>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        px={{ base: '4', md: '8' }}
      >
        <HStack space="3">
          {trending.map((item, idx) => {
            return (
              <Pressable borderRadius="md" key={idx}>
                <VStack>
                  <Image
                    source={item.imageUri}
                    borderRadius="lg"
                    alt={item.name}
                    w={{ base: 24, md: 40 }}
                    h={{ base: 32, md: 40 }}
                  />
                  <Text
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.200' }}
                  >
                    {item.name}
                  </Text>
                </VStack>
              </Pressable>
            );
          })}
        </HStack>
      </ScrollView>
    </VStack>
  );
}
function FantasticFiction() {
  return (
    <VStack space="3" py={{ base: '4', md: '8' }}>
      <HStack justifyContent="space-between" px={{ base: '4', md: '8' }}>
        <Text
          fontWeight="bold"
          fontSize="lg"
          _dark={{ color: 'coolGray.50' }}
          _light={{ color: 'coolGray.800' }}
        >
          Fantastic Fiction
        </Text>
        <Link
          _text={{
            _dark: { color: 'primary.700' },
            _light: { color: 'primary.900' },
            textDecorationLine: 'none',
          }}
        >
          See All
        </Link>
      </HStack>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        px={{ base: '4', md: '8' }}
      >
        <HStack space="3">
          {trending.map((item, idx) => {
            return (
              <Pressable borderRadius="md" key={idx}>
                <VStack>
                  <Image
                    source={item.imageUri}
                    borderRadius="lg"
                    alt={item.name}
                    w={{ base: 24, md: 40 }}
                    h={{ base: 32, md: 40 }}
                  />
                  <Text
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.200' }}
                  >
                    {item.name}
                  </Text>
                </VStack>
              </Pressable>
            );
          })}
        </HStack>
      </ScrollView>
    </VStack>
  );
}
function BottomNavigationSheet() {
  return (
    <Box
      _light={{ bg: 'coolGray.50' }}
      _dark={{ bg: 'coolGray.700' }}
      alignSelf="center"
      borderTopRadius="2xl"
      height="85"
      position="absolute"
      px="10"
      pt="5"
      pb="6"
      bottom="0"
      left="0"
      right="0"
      safeAreaBottom
    >
      <HStack justifyContent="space-between">
        <Pressable
          onPress={() => {
            console.log('you have selected the pressed option');
          }}
        >
          <VStack alignItems="center">
            <Icon
              as={MaterialCommunityIcons}
              name="home"
              size="6"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
            />
            <Text
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
              fontSize="xs"
              fontWeight="medium"
            >
              Home
            </Text>
          </VStack>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log('you have selected the pressed option');
          }}
        >
          <VStack alignItems="center">
            <Icon
              as={MaterialCommunityIcons}
              name={'podcast'}
              size="6"
              _light={{ color: 'primary.900' }}
              _dark={{ color: 'primary.500' }}
            />
            <Text
              fontSize="xs"
              fontWeight="medium"
              _light={{ color: 'primary.900' }}
              _dark={{ color: 'primary.500' }}
            >
              Podcast
            </Text>
          </VStack>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log('you have selected the pressed option');
          }}
        >
          <VStack alignItems="center">
            <Icon
              as={MaterialIcons}
              name={'search'}
              size="6"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
            />
            <Text
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
              fontSize="xs"
              fontWeight="medium"
            >
              Search
            </Text>
          </VStack>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log('you have selected the pressed option');
          }}
        >
          <VStack alignItems="center">
            <Icon
              as={FontAwesome}
              name={'music'}
              size="6"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
            />
            <Text
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
              fontSize="xs"
              fontWeight="medium"
            >
              My library
            </Text>
          </VStack>
        </Pressable>
      </HStack>
    </Box>
  );
}
export default function (props: any) {
  return (
    <>
      <DashboardLayout title={'Podcasts'} displayScreenTitle={false}>
        <VStack
          _light={{
            bg: 'white',
            borderColor: 'coolGray.200',
          }}
          _dark={{
            bg: { base: 'coolGray.800', md: 'coolGray.900' },
            borderColor: 'coolGray.800',
          }}
          borderRadius={{ md: 'sm' }}
          mb={{ base: '85', md: '0' }}
        >
          <FeaturedShows />
          <Divider />
          <Categories />
          <Divider />
          <Trending />
          <Divider />
          <FantasticFiction />
        </VStack>
      </DashboardLayout>
      <Hidden from="md">
        <BottomNavigationSheet />
      </Hidden>
    </>
  );
}
