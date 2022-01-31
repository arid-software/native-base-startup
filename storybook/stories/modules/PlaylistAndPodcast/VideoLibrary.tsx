import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Pressable,
  IconButton,
  useBreakpointValue,
  FlatList,
  Input,
  Stack,
  Hidden,
} from 'native-base';
import {
  AntDesign,
  EvilIcons,
  Feather,
  FontAwesome,
  SimpleLineIcons,
} from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';
const list = [
  {
    imageUri: require('./components/podcast1.png'),
    name: 'Army of the Dead John | Cristine and Mark | Marvel studios',
    studio: 'Marvel Studios',
    views: '10M Views',
    month: '3 Months ago',
  },
  {
    imageUri: require('./components/podcast7.png'),
    name: 'KGF - Chapter 1 | Cristine and Mark | Marvel studios',
    studio: 'Marvel Studios',
    views: '10M Views',
    month: '3 Months ago',
  },
  {
    imageUri: require('./components/podcast6.jpeg'),
    name: 'Big Hero Six John | Cristine and Mark | Marvel studios',
    studio: 'Ticktok Studios',
    views: '10M Views',
    month: '3 Months ago',
  },
  {
    imageUri: require('./components/podcast5.jpeg'),
    name: 'Tick Tok Show | Dead John | Cristine and Mark | Marvel studios',
    studio: 'Marvel Studios',
    views: '10M Views',
    month: '3 Months ago',
  },
  {
    imageUri: require('./components/podcast4.png'),
    name: 'Army of the Dead John | Cristine and Mark | Marvel studios',
    studio: 'Marvel Studios',
    views: '10M Views',
    month: '3 Months ago',
  },
  {
    imageUri: require('./components/podcast3.png'),
    name: 'KGF - Chapter 1 | Cristine and Mark | Marvel studios',
    studio: 'Marvel Studios',
    views: '10M Views',
    month: '3 Months ago',
  },
  {
    imageUri: require('./components/podcast2.jpg'),
    name: 'Big Hero Six John | Cristine and Mark | Marvel studios',
    studio: 'Marvel Studios',
    views: '10M Views',
    month: '3 Months ago',
  },
  {
    imageUri: require('./components/podcast1.png'),
    name: 'Tick Tok Show | Dead John | Cristine and Mark | Marvel studios',
    studio: 'Marvel Studios',
    views: '10M Views',
    month: '3 Months ago',
  },
];
function VideoCard({ song }: any) {
  return (
    <Box>
      <Stack direction={{ base: 'row', md: 'column' }} space="2">
        <Box
          //TODO: Report this to core team.
          //@ts-ignore
          flexGrow={{ sm: '1' }}
          justifyContent="center"
          w={{ base: '48', md: '72' }}
          h={{ base: '24', sm: '32', md: '40' }}
        >
          <Image w="100%" h="100%" source={song.imageUri} alt="song-image" />
          <Hidden from="md">
            <IconButton
              justifyContent="center"
              alignItems="center"
              alignSelf="center"
              rounded="full"
              position="absolute"
              variant="unstyled"
              bg="coolGray.800:alpha.60"
              p="3"
              icon={
                <Icon
                  pl="1"
                  as={FontAwesome}
                  name="play"
                  color="coolGray.50"
                  size="xs"
                />
              }
            />
          </Hidden>
        </Box>
        <VStack
          flex={{ base: '1', md: '-1' }}
          w={{ md: '72' }}
          mt={{ sm: '4', md: '0' }}
        >
          <Text
            fontSize="sm"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
            fontWeight="medium"
            alignItems="center"
            numberOfLines={2}
          >
            {song.name}
          </Text>

          <HStack alignItems="center" space={1} mt="2">
            <Text
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
              fontWeight="medium"
            >
              {song.studio}
            </Text>
            <Icon
              as={AntDesign}
              name="checkcircle"
              size="3"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
            />
          </HStack>
          <Text
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
            fontWeight="medium"
            fontSize="xs"
            numberOfLines={1}
          >
            {song.views} | {song.month}
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
}
function Videos() {
  const noColumn = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
  });
  return (
    <Box p={{ md: '3' }} justifyContent="center" alignItems={{ md: 'center' }}>
      <FlatList
        mb={{ base: 0, md: 20 }}
        mt={{ base: '2' }}
        display={{ md: 'flex' }}
        horizontal={false}
        numColumns={noColumn}
        data={list}
        renderItem={({ item }) => (
          <Box mx="3" my="2">
            <VideoCard song={item} />
          </Box>
        )}
        key={noColumn}
        keyExtractor={(item, index) => 'key' + index}
      />
    </Box>
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
              as={SimpleLineIcons}
              name={'home'}
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
              as={AntDesign}
              name={'play'}
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
              Explore
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
              as={Feather}
              name={'folder'}
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
              Local
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
              as={Feather}
              name={'user'}
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
              Profile
            </Text>
          </VStack>
        </Pressable>
      </HStack>
    </Box>
  );
}
export default function VideoLibrary(props: any) {
  return (
    <>
      <DashboardLayout
        displaySidebar={false}
        title="Video Library"
        displayScreenTitle={false}
      >
        <Hidden till="md">
          <Input
            placeholder="Search here"
            pl="4"
            fontSize="sm"
            _light={{
              bg: 'white',
              borderColor: 'coolGray.200',
            }}
            _dark={{
              bg: { base: 'coolGray.800', md: 'coolGray.900' },
              borderColor: 'coolGray.800',
            }}
            InputRightElement={
              <IconButton
                borderLeftRadius="0"
                _dark={{ bg: 'primary.700' }}
                _light={{ bg: 'coolGray.300' }}
                icon={<Icon name="search" as={EvilIcons} />}
              />
            }
          />
        </Hidden>
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
          mb={{ base: '0', md: '0' }}
          mt={{ md: '2' }}
        >
          <Videos />
        </VStack>
      </DashboardLayout>
      <Hidden from="md">
        <BottomNavigationSheet />
      </Hidden>
    </>
  );
}
