import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Image,
  useColorMode,
  ScrollView,
  Input,
  Hidden,
  Pressable,
  IconButton,
  Divider,
  Center,
} from 'native-base';
import {
  AntDesign,
  Feather,
  Fontisto,
  Ionicons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import ChatLayout from '../../layouts/ChatLayout';
function ChatItem(props: any) {
  return (
    <Box flexDirection={props.item.align == 'left' ? 'row' : 'row-reverse'}>
      {props.item.type == 'text' ? (
        <VStack
          minW="32"
          maxW={{ base: '64', md: '96' }}
          borderRadius="4"
          pt="2"
          pb="1"
          px="2"
          _light={{
            bg: props.item.align == 'left' ? 'coolGray.200' : 'primary.200',
          }}
          _dark={{
            bg: props.item.align == 'left' ? 'coolGray.700' : 'primary.200',
          }}
        >
          {props.item.name ? (
            <Text
              fontSize="sm"
              fontWeight="medium"
              _light={{ color: 'primary.900' }}
              _dark={{ color: 'primary.400' }}
            >
              {props.item.name}
            </Text>
          ) : null}
          <Text
            fontSize="sm"
            _light={{
              color:
                props.item.align == 'left' ? 'coolGray.800' : 'coolGray.800',
            }}
            _dark={{
              color:
                props.item.align == 'left' ? 'coolGray.200' : 'coolGray.800',
            }}
          >
            {props.item.text}
          </Text>
          <HStack space="1" justifyContent="flex-end" alignItems="center">
            <Text
              fontSize="xs"
              _light={{
                color:
                  props.item.align == 'left' ? 'coolGray.400' : 'coolGray.400',
              }}
              _dark={{
                color:
                  props.item.align == 'left' ? 'coolGray.400' : 'coolGray.800',
              }}
            >
              {props.item.time}
            </Text>
            <Icon
              size="5"
              _light={{
                color:
                  props.item.align == 'left' ? 'coolGray.400' : 'coolGray.400',
              }}
              _dark={{
                color:
                  props.item.align == 'left' ? 'coolGray.400' : 'coolGray.800',
              }}
              as={Ionicons}
              name={'checkmark-done'}
            />
          </HStack>
        </VStack>
      ) : (
        <Box position="relative">
          <Image
            w="48"
            h="48"
            alt="alternative text"
            source={{
              uri: props.item.imageUri,
            }}
            borderRadius="lg"
          />
          <HStack
            position="absolute"
            bottom="2"
            right="2"
            zIndex={2}
            space="1"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Text fontSize="xs" color="coolGray.50">
              {props.item.time}
            </Text>
            <Icon
              size="3"
              color="coolGray.50"
              as={Ionicons}
              name={'checkmark-done'}
            />
          </HStack>
        </Box>
      )}
    </Box>
  );
}
let chatItemList = [
  {
    type: 'text',
    name: 'Mom',
    align: 'left',
    text: 'Where are you, I am waiting….! ',
    time: '11:07AM',
    imageUri: '',
  },
  {
    type: 'text',
    name: 'Mom',
    align: 'left',
    text: 'You said 10 mins.',
    time: '11:07AM',
    imageUri: '',
  },
  {
    type: 'text',
    align: 'right',
    text: 'Need another 5',
    time: '11:08AM',
    imageUri: '',
  },
  {
    type: 'text',
    name: 'Emily',
    align: 'left',
    text: 'Ugh late as always...',
    time: '11:09AM',
    imageUri: '',
  },
  {
    type: 'image',
    align: 'right',
    text: 'In 10 min..',
    time: '11:11AM',
    imageUri:
      'https://images.unsplash.com/photo-1605170444329-61aa23227b07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    type: 'text',
    align: 'right',
    text: 'How do i look?',
    time: '11:11AM',
    imageUri: '',
  },
  {
    type: 'text',
    name: 'Mom',
    align: 'left',
    text: 'Awesome btw need to ask something.',
    time: '11:13AM',
    imageUri: '',
  },
  {
    type: 'text',
    name: 'Mom',
    align: 'left',
    text: 'Don’t tell Dad but m going to use the cab money for other personal things',
    time: '11:14AM',
    imageUri: '',
  },
  {
    type: 'text',
    name: 'Emily',
    align: 'left',
    text: 'Why? Plus dad can see this lol',
    time: '11:14AM',
    imageUri: '',
  },
  {
    type: 'text',
    align: 'left',
    text: 'It’s easier that way mum',
    time: '11:14AM',
    imageUri: '',
  },
  {
    type: 'text',
    name: 'Mom',
    align: 'left',
    text: 'Yee. I thought we were on a personal chat. How can I erase it before he sees it?',
    time: '11:15AM',
    imageUri: '',
  },
  {
    type: 'text',
    name: 'Emily',
    align: 'left',
    text: 'Too late now lol',
    time: '11:17AM',
    imageUri: '',
  },
];
function ChatHeader() {
  return (
    <HStack
      borderTopRadius={4}
      _light={{ bg: 'primary.900' }}
      _dark={{ bg: 'coolGray.900' }}
      alignItems="center"
      justifyContent="space-between"
      py="4"
      px="4"
    >
      <HStack space="2" alignItems="center">
        <Pressable>
          <Icon size="6" color="white" as={AntDesign} name={'arrowleft'} />
        </Pressable>
        <Avatar
          source={{
            uri: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80',
          }}
          w="10"
          h="10"
        >
          LF
        </Avatar>
        <Box>
          <Text color="white" mb="0.5" fontSize="sm" fontWeight="bold">
            Lè Familia
          </Text>
          <Text fontSize="xs" color="white">
            Dad, Emily, Mom and 7 more
          </Text>
        </Box>
      </HStack>
      <HStack alignItems="center" space="4">
        <Pressable>
          <Icon size="6" color="white" as={MaterialIcons} name={'phone'} />
        </Pressable>
        <Pressable>
          <Icon size="6" color="white" as={Ionicons} name="videocam-outline" />
        </Pressable>
        <Pressable>
          <Icon size="6" color="white" as={MaterialIcons} name="more-vert" />
        </Pressable>
      </HStack>
    </HStack>
  );
}
function ChatInput() {
  return (
    <Box
      w="100%"
      borderBottomRadius={{ base: 0, md: 8 }}
      _light={{ bg: 'coolGray.50' }}
      _dark={{ bg: 'coolGray.800' }}
    >
      <Divider />
      <Input
        py={{ base: '4', md: '6' }}
        px={{ base: '4', md: '7' }}
        size="md"
        variant="unstyled"
        borderTopLeftRadius="0"
        borderTopRightRadius="0"
        borderWidth="1"
        placeholder="Type a message"
        _light={{
          borderColor: 'white',
          color: 'coolGray.500',
          bg: 'white',
        }}
        _dark={{
          borderColor: 'coolGray.800',
          color: 'coolGray.300',
          bg: 'coolGray.800',
        }}
        InputLeftElement={
          <Pressable ml={{ base: '5', md: '6' }}>
            <Icon
              as={Octicons}
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.300' }}
              name="smiley"
              size={{ base: '5', md: '6' }}
            />
          </Pressable>
        }
        InputRightElement={
          <HStack
            alignItems="center"
            space={{ base: '3', md: '4', lg: '4' }}
            mr={{ base: '5', md: '7' }}
          >
            <IconButton
              p={{ md: 0 }}
              variant="ghost"
              icon={
                <Icon
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.300' }}
                  as={Ionicons}
                  name="ios-attach"
                  size="6"
                />
              }
            />
            <IconButton
              p={{ md: 0 }}
              variant="ghost"
              icon={
                <Icon
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.300' }}
                  as={Ionicons}
                  name="ios-camera"
                  size="6"
                />
              }
            />
            <Center
              _light={{ bg: 'primary.900' }}
              _dark={{ bg: 'primary.700' }}
              rounded="full"
            >
              <IconButton
                rounded="full"
                p={{ base: '1', md: '3' }}
                _icon={{ color: 'white' }}
                icon={
                  <Icon
                    color="white"
                    as={Feather}
                    name="mic"
                    size={{ base: '5', md: '5' }}
                  />
                }
              />
            </Center>
          </HStack>
        }
      />
    </Box>
  );
}
export default function (props: any) {
  const { colorMode } = useColorMode();
  return (
    <>
      <ChatLayout
        title={'Lè Familia'}
        displaySidebar={false}
        subTitle={'Dad, Emily, Mom and 7 more'}
      >
        <VStack
          flex="1"
          _light={{ bg: 'white' }}
          _dark={{ bg: 'coolGray.800' }}
          rounded={{ md: '8' }}
        >
          <Hidden till="md">
            <ChatHeader />
          </Hidden>
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack
              borderTopWidth="0"
              mx={{ base: 4, md: 0 }}
              px={{ base: 0, md: 32 }}
              py={{ base: 4, md: 2 }}
              _light={{
                borderColor: 'coolGray.200',
                bg: { md: 'white' },
              }}
              _dark={{
                borderColor: 'coolGray.600',
                bg: { md: 'coolGray.800' },
              }}
              borderBottomWidth="0"
              space="2"
            >
              {chatItemList.map((item, index) => {
                return <ChatItem item={item} key={'chatItem' + index} />;
              })}
            </VStack>
          </ScrollView>
          <ChatInput />
        </VStack>
      </ChatLayout>
    </>
  );
}
