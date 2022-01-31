import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  ScrollView,
  Pressable,
  useColorMode,
  Center,
  Input,
  Fab,
  IconButton,
  Divider,
  Button,
} from 'native-base';
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import DashboardLayout from '../../layouts/DashboardLayout';

function getData(rawData: any) {
  let data = rawData.reduce((r: any, e: any) => {
    let group = e.contactName[0];
    if (!r[group]) r[group] = { group, children: [e] };
    else r[group].children.push(e);
    return r;
  }, {});

  let result = Object.values(data);
  return result;
}
function ListWithLabel(props: any) {
  return (
    <Box>
      <HStack alignItems="center">
        <Text
          fontSize="xs"
          _light={{ color: 'coolGray.900' }}
          _dark={{ color: 'coolGray.50' }}
          mt={5}
          mb={2}
          pl={4}
        >
          {props.item.group.toUpperCase()}
        </Text>
        <Divider ml={2} mr={9} mt={2} flex={1} />
      </HStack>

      {props.item.children.map((item: any, index: number) => {
        return (
          <Pressable p={2} key={index}>
            <HStack alignItems="center" space={4}>
              <Avatar
                source={{
                  uri: item.imageUri,
                }}
                w={10}
                h={10}
              >
                JD
              </Avatar>

              <VStack>
                <Text
                  fontSize="sm"
                  _light={{ color: 'coolGray.900' }}
                  _dark={{ color: 'coolGray.50' }}
                >
                  {item.contactName.charAt(0).toUpperCase() +
                    item.contactName.slice(1)}
                </Text>
              </VStack>
            </HStack>
          </Pressable>
        );
      })}
    </Box>
  );
}
function ListItem(props: any) {
  return (
    <Pressable p={2}>
      <HStack alignItems="center" space={4}>
        <Avatar
          source={{
            uri: props.item.imageUri,
          }}
          w={10}
          h={10}
        >
          JD
        </Avatar>
        <VStack>
          <Text
            fontSize="sm"
            _light={{ color: 'coolGray.900' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {props.item.contactName.charAt(0).toUpperCase() +
              props.item.contactName.slice(1)}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
}
function ListItemDesktop(props: any) {
  return (
    <Pressable p={2} flex={1}>
      <HStack alignItems="center" flex={1} justifyContent="space-between">
        <HStack alignItems="center" space={4} w={40}>
          <Avatar
            source={{
              uri: props.item.imageUri,
            }}
            w={10}
            h={10}
          >
            JD
          </Avatar>
          <Text
            _light={{ color: 'coolGray.900' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {props.item.contactName.charAt(0).toUpperCase() +
              props.item.contactName.slice(1)}
          </Text>
        </HStack>

        <Text
          w={40}
          _light={{ color: 'coolGray.900' }}
          _dark={{ color: 'coolGray.50' }}
        >
          xyz@pqr.com
        </Text>

        <Text
          w={40}
          _light={{ color: 'coolGray.900' }}
          _dark={{ color: 'coolGray.50' }}
        >
          {props.item.contactNumber}
        </Text>

        <IconButton
          w={10}
          variant="ghost"
          colorScheme="light"
          icon={
            <Icon
              size="6"
              _light={{ color: 'coolGray.600' }}
              _dark={{ color: 'coolGray.50' }}
              name={'dots-vertical'}
              as={MaterialCommunityIcons}
            />
          }
        />
      </HStack>
    </Pressable>
  );
}
export default function ContactList(props: any) {
  const { colorMode } = useColorMode();
  const contacts = [
    {
      imageUri:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80',
      contactName: 'Kristin Watson',
      contactNumber: '(316) 555-0116',
    },
    {
      imageUri:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80',
      contactName: 'Kristin Watson',
      contactNumber: '(316) 555-0116',
    },
    {
      imageUri:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80',
      contactName: 'nmistin Watson',
      contactNumber: '(316) 555-0116',
    },
    {
      imageUri:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80',
      contactName: 'qwistin Watson',
      contactNumber: '(316) 555-0116',
    },
    {
      imageUri:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80',
      contactName: 'tyistin Watson',
      contactNumber: '(316) 555-0116',
    },
    {
      imageUri:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80',
      contactName: 'bgistin Watson',
      contactNumber: '(316) 555-0116',
    },
    {
      imageUri:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80',
      contactName: 'gfistin Watson',
      contactNumber: '(316) 555-0116',
    },
    {
      imageUri:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80',
      contactName: 'sdstin Watson',
      contactNumber: '(316) 555-0116',
    },
    {
      imageUri:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80',
      contactName: 'Kristin Watson',
      contactNumber: '(316) 555-0116',
    },
    {
      imageUri:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80',
      contactName: 'erstin Watson',
      contactNumber: '(316) 555-0116',
    },
  ];
  const sortedArr = contacts.sort((a, b) =>
    a.contactName.localeCompare(b.contactName)
  );
  const groupedContacts = getData(sortedArr);
  return (
    <>
      <DashboardLayout
        displaySidebar
        displayScreenTitle={false}
        title="My Contacts"
      >
        <HStack
          pt={{ md: 5, base: 2 }}
          mb={{ md: 5, base: 0 }}
          w="100%"
          justifyContent="space-between"
          _light={{ bg: { base: 'white', md: 'primary.50' } }}
          _dark={{
            bg: { base: 'coolGray.800', md: 'coolGray.700' },
          }}
        >
          <Input
            flex={{ md: undefined, lg: undefined, base: 1 }}
            w={{ md: '20', lg: '20', base: '90%' }}
            py={3}
            mx={{ base: 4, md: 0 }}
            mr={{ base: 4, md: 4, lg: 30, xl: 40 }}
            _light={{ bg: 'white' }}
            _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
            InputLeftElement={
              <Icon
                as={<AntDesign name="search1" />}
                size={{ base: '4', md: '4' }}
                my={2}
                ml={2}
                _light={{
                  color: 'coolGray.400',
                }}
                _dark={{
                  color: 'coolGray.300',
                }}
              />
            }
            color="coolGray.400"
            placeholder="Search here"
          />
          <HStack space={4} display={{ md: 'flex', base: 'none' }}>
            <Button
              p="4"
              w={40}
              borderRadius="4"
              _light={{
                bg: 'white',
                _hover: { bg: 'white' },
                _pressed: { bg: 'white' },
              }}
              _dark={{
                bg: 'coolGray.900',
                _hover: { bg: 'coolGray.900' },
                _pressed: { bg: 'coolGray.900' },
              }}
            >
              SETTINGS
            </Button>
            <Button
              p="4"
              w={40}
              borderRadius="4"
              _light={{ bg: 'primary.800', _pressed: { bg: 'primary.700' } }}
              _dark={{ bg: 'primary.900', _pressed: { bg: 'primary.500' } }}
            >
              ADD CONTACT
            </Button>
          </HStack>
        </HStack>
        <VStack
          px={{ base: 4, md: 8 }}
          py={{ base: 2, md: 8 }}
          borderRadius={{ md: '8' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'white' },
          }}
          _dark={{
            borderColor: 'coolGray.700',
            bg: { md: 'coolGray.900', base: 'coolGray.800' },
          }}
          borderWidth={{ md: '1' }}
          borderBottomWidth="1"
          space="4"
        >
          <Box>
            <ScrollView>
              <Box position="relative" display={{ md: 'none', base: 'flex' }}>
                <Text
                  mt={{ md: 4, base: 2 }}
                  pl={4}
                  fontWeight="semibold"
                  fontSize="xs"
                  mb={3}
                  _light={{ color: 'primary.900' }}
                  _dark={{ color: 'violet.500' }}
                >
                  Favourites
                </Text>

                {contacts.splice(0, 3).map((item: any, index: number) => {
                  return <ListItem item={item} key={index} />;
                })}
                {groupedContacts.map((item, index) => {
                  return <ListWithLabel item={item} key={index} />;
                })}
              </Box>
              <Box display={{ md: 'flex', base: 'none' }}>
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  borderBottomWidth={1}
                  _light={{ borderColor: 'coolGray.200' }}
                  _dark={{ borderColor: 'coolGray.600' }}
                >
                  <Text
                    fontWeight="bold"
                    textAlign="left"
                    w={40}
                    mb={3}
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    Name
                  </Text>
                  <Text
                    fontWeight="bold"
                    textAlign="left"
                    w={40}
                    mb={3}
                    _light={{ color: 'coolGray.900' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    Email
                  </Text>
                  <Text
                    fontWeight="bold"
                    w={40}
                    mb={3}
                    _light={{ color: 'coolGray.900' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    Phone Number
                  </Text>
                  <Text w={10}></Text>
                </HStack>
                <Text
                  mt={7}
                  pl={2}
                  fontSize="sm"
                  mb={3}
                  _light={{ color: 'coolGray.600' }}
                  _dark={{ color: 'coolGray.300' }}
                >
                  Favourites{'(2)'}
                </Text>
                {contacts.splice(5, 8).map((item: any, index: number) => {
                  return <ListItemDesktop item={item} key={index} />;
                })}
                <Text
                  mt={7}
                  pl={2}
                  fontSize="sm"
                  mb={3}
                  _light={{ color: 'coolGray.600' }}
                  _dark={{ color: 'coolGray.300' }}
                >
                  Contacts({contacts.length})
                </Text>
                <VStack space={4}>
                  {contacts.map((item: any, index: number) => {
                    return <ListItemDesktop item={item} key={index} />;
                  })}
                </VStack>
              </Box>
            </ScrollView>
            <VStack
              display={{ md: 'none', base: 'flex' }}
              zIndex={2}
              position="absolute"
              alignItems="center"
              right={5}
              top={4}
            >
              <Icon
                size={3}
                _light={{ color: 'primary.900' }}
                _dark={{ color: 'violet.500' }}
                as={AntDesign}
                name="heart"
              />
              {groupedContacts.map((item: any, index) => {
                return (
                  <Pressable key={index}>
                    <Text mt={2}> {item.group.toUpperCase()}</Text>
                  </Pressable>
                );
              })}
            </VStack>

            <Fab
              display={{ md: 'none', base: 'flex' }}
              bg="primary.900"
              placement="bottom-right"
              mb={10}
              borderRadius="full"
              icon={
                <Center>
                  <Icon size={6} color="white" as={Ionicons} name={'keypad'} />
                </Center>
              }
            />
          </Box>
        </VStack>
      </DashboardLayout>
    </>
  );
}
