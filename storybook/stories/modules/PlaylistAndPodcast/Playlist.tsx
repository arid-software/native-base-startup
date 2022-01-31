import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  StatusBar,
  Avatar,
  Image,
  Actionsheet,
  Pressable,
  Divider,
  useDisclose,
  ScrollView,
  useColorMode,
  IconButton,
  Hidden,
  Menu,
  SearchIcon,
  Slider,
  Heading,
  Tooltip,
} from 'native-base';
import { SceneMap } from 'react-native-tab-view';
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import TabView from './components/TabView';

const songs = [
  {
    songName: 'Counting stars',
    artist: 'One republic',
    imageUri: require('./components/song1.png'),
    duration: '4:30',
  },

  {
    songName: 'Work',
    artist: 'One republic',
    imageUri: require('./components/song3.png'),
    duration: '3:48',
  },
  {
    songName: 'Faded',
    artist: 'Alan Walker',
    imageUri: require('./components/song4.png'),
    duration: '2:50',
  },
  {
    songName: 'Secrets',
    artist: 'One republic',
    imageUri: require('./components/song5.png'),
    duration: '3:36',
  },
  {
    songName: 'Stars',
    artist: 'Duncan Laurence',
    imageUri: require('./components/song6.png'),
    duration: '4:10',
  },
  {
    songName: 'Perfect',
    artist: 'Ed Sheeran',
    imageUri: require('./components/song7.png'),
    duration: '3:20',
  },
  {
    songName: 'Rescue Me',
    artist: 'One republic',
    imageUri: require('./components/song8.jpeg'),
    duration: '3:30',
  },
  {
    songName: 'Someone you loved',
    artist: 'Lewis Capaldi',
    imageUri: require('./components/song2.png'),
    duration: '2:30',
  },
  {
    songName: 'Apologize',
    artist: 'One republic',
    imageUri: require('./components/song2.png'),
    duration: '3:27',
  },
  {
    songName: 'Drivers license',
    artist: 'Olivia Rodrigo',
    imageUri: require('./components/song3.png'),
    duration: '5:30',
  },
];

const tabRoutes = [
  { key: 'first', title: 'All Songs' },
  { key: 'second', title: 'Favourites' },
  { key: 'third', title: 'Albums' },
  { key: 'fourth', title: 'Workouts' },
];

function DesktopHeader() {
  const { colorMode } = useColorMode();
  return (
    <Box
      px={{ md: '8' }}
      pt={{ md: '3' }}
      pb={{ md: '3' }}
      borderBottomWidth={{ md: '1' }}
      _dark={{ bg: 'coolGray.900', borderColor: 'coolGray.700' }}
      _light={{
        bg: { md: 'white' },
        borderColor: 'coolGray.200',
      }}
    >
      {/* Desktop header */}
      <Hidden till="md">
        <HStack alignItems="center" justifyContent="space-between">
          <HStack space="8" alignItems="center">
            {colorMode == 'light' ? (
              <Image
                h="10"
                w="56"
                alt="NativeBase Startup+"
                resizeMode="contain"
                source={require('../../assets/header_logo_light.png')}
              />
            ) : (
              <Image
                h="10"
                w="56"
                alt="NativeBase Startup+"
                resizeMode="contain"
                source={require('../../assets/header_logo_dark.png')}
              />
            )}
          </HStack>
          <HStack space="8" alignItems="center">
            <Tooltip label="search" openDelay={500}>
              <IconButton
                variant="ghost"
                colorScheme="light"
                icon={<SearchIcon size="6" color="coolGray.400" />}
              />
            </Tooltip>
            <Tooltip label="notifications" openDelay={500}>
              <IconButton
                variant="ghost"
                colorScheme="light"
                icon={
                  <Icon
                    size="6"
                    name="bell"
                    as={FontAwesome}
                    color="coolGray.400"
                  />
                }
              />
            </Tooltip>
            <Menu
              closeOnSelect={false}
              w="190"
              onOpen={() => console.log('opened')}
              onClose={() => console.log('closed')}
              trigger={(triggerProps) => {
                return (
                  <Pressable {...triggerProps}>
                    <Avatar
                      w="8"
                      h="8"
                      borderWidth="2"
                      _dark={{ borderColor: 'primary.700' }}
                      source={{
                        uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                      }}
                    />
                  </Pressable>
                );
              }}
            >
              <Menu.Group title="Profile">
                <Menu.Item>Account</Menu.Item>
                <Menu.Item>Billing</Menu.Item>
                <Menu.Item>Security</Menu.Item>
              </Menu.Group>
              <Divider mt="3" w="100%" />
              <Menu.Group title="Shortcuts">
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item>Logout</Menu.Item>
              </Menu.Group>
            </Menu>
          </HStack>
        </HStack>
      </Hidden>
    </Box>
  );
}
function MobileHeader(props: any) {
  return (
    <>
      <Box alignItems="flex-start">
        <Image
          h="56"
          w="100%"
          resizeMode="cover"
          alt="Banner Image"
          source={require('./components/banner-image.png')}
        />
      </Box>
      <Box px="4" pt="9" pb="5" position="absolute" w="100%">
        <HStack justifyContent="space-between">
          <HStack space="2" alignItems="center">
            <IconButton
              onPress={() => {}}
              icon={
                <Icon
                  size="6"
                  as={AntDesign}
                  name={'arrowleft'}
                  color="coolGray.50"
                />
              }
            />
            <Text color="coolGray.50" fontSize="lg">
              Playlist
            </Text>
          </HStack>
          <IconButton icon={<SearchIcon color="coolGray.50" size="5" />} />
        </HStack>
      </Box>
    </>
  );
}

function SongCard({ song }: any) {
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <HStack alignItems="center" space={{ base: 3, md: 6 }}>
        <Image
          source={song.imageUri}
          alt="Song cover"
          boxSize="16"
          rounded="md"
        />
        <VStack>
          <Text fontSize="md" bold>
            {song.songName}
          </Text>
          <Text
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
          >
            {song.artist}
          </Text>
        </VStack>
      </HStack>
      <HStack alignItems="center">
        <Text color="coolGray.500">{song.duration}</Text>
        <Tooltip label="More Options" openDelay={500}>
          <IconButton
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="dots-vertical"
                size="5"
                color="coolGray.500"
              />
            }
          />
        </Tooltip>
      </HStack>
    </HStack>
  );
}

function FullScreenSong(props: any) {
  return (
    <Actionsheet
      isOpen={props.isOpen}
      onClose={props.onClose}
      hideDragIndicator
    >
      <Actionsheet.Content p="10" maxH="680px">
        <VStack space="8" w="100%">
          <Box justifyContent="center" alignItems="center" size="64" mx="auto">
            <Image size="64" src={require('./components/song5.png')} />
          </Box>
          <VStack space="1.5">
            <Heading textAlign="center">Escape from reality</Heading>
            <Text textAlign="center">One republic</Text>
          </VStack>
          <VStack>
            <Slider defaultValue={65}>
              <Slider.Track rounded="0">
                <Slider.FilledTrack
                  bg="primary.900"
                  _dark={{ bg: 'primary.700' }}
                />
              </Slider.Track>
              <Slider.Thumb bg="primary.900" _dark={{ bg: 'primary.700' }} />
            </Slider>
            <HStack justifyContent="space-between">
              <Text>1.25</Text>
              <Text>3.25</Text>
            </HStack>
          </VStack>
          <HStack alignItems="center" justifyContent="center">
            <Tooltip label="Previous song" openDelay={500}>
              <IconButton
                variant="unstyled"
                icon={
                  <Icon
                    name="stepbackward"
                    as={AntDesign}
                    size="6"
                    _dark={{ color: 'coolGray.400' }}
                    _light={{ color: 'coolGray.700' }}
                  />
                }
              />
            </Tooltip>
            <Tooltip label="Pause/Play" openDelay={500}>
              <IconButton
                variant="solid"
                bg="primary.900"
                _dark={{ bg: 'primary.700', _pressed: { bg: 'primary.500' } }}
                rounded="full"
                _icon={{ color: 'white', size: '6' }}
                icon={<Icon name="pause-sharp" as={Ionicons} />}
              />
            </Tooltip>
            <Tooltip label="Next Song" openDelay={500}>
              <IconButton
                variant="unstyled"
                _icon={{
                  _dark: { color: 'coolGray.400' },
                  _light: { color: 'coolGray.700' },
                  size: '6',
                }}
                icon={<Icon name="stepforward" as={AntDesign} />}
              />
            </Tooltip>
          </HStack>
          <HStack justifyContent="space-between">
            <Tooltip label="Songs list" openDelay={500}>
              <IconButton
                variant="ghost"
                _icon={{
                  _dark: { color: 'coolGray.400' },
                  _light: { color: 'coolGray.700' },
                  size: '6',
                }}
                icon={<Icon as={SimpleLineIcons} name="list" />}
              />
            </Tooltip>
            <Tooltip label="Add to favourites" openDelay={500}>
              <IconButton
                variant="ghost"
                _icon={{
                  _dark: { color: 'coolGray.400' },
                  _light: { color: 'coolGray.700' },
                  size: '6',
                }}
                icon={<Icon name="heart" as={FontAwesome5} />}
              />
            </Tooltip>
            <Tooltip label="Shuffle" openDelay={500}>
              <IconButton
                variant="ghost"
                _icon={{
                  _dark: { color: 'coolGray.400' },
                  _light: { color: 'coolGray.700' },
                  size: '7',
                }}
                icon={<Icon name="shuffle" as={Ionicons} />}
              />
            </Tooltip>
            <Tooltip label="More" openDelay={500}>
              <IconButton
                variant="ghost"
                _icon={{
                  _dark: { color: 'coolGray.400' },
                  _light: { color: 'coolGray.700' },
                  size: '6',
                }}
                icon={<Icon name="dots-three-horizontal" as={Entypo} />}
              />
            </Tooltip>
          </HStack>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
}
function DesktopMinimizedSong() {
  return (
    <Box
      shadow="9"
      _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
      _light={{ bg: 'white' }}
    >
      <Slider defaultValue={65} mt="-3" zIndex={1}>
        <Slider.Track rounded="0" bg="transparent">
          <Slider.FilledTrack bg="primary.900" _dark={{ bg: 'primary.700' }} />
        </Slider.Track>
        <Slider.Thumb bg="primary.900" _dark={{ bg: 'primary.700' }} />
      </Slider>
      <HStack
        space="3"
        alignItems="center"
        px="8"
        pb="3"
        justifyContent="space-between"
      >
        <HStack alignItems="center" space="6">
          <Image
            boxSize="10"
            rounded="md"
            source={{
              uri: 'https://i1.sndcdn.com/artworks-000040814493-eu3kr3-t500x500.jpg',
            }}
          />
          <VStack>
            <Text bold fontSize="md">
              Counting Stars
            </Text>
            <Text color="coolGray.500" _dark={{ color: 'coolGray.400' }}>
              One Republic
            </Text>
          </VStack>
        </HStack>
        <HStack alignItems="center" space="7">
          <Tooltip label="Add to favourites" placement="top">
            <IconButton
              variant="ghost"
              icon={
                <Icon
                  name="heart"
                  as={FontAwesome5}
                  size="5"
                  _dark={{ color: 'coolGray.400' }}
                  _light={{ color: 'coolGray.700' }}
                />
              }
            />
          </Tooltip>
          <HStack alignItems="center">
            <Tooltip label="Previous song" placement="top">
              <IconButton
                variant="unstyled"
                icon={
                  <Icon
                    name="stepbackward"
                    as={AntDesign}
                    size="5"
                    _dark={{ color: 'coolGray.400' }}
                    _light={{ color: 'coolGray.700' }}
                  />
                }
              />
            </Tooltip>
            <Tooltip label="Pause/play" placement="top">
              <IconButton
                variant="solid"
                _light={{ bg: 'primary.900' }}
                _dark={{ bg: 'primary.700', _pressed: { bg: 'primary.500' } }}
                rounded="full"
                _icon={{ color: 'white' }}
                icon={<Icon name="pause-sharp" as={Ionicons} size="6" />}
              />
            </Tooltip>
            <Tooltip label="Next song" placement="top">
              <IconButton
                variant="unstyled"
                icon={
                  <Icon
                    name="stepforward"
                    as={AntDesign}
                    size="5"
                    _dark={{ color: 'coolGray.400' }}
                    _light={{ color: 'coolGray.700' }}
                  />
                }
              />
            </Tooltip>
          </HStack>
          <Tooltip label="Shuffle" placement="top">
            <IconButton
              variant="ghost"
              icon={
                <Icon
                  name="shuffle"
                  as={Ionicons}
                  size="6"
                  _dark={{ color: 'coolGray.400' }}
                  _light={{ color: 'coolGray.700' }}
                />
              }
            />
          </Tooltip>
        </HStack>
        <HStack alignItems="center" space="3">
          <Tooltip label="Songs list" placement="top">
            <IconButton
              variant="ghost"
              icon={
                <Icon
                  as={SimpleLineIcons}
                  name="list"
                  size="6"
                  _dark={{ color: 'coolGray.400' }}
                  _light={{ color: 'coolGray.700' }}
                />
              }
            />
          </Tooltip>
          <Tooltip label="More Options" placement="top">
            <IconButton
              icon={
                <Icon
                  as={Entypo}
                  name="dots-three-horizontal"
                  size="6"
                  _dark={{ color: 'coolGray.400' }}
                  _light={{ color: 'coolGray.700' }}
                />
              }
            />
          </Tooltip>
        </HStack>
      </HStack>
    </Box>
  );
}

function MobileMinimizedSong() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Pressable
        onPress={onOpen}
        shadow="2"
        _light={{ bg: 'white' }}
        _dark={{ bg: 'coolGray.700' }}
      >
        <Slider defaultValue={65} mt="-3">
          <Slider.Track rounded="0" bg="transparent">
            <Slider.FilledTrack
              bg="primary.900"
              _dark={{ bg: 'primary.700' }}
            />
          </Slider.Track>
          <Slider.Thumb bg="primary.900" _dark={{ bg: 'primary.700' }} />
        </Slider>

        <Box px="4" pb="3">
          <HStack justifyContent="space-between" alignItems="center">
            <HStack space="2" alignItems="center">
              <Image
                boxSize="12"
                rounded="full"
                source={{
                  uri: 'https://i1.sndcdn.com/artworks-000040814493-eu3kr3-t500x500.jpg',
                }}
                alt="song-banner"
              />
              <VStack>
                <Text bold fontSize="md">
                  Counting Stars
                </Text>
                <Text color="coolGray.500" _dark={{ color: 'coolGray.400' }}>
                  One Republic
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems="center">
              <IconButton
                variant="unstyled"
                icon={<Icon name="stepbackward" as={AntDesign} size="5" />}
              />
              <IconButton
                variant="solid"
                bg="primary.900"
                _dark={{ bg: 'primary.700', _pressed: { bg: 'primary.500' } }}
                rounded="full"
                _icon={{ color: 'white' }}
                icon={<Icon name="pause-sharp" as={Ionicons} size="4" />}
              />
              <IconButton
                variant="unstyled"
                icon={<Icon name="stepforward" as={AntDesign} size="5" />}
              />
              <IconButton
                variant="unstyled"
                icon={<Icon name="heart" as={FontAwesome5} size="5" />}
              />
            </HStack>
          </HStack>
        </Box>
      </Pressable>
      <FullScreenSong isOpen={isOpen} onClose={onClose} />
    </>
  );
}
function BackPageHeader() {
  return (
    <HStack mt="8" mb="4" space="2" alignItems="center">
      <Pressable>
        <Icon
          size="6"
          as={AntDesign}
          name={'arrowleft'}
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
        />
      </Pressable>

      <Text
        fontSize="lg"
        _dark={{ color: 'coolGray.50' }}
        _light={{ color: 'coolGray.800' }}
      >
        Playlist
      </Text>
    </HStack>
  );
}
function DesktopBanner() {
  return (
    <Box zIndex={-1}>
      <Image
        roundedTop="md"
        h="56"
        w="100%"
        resizeMode="cover"
        alt="Banner Image"
        source={require('./components/banner-image.png')}
      />
    </Box>
  );
}

const SongsList = (props1: any) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ flex: 1 }}
    >
      <VStack
        space="2"
        px={{ base: '4', md: '8' }}
        py="4"
        _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
        _light={{ bg: 'white' }}
      >
        {songs.map((song: any, index: any) => {
          return (
            <VStack space="1" key={index}>
              <SongCard song={song} />
              {index !== songs.length - 1 && <Divider />}
            </VStack>
          );
        })}
      </VStack>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  first: SongsList,
  second: SongsList,
  third: SongsList,
  fourth: SongsList,
});
export default function (props: any) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{ bg: 'primary.900' }}
        _dark={{ bg: 'coolGray.800' }}
      />
      <VStack
        flex={1}
        _light={{ bg: 'primary.50' }}
        _dark={{ bg: { base: 'coolGray.900', md: 'coolGray.900' } }}
      >
        <Box
          flex={1}
          flexDirection={{ base: 'column', md: 'row' }}
          _light={{
            borderTopColor: 'coolGray.200',
          }}
          _dark={{
            bg: 'coolGray.700',
            borderTopColor: 'coolGray.700',
          }}
        >
          <VStack flex={1}>
            <Hidden till="md">
              <DesktopHeader />
            </Hidden>
            <Hidden from="md">
              <>
                <Box
                  _light={{ bg: 'white' }}
                  _dark={{ bg: 'coolGray.700' }}
                  flex="1"
                >
                  <MobileHeader />
                  <TabView renderScene={renderScene} routes={tabRoutes} />
                </Box>
                <MobileMinimizedSong />
              </>
            </Hidden>
            <Hidden till="md">
              <>
                <VStack maxW="1016px" flex={1} width="100%" mx="auto">
                  <BackPageHeader />
                  <DesktopBanner />
                  <TabView renderScene={renderScene} routes={tabRoutes} />
                </VStack>
                <DesktopMinimizedSong />
              </>
            </Hidden>
          </VStack>
        </Box>
      </VStack>
    </>
  );
}
