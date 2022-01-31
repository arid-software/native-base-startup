import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Center,
  IconButton,
  Menu,
  Pressable,
  Input,
  Divider,
  Hidden,
} from 'native-base';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';

function ChatItem(props: any) {
  return (
    <Pressable>
      <HStack
        alignItems="center"
        _light={{ borderBottomColor: 'warmGray.200' }}
        _dark={{ borderBottomColor: 'coolGray.200' }}
      >
        <HStack w="100%" space="3" alignItems="center">
          <Avatar source={{ uri: props.item.imageUri }} w="12" h="12">
            JD
          </Avatar>
          <VStack flex="1">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.100' }}
            >
              {props.item.name}
            </Text>
            <HStack alignItems="center" space="1">
              {props.item.isPhoto ? (
                <Icon
                  size="4"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                  as={MaterialIcons}
                  name={'photo-size-select-actual'}
                />
              ) : props.item.bothIcon ? (
                <Icon
                  size="4"
                  _light={{ color: 'coolGray.500' }}
                  _dark={{ color: 'coolGray.400' }}
                  as={Ionicons}
                  name={'ios-checkmark-done-outline'}
                />
              ) : null}
              <Text
                fontSize="sm"
                fontWeight="medium"
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.400' }}
                isTruncated
              >
                {props.item.isPhoto
                  ? 'Photo'
                  : props.item.text.substring(0, 40)}
              </Text>
            </HStack>
          </VStack>
          <VStack marginLeft="auto" space="2" alignItems="flex-end">
            <Text
              fontSize="xs"
              _light={
                props.item.isUnread
                  ? { color: 'primary.900' }
                  : { color: 'coolGray.600' }
              }
              _dark={
                props.item.isUnread
                  ? { color: 'primary.700' }
                  : { color: 'coolGray.400' }
              }
              mb={props.item.isUnread ? 0 : 5}
            >
              {props.item.time}
            </Text>
            {props.item.isUnread ? (
              <Center
                w="5"
                h="5"
                rounded="full"
                _light={{ bg: 'primary.900' }}
                _dark={{ bg: 'primary.700' }}
              >
                <Text fontSize="xs" color="white">
                  {props.item.unread}
                </Text>
              </Center>
            ) : null}
          </VStack>
        </HStack>
      </HStack>
    </Pressable>
  );
}

export default function ChatList1(props: any) {
  let chatItemsList = [
    {
      name: 'John Legend',
      imageUri:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
      isPhoto: true,
      text: '',
      isUnread: true,
      unread: 4,
      time: '12:47 PM',
      bothIcon: true,
    },
    {
      name: 'Tom',
      imageUri:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      isPhoto: false,
      text: 'In the bank I will be there soon',
      isUnread: false,
      unread: 0,
      time: '10:20 AM',
      bothIcon: true,
    },
    {
      name: 'Marsh',
      imageUri:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      isPhoto: false,
      text: "I'll be there soon",
      isUnread: false,
      unread: 1,
      time: '8:50 AM',
      bothIcon: true,
    },
    {
      name: 'Shafiria Torrean',
      imageUri:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      isPhoto: true,
      text: '',
      isUnread: false,
      unread: 6,
      time: '8:45 AM',
    },
    {
      name: 'Vitus (Chase Bank)',
      imageUri:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      isPhoto: true,
      text: 'Cheer up! We have a new update fr…',
      isUnread: true,
      unread: 2,
      time: '8:12 AM',
    },
    {
      name: '+1 8889 45 4100',
      imageUri:
        'https://images.unsplash.com/photo-1602471615287-d733c59b79c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1742&q=80',
      isPhoto: true,
      text: '',
      isUnread: false,
      unread: 2,
      time: 'Yesterday',
    },
    {
      name: 'Lè Famalia',
      imageUri:
        'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1816&q=80',
      isPhoto: false,
      text: 'Emily: Good morning everyone. ♥️ You lo…',
      isUnread: true,
      unread: 7,
      time: 'Yesterday',
    },
    {
      name: 'Amy Sanders',
      imageUri:
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
      isPhoto: false,
      text: 'Hey Aafreen. Let’s catch up this wekend…',
      isUnread: true,
      unread: 1,
      time: 'Yesterday',
    },
    {
      name: 'Mili Chow',
      imageUri:
        'https://images.unsplash.com/photo-1630945386735-372fbe731e3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
      isPhoto: true,
      text: 'In the bank I will be there soon',
      isUnread: true,
      unread: 1,
      time: 'Sunday',
    },
    {
      name: 'Timothy Dykes',
      imageUri:
        'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1676&q=80',
      isPhoto: false,
      text: 'Hey sorry forgot to call you.',
      isUnread: true,
      unread: 1,
      time: 'Sunday',
    },
  ];
  return (
    <>
      <DashboardLayout
        title="Chats"
        displaySidebar={false}
        displayScreenTitle={false}
        displayMenuButton
        displayNotificationButton
      >
        <VStack
          px={{ base: 4, md: 8 }}
          py={{ base: 3, md: 4 }}
          _light={{ bg: 'white', borderColor: 'coolGray.200' }}
          _dark={{
            bg: {
              md: 'coolGray.900',
              base: 'coolGray.800',
            },
            borderColor: 'coolGray.700',
          }}
          borderRadius={{ md: '8' }}
          borderWidth={{ md: '1' }}
          flex={1}
        >
          <Hidden till="md">
            <HStack justifyContent="center" space="4">
              <Input
                variant="unstyled"
                flex="1"
                size="lg"
                _light={{
                  bg: 'coolGray.100',
                  placeholderTextColor: 'coolGray.500',
                  borderColor: 'coolGray.400',
                }}
                _dark={{
                  bg: 'coolGray.700',
                  borderColor: 'coolGray.400',
                  placeholderTextColor: 'coolGray.400',
                }}
                _hover={{ _dark: { bg: 'coolGray.700' } }}
                InputLeftElement={
                  <Icon
                    as={<AntDesign name="search1" />}
                    size="xs"
                    ml="5"
                    _light={{
                      color: 'coolGray.500',
                    }}
                    _dark={{
                      color: 'coolGray.400',
                    }}
                  />
                }
                placeholder="Start a chat"
              />
              <Menu
                p="0"
                defaultIsOpen={true}
                trigger={(triggerProps) => {
                  return (
                    <IconButton
                      variant="unstyled"
                      accessibilityLabel="More options menu"
                      {...triggerProps}
                      icon={
                        <Icon
                          size="6"
                          _light={{ color: 'coolGray.800' }}
                          _dark={{ color: 'white' }}
                          as={MaterialIcons}
                          name="more-vert"
                        />
                      }
                    />
                  );
                }}
                placement="bottom right"
              >
                <Menu.Item _dark={{ bg: 'coolGray.900' }}>New group</Menu.Item>
                <Menu.Item _dark={{ bg: 'coolGray.900' }}>
                  New broadcast
                </Menu.Item>
                <Menu.Item _dark={{ bg: 'coolGray.900' }}>Settings</Menu.Item>
              </Menu>
            </HStack>
          </Hidden>
          <VStack
            mt={{ md: '8' }}
            space="2"
            divider={
              <Divider
                _light={{ bg: 'coolGray.200' }}
                _dark={{ bg: '#374151' }}
              />
            }
          >
            {chatItemsList.map((item, index) => {
              return <ChatItem item={item} key={'chatItem' + index} />;
            })}
          </VStack>
        </VStack>
      </DashboardLayout>
    </>
  );
}
