import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  useColorMode,
  IconButton,
  ScrollView,
  Pressable,
  Center,
  Link,
  Hidden,
} from 'native-base';
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import IconChat from './components/IconChat';
import IconHome from './components/IconHome';
import IconIgtv from './components/IconIgtv';
import IconSearch from './components/IconSearch';
import IconProfile from './components/IconProfile';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Carousel } from './components/Carousel';

const profiles = [
  {
    profileImageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    userName: 'Jenny Wilson',
    userPlace: 'Jakarta, Capital City',
    timeStamp: '3 hours ago',
    feedImageCaption: 'First Day At Office. Excited!',
    feedImageUrl: 'https://wallpaperaccess.com/full/317501.jpg',
    imageResLight: require('./components/lightMode.jpg'),
    imageResDark: require('./components/darkMode.jpeg'),
    likeIconName: 'hearto',
    commentIconName: 'message-circle',
    topIconName: 'more-vertical',
    shareIconName: 'paper-plane-outline',
    likesNumber: '256 likes',
    likedBy: 'Liked by Jenny_31',
    commentPersonName: 'Jerome Watson',
    commentText: 'It was good hair day thanks to @covelhair!',
    numberOfComment: 'View all 60 comments ',
    commentOne: 'tristarwellness',
    commentTwo: 'Pretty',
  },
  {
    profileImageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    userName: 'Kristin Watson',
    userPlace: 'Toronto, CA',
    timeStamp: '5 hours ago',
    feedImageCaption: 'Good Hair!',
    feedImageUrl: 'https://wallpaperaccess.com/full/317501.jpg',
    imageResLight: require('./components/lightMode.jpg'),
    imageResDark: require('./components/darkMode.jpeg'),
    likeIconName: 'hearto',
    topIconName: 'more-vertical',
    commentIconName: 'message-circle',
    shareIconName: 'paper-plane-outline',
    likesNumber: '256 likes',
    likedBy: 'Liked by Jenny_31',
    commentPersonName: 'Jerome Watson',
    commentText: 'It was good hair day thanks to @covelhair!',
    numberOfComment: 'View all 60 comments ',
    commentOne: 'tristarwellness',
    commentTwo: 'Pretty',
  },
];

const storyImage = [
  {
    storyImageUrl: require('../../assets/women.jpg'),
    stroyText: 'Your Story',
  },
  {
    storyImageUrl: require('../../assets/young-girl.jpg'),
    stroyText: 'Kristin09',
  },
  {
    storyImageUrl: require('../../assets/smiling.jpg'),
    stroyText: 'Kristin09',
  },
  {
    storyImageUrl: require('../../assets/nice-girl.jpg'),
    stroyText: 'Kristin09',
  },
  {
    storyImageUrl: require('../../assets/handsome.jpg'),
    stroyText: 'Kristin09',
  },
  {
    storyImageUrl: require('../../assets/man.jpg'),
    stroyText: 'Jerome1',
  },
  {
    storyImageUrl: require('../../assets/online-girl.jpeg'),
    stroyText: 'Jenny_31',
  },
  {
    storyImageUrl: require('../../assets/women.jpg'),
    stroyText: 'Kristin_9',
  },
  {
    storyImageUrl: require('../../assets/young-girl.jpg'),
    stroyText: 'Jerome_1',
  },
  {
    storyImageUrl: require('../../assets/nice-girl.jpg'),
    stroyText: 'Jerome_1',
  },
  {
    storyImageUrl: require('../../assets/women.jpg'),
    stroyText: 'Jerome_1',
  },
  {
    storyImageUrl: require('../../assets/nice-girl.jpg'),
    stroyText: 'Jerome_1',
  },
];

function Stories(props: any) {
  return (
    <HStack
      width="100%"
      py={{ base: 3, md: 4 }}
      borderRadius={{ md: '8' }}
      _light={{
        borderColor: 'coolGray.200',
        bg: { base: 'coolGray.50' },
      }}
      _dark={{
        borderColor: 'coolGray.700',
        bg: { md: 'coolGray.900', base: 'coolGray.800' },
      }}
      borderWidth={{ md: '1' }}
      borderBottomWidth={{ base: '1' }}
      space={{ base: 1 }}
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {storyImage.map((item, index) => {
          return (
            <HStack
              key={index}
              px={{ base: 3, md: 4 }}
              flex={1}
              justifyContent="space-evenly"
            >
              <VStack space={1} alignItems="center">
                {item.stroyText == 'Your Story' ? (
                  <Pressable>
                    <Avatar width="16" height="16" source={item.storyImageUrl}>
                      <Avatar.Badge
                        p={2}
                        _light={{ borderColor: 'white', bg: 'primary.900' }}
                        _dark={{ borderColor: 'white', bg: 'primary.700' }}
                      >
                        <Pressable
                          onPress={() => {
                            console.log('press here to add your story');
                          }}
                        >
                          <Center top={{ base: '-1px', md: '-8px' }}>
                            <Icon
                              as={Entypo}
                              name={'plus'}
                              size="4"
                              color="coolGray.50"
                            />
                          </Center>
                        </Pressable>
                      </Avatar.Badge>
                    </Avatar>
                  </Pressable>
                ) : (
                  <Pressable>
                    <Avatar
                      width="16"
                      height="16"
                      borderWidth="2"
                      source={item.storyImageUrl}
                      _dark={{
                        borderColor: { base: 'primary.500', md: 'primary.500' },
                      }}
                      _light={{
                        borderColor: { base: 'primary.700', md: 'primary.700' },
                      }}
                    />
                  </Pressable>
                )}
                <Text
                  fontSize="xs"
                  fontWeight="normal"
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                >
                  {item.stroyText}
                </Text>
              </VStack>
            </HStack>
          );
        })}
      </ScrollView>
    </HStack>
  );
}
const CarouselLayout = () => {
  return (
    <Box
      py={{ base: 0, md: 0 }}
      bg={{ base: 'transparent', md: 'transparent' }}
    >
      <Carousel
        images={[
          require('./components/lightMode.jpg'),
          require('./components/darkMode.jpeg'),
          require('./components/lightMode.jpg'),
          require('./components/darkMode.jpeg'),
        ]}
        height="72"
      />
    </Box>
  );
};

function Post(props: any) {
  return (
    <>
      <VStack
        key={props.index}
        py={{ base: 4, md: 4 }}
        mt={{ md: 3 }}
        borderRadius={{ md: '8' }}
        _light={{
          borderColor: 'coolGray.200',
          bg: { base: 'coolGray.50', md: 'white' },
        }}
        _dark={{
          borderColor: 'coolGray.700',
          bg: { md: 'coolGray.900', base: 'coolGray.800' },
        }}
        borderWidth={{ md: 1 }}
        space={4}
      >
        <HStack justifyContent="space-between">
          <HStack space={2} alignItems="center" px="4">
            <Avatar
              borderWidth="1"
              _light={{ borderColor: 'primary.900' }}
              _dark={{ borderColor: 'primary.700' }}
              source={{
                uri: props.item.profileImageUrl,
              }}
              width="8"
              height="8"
            />
            <VStack>
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontSize="sm"
                fontWeight="semibold"
              >
                {props.item.userName}
              </Text>
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
              >
                {props.item.userPlace}
              </Text>
            </VStack>
          </HStack>
          <IconButton
            variant="unstyled"
            icon={
              <Icon
                size="6"
                as={Feather}
                name={props.item.topIconName}
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              />
            }
            onPress={() => {
              console.log('here you will have more options regarding the post');
            }}
          />
        </HStack>
        <CarouselLayout />
        <HStack justifyContent="space-between" px="4">
          <HStack alignItems="center" space={3}>
            <IconButton
              variant="unstyled"
              p="0"
              icon={
                <Icon
                  size="6"
                  as={AntDesign}
                  name={props.item.likeIconName}
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                />
              }
              onPress={() => {
                console.log('hello');
              }}
            />
            {props.item.commentIconName == 'message-circle' ? (
              <IconButton
                variant="unstyled"
                p="0"
                icon={
                  <Icon
                    size="6"
                    as={Feather}
                    name={props.item.commentIconName}
                    _light={{ color: 'coolGray.500' }}
                    _dark={{ color: 'coolGray.400' }}
                  />
                }
                onPress={() => {
                  console.log('button pressed');
                }}
              />
            ) : null}
            {props.item.shareIconName == 'paper-plane-outline' ? (
              <IconButton
                variant="unstyled"
                p="0"
                icon={
                  <Icon
                    size="6"
                    as={Ionicons}
                    name={props.item.shareIconName}
                    _light={{ color: 'coolGray.600' }}
                    _dark={{ color: 'coolGray.400' }}
                  />
                }
                onPress={() => {
                  console.log('button pressed');
                }}
              />
            ) : null}
          </HStack>
          <Text
            fontSize="xs"
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.300' }}
          >
            {props.item.timeStamp}
          </Text>
        </HStack>
        <VStack px="4" space={1}>
          <HStack alignItems="center" space={2}>
            <Link
              href="https://nativebase.io"
              _text={{
                textDecorationLine: 'none',
                fontSize: 'xs',
                fontWeight: 'medium',
                _light: { color: 'coolGray.800' },
                _dark: { color: 'coolGray.50' },
              }}
            >
              {props.item.likesNumber}
            </Link>

            <Link
              href="https://nativebase.io"
              _text={{
                textDecorationLine: 'none',
                fontSize: 'xs',
                fontWeight: 'medium',
                _light: { color: 'coolGray.800' },
                _dark: { color: 'coolGray.50' },
              }}
            >
              {props.item.likedBy}
            </Link>
          </HStack>
          <HStack alignItems="center" space={2}>
            <Link
              href="https://nativebase.io"
              _text={{
                textDecorationLine: 'none',
                fontSize: 'xs',
                fontWeight: 'normal',
                _light: { color: 'coolGray.800' },
                _dark: { color: 'coolGray.50' },
              }}
            >
              {props.item.commentPersonName}
            </Link>
            <Text
              fontSize="xs"
              fontWeight="normal"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.400' }}
            >
              {props.item.commentText}
            </Text>
          </HStack>
          <Pressable
            onPress={() => {
              console.log('hello');
            }}
          >
            <Text
              fontSize="sm"
              fontWeight="medium"
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
            >
              {props.item.numberOfComment}
            </Text>
          </Pressable>
          <HStack space={1} alignItems="center">
            <Text
              fontSize="xs"
              fontWeight="normal"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              {props.item.commentOne}
            </Text>
            <Text
              fontSize="xs"
              fontWeight="normal"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.400' }}
            >
              {props.item.commentTwo}
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
}

function SidePanel() {
  const SidePannelList = [
    {
      image: require('../../assets/women.jpg'),
      name: 'Jerome_01',
      userName: 'New to Instagram',
    },
    {
      image: require('../../assets/online-girl.jpeg'),
      name: 'yourstoryboard.in',
      userName: 'Followed by the babayag +6 others',
    },
    {
      image: require('../../assets/women.jpg'),
      name: 'Nativebase.io',
      userName: 'New to Instagram',
    },
    {
      image: require('../../assets/nice-girl.jpg'),
      name: 'Ritu_Rita.009',
      userName: 'New to Instagram',
    },
    {
      image: require('../../assets/women.jpg'),
      name: 'shruthi.patel',
      userName: 'New to Instagram',
    },
  ];
  return (
    <VStack
      w="340px"
      space={6}
      px={{ md: 4 }}
      borderRadius={{ md: 8 }}
      py={{ md: 4 }}
    >
      <HStack space={3} alignItems="center">
        <Avatar size="12" source={require('../../assets/joker.png')} />
        <VStack>
          <Text fontSize="sm" fontWeight="semibold">
            Sara26
          </Text>
          <Text
            fontSize="sm"
            fontWeight="semibold"
            _light={{ color: 'coolGray.400' }}
            _dark={{ color: 'coolGray.400' }}
          >
            Sarah
          </Text>
        </VStack>
        <Link
          ml="auto"
          _text={{
            _light: { color: 'blue.500' },
            _dark: { color: 'primary.500' },
            textDecorationLine: 'none',
          }}
        >
          Switch
        </Link>
      </HStack>
      <HStack justifyContent="space-between" alignItems="center">
        <Text
          fontSize="sm"
          fontWeight="semibold"
          _light={{ color: 'coolGray.400' }}
          _dark={{ color: 'coolGray.400' }}
        >
          Suggestions for you
        </Text>
        <Link
          _text={{
            fontWeight: 'semibold',
            textDecorationLine: 'none',
            _light: { color: 'coolGray.800' },
            _dark: { color: 'primary.500' },
          }}
        >
          See All
        </Link>
      </HStack>
      {SidePannelList.map((item, index) => {
        return (
          <HStack space={2} alignItems="center" key={index}>
            <Avatar height={9} width={9} source={item.image} />
            <VStack>
              <Text
                fontWeight="semibold"
                fontSize="sm"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                {item.name}
              </Text>
              <Text
                fontWeight="medium"
                fontSize="xs"
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.400' }}
              >
                {item.userName}
              </Text>
            </VStack>
            <Link
              ml="auto"
              _text={{ color: 'blue.500', textDecorationLine: 'none' }}
            >
              Follow
            </Link>
          </HStack>
        );
      })}
    </VStack>
  );
}
function BottomNavigation(props: any) {
  return (
    <Hidden from="md">
      <Box
        height={20}
        position="absolute"
        px="8"
        pt="3"
        left="0"
        right="0"
        bottom="0"
        safeAreaBottom
        alignSelf="center"
        borderTopLeftRadius="24"
        borderTopRightRadius="24"
        _light={{ backgroundColor: 'white' }}
        _dark={{ backgroundColor: 'coolGray.700' }}
      >
        <Pressable
          onPress={() => {
            console.log('you have selected the pressed option');
          }}
        >
          <HStack justifyContent="space-between">
            <VStack alignItems="center">
              <IconHome />
              <Text
                _light={{ color: 'primary.900' }}
                _dark={{ color: 'primary.500' }}
                fontSize="xs"
                fontWeight="medium"
                py="2"
              >
                Home
              </Text>
            </VStack>
            <VStack alignItems="center">
              <IconIgtv />
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
                py="2"
              >
                IGTV
              </Text>
            </VStack>
            <VStack alignItems="center">
              <IconSearch />
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
                py="2"
              >
                Search
              </Text>
            </VStack>
            <VStack alignItems="center">
              <IconChat />
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
                py="2"
              >
                Chat
              </Text>
            </VStack>
            <VStack alignItems="center">
              <IconProfile />
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
                py="2"
              >
                Profile
              </Text>
            </VStack>
          </HStack>
        </Pressable>
      </Box>
    </Hidden>
  );
}
export default function (props: any) {
  return (
    <>
      <DashboardLayout
        title="Welcome!"
        displayScreenTitle={false}
        displaySidebar={false}
      >
        <HStack>
          <VStack flex={1} mb={{ base: 10, md: 0 }}>
            <Stories />
            {profiles.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Post item={item} index={index} />
                </React.Fragment>
              );
            })}
          </VStack>
          <Hidden from="base" till="md">
            <VStack ml="4">
              <SidePanel />
            </VStack>
          </Hidden>
        </HStack>
      </DashboardLayout>
      <BottomNavigation />
    </>
  );
}
