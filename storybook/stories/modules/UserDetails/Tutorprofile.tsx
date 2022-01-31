import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Image,
  Pressable,
  IconButton,
  Center,
} from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Ionicons } from '@expo/vector-icons';

const videoList = [
  {
    imageUri: require('../../assets/houseplant.jpg'),
    title: 'Science and Evolution',
  },
  {
    imageUri: require('../../assets/light.jpeg'),
    title: 'Science and Evolution',
  },
  {
    imageUri: require('../../assets/living.jpg'),
    title: 'Science and Evolution',
  },
  {
    imageUri: require('../../assets/night-view.jpeg'),
    title: 'Science and Evolution',
  },
  {
    imageUri: require('../../assets/table.jpg'),
    title: 'Science and Evolution',
  },
  {
    imageUri: require('../../assets/table.jpg'),
    title: 'Science and Evolution',
  },
];

const stats = [
  {
    talkNumber: '46',
    text: 'Talks',
  },
  {
    talkNumber: '46K',
    text: 'Followers',
  },
  {
    talkNumber: '20M',
    text: 'Watch Min',
  },
];

function Video(props: any) {
  return (
    <Box
      height="48"
      width={{ base: '47%', sm: '32%', md: '32%' }}
      rounded="lg"
      mx="1"
      mb={{ base: '3', md: '4' }}
      _light={{ bg: 'coolGray.100' }}
      _dark={{ bg: 'customGray' }}
    >
      <Image
        width={{ base: '100%', sm: '100%', md: '100%' }}
        height={40}
        rounded={4}
        source={props.item.imageUri}
        alt="alternate text"
      />
      <VStack
        height="48"
        width="100%"
        position="absolute"
        alignItems="center"
        justifyContent="center"
      >
        <Center bg="#22222299" p="1" rounded="full">
          <IconButton
            variant="unstyled"
            icon={
              <Icon as={Ionicons} name="play" color="coolGray.50" size="xs" />
            }
            onPress={() => {}}
          />
        </Center>
      </VStack>

      <Text
        mt="2"
        fontSize="xs"
        fontWeight="semibold"
        _light={{ color: 'coolGray.800' }}
        _dark={{ color: 'coolGray.50' }}
        textAlign="center"
      >
        {props.item.title}
      </Text>
    </Box>
  );
}

const VideoTab = () => {
  const [tabName, setTabName] = React.useState('Videos');

  return (
    <>
      <Box
        mt="4"
        shadow="1"
        rounded="sm"
        px={{ base: 2, md: 3 }}
        _light={{ bg: 'white' }}
        _dark={{ bg: 'customGray' }}
        width={{ base: '100%', md: '96%' }}
      >
        <HStack justifyContent="space-between" px={{ base: 8, md: 10 }}>
          <Pressable
            p="2"
            onPress={() => {
              setTabName('Videos');
            }}
            borderBottomWidth={'3px'}
            px={{ base: 0, md: 0 }}
            _light={{
              borderBottomColor:
                tabName == 'Videos' ? 'primary.900' : 'coolGray.50',
            }}
            _dark={{
              borderBottomColor:
                tabName == 'Videos' ? 'primary.700' : 'customGray',
            }}
          >
            <Text
              fontWeight="medium"
              _light={{
                color: tabName == 'Videos' ? 'coolGray.800' : 'coolGray.400',
              }}
              _dark={{
                color: tabName == 'Videos' ? 'coolGray.50' : 'coolGray.400',
              }}
            >
              Videos
            </Text>
          </Pressable>
          <Pressable
            p="2"
            onPress={() => {
              setTabName('Documents');
            }}
            borderBottomWidth={'3px'}
            _light={{
              borderBottomColor:
                tabName == 'Documents' ? 'primary.900' : 'coolGray.50',
            }}
            _dark={{
              borderBottomColor:
                tabName == 'Documents' ? 'primary.700' : 'customGray',
            }}
          >
            <Text
              fontWeight="medium"
              _light={{
                color: tabName == 'Documents' ? 'coolGray.800' : 'coolGray.400',
              }}
              _dark={{
                color: tabName == 'Documents' ? 'coolGray.50' : 'coolGray.400',
              }}
            >
              Documents
            </Text>
          </Pressable>
          <Pressable
            p="2"
            onPress={() => {
              setTabName('About');
            }}
            borderBottomWidth={'3px'}
            _light={{
              borderBottomColor:
                tabName == 'About' ? 'primary.900' : 'coolGray.50',
            }}
            _dark={{
              borderBottomColor:
                tabName == 'About' ? 'primary.700' : 'customGray',
            }}
          >
            <Text
              fontWeight="medium"
              _light={{
                color: tabName == 'About' ? 'coolGray.800' : 'coolGray.400',
              }}
              _dark={{
                color: tabName == 'About' ? 'coolGray.50' : 'coolGray.400',
              }}
            >
              About
            </Text>
          </Pressable>
        </HStack>
      </Box>
      {tabName == 'Videos' ? (
        <VStack px="4" my="3">
          <HStack flexWrap="wrap" alignItems="center" justifyContent="center">
            {videoList.map((video: any, index: number) => (
              <React.Fragment key={index}>
                <Video item={video} />
              </React.Fragment>
            ))}
          </HStack>
        </VStack>
      ) : null}
      {tabName == 'Documents' ? (
        <VStack px="4" my="3">
          <HStack flexWrap="wrap" alignItems="center" justifyContent="center">
            {videoList.map((video: any, index: number) => (
              <React.Fragment key={index}>
                <Video item={video} />
              </React.Fragment>
            ))}
          </HStack>
        </VStack>
      ) : null}
      {tabName == 'About' ? (
        <VStack px="4" my="3">
          <HStack flexWrap="wrap" alignItems="center" justifyContent="center">
            {videoList.map((video: any, index: number) => (
              <React.Fragment key={index}>
                <Video item={video} />
              </React.Fragment>
            ))}
          </HStack>
        </VStack>
      ) : null}
    </>
  );
};

export default function (props: any) {
  return (
    <>
      <DashboardLayout title="Tutor Profile">
        <VStack
          px={{ base: 0, md: 8, lg: 16 }}
          py={{ base: 4, md: 8 }}
          borderRadius={{ md: '8' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'white' },
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { md: 'coolGray.900', base: 'coolGray.800' },
          }}
          borderWidth={{ md: '1' }}
          borderBottomWidth="1"
          alignItems="center"
          safeAreaBottom
        >
          <Avatar
            h="16"
            w="16"
            source={{
              uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
            }}
          >
            <Avatar.Badge bg="green.700" bottom={{ base: '4px' }} />
          </Avatar>
          <Text
            mt="2"
            fontSize="sm"
            fontWeight="bold"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
          >
            Cristinan John
          </Text>
          <Text
            mt="0.5"
            fontSize="xs"
            fontWeight="medium"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.400' }}
          >
            Canada
          </Text>
          <Text
            mt={{ base: 3, md: 0 }}
            fontSize="sm"
            textAlign="center"
            px={{ base: 6, md: 24, lg: 32, xl: 48 }}
            _light={{ color: 'coolGray.700' }}
            _dark={{ color: 'coolGray.400' }}
          >
            A user profile is a collection of settings and info with a user. It
            contains critical information that is used identify an individual,
            such as their name, age etc.
          </Text>
          <HStack
            width="100%"
            mt="6"
            flex={1}
            justifyContent="space-between"
            px={{ lg: 32, base: 16 }}
          >
            {stats.map((item: any, index: number) => {
              return (
                <VStack alignItems="center" key={index}>
                  <Text
                    fontSize="18"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                    letterSpacing="0.29"
                  >
                    {item.talkNumber}
                  </Text>
                  <Text
                    fontSize="12"
                    fontWeight="medium"
                    _light={{ color: 'coolGray.500' }}
                    _dark={{ color: 'coolGray.300' }}
                    letterSpacing="0.2"
                  >
                    {item.text}
                  </Text>
                </VStack>
              );
            })}
          </HStack>
          <VideoTab />
        </VStack>
      </DashboardLayout>
    </>
  );
}
