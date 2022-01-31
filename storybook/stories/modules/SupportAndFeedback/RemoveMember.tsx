import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Hidden,
  Avatar,
  Image,
  ScrollView,
  Switch,
  Pressable,
  Center,
  Badge,
  Divider,
  Modal,
  Button,
  IconButton,
  useDisclose,
} from 'native-base';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';

const userList = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1605170444329-61aa23227b07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    name: 'Emily',
    status: 'Available',
    role: 'Admin',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    name: 'Mom',
    status: 'Available',
    role: 'Admin',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'Dad',
    status: 'Live High',
    role: 'Admin',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80',
    name: 'Emily',
    status: 'Busy in a Meeting',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    name: 'Kattie',
    status: 'Available',
  },
];

const userListTemplate = (
  user: any,
  idx: number,
  onOpen: any,
  removeUser: any
) => {
  return (
    <Pressable
      w="100%"
      onPress={() => {
        removeUser(idx);
        onOpen();
      }}
    >
      {({ isHovered }) => {
        return (
          <HStack justifyContent="space-between" key={idx}>
            <HStack space="5" alignItems="center">
              <Avatar
                source={{
                  uri: user.imageUrl,
                }}
              />
              <VStack space="1">
                <Text
                  fontWeight="medium"
                  fontSize="md"
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'white' }}
                >
                  {user.name}
                </Text>
                <Text
                  fontWeight="medium"
                  fontSize="xs"
                  _light={{ color: 'coolGray.400' }}
                  _dark={{ color: 'coolGray.200' }}
                >
                  {user.status}
                </Text>
              </VStack>
            </HStack>
            <HStack space="6" alignItems="center">
              {isHovered && <Text color="red.700">Remove User</Text>}
              {user.role && (
                <Center>
                  <Badge
                    variant="outline"
                    px="2"
                    py="1"
                    borderRadius="4"
                    _light={{
                      _text: {
                        color: 'primary.900',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                      },
                      borderColor: 'primary.800',
                    }}
                    _dark={{
                      _text: {
                        color: 'primary.50',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                      },
                      borderColor: 'coolGray.50',
                      bg: 'coolGray.800',
                    }}
                  >
                    {user.role}
                  </Badge>
                </Center>
              )}
            </HStack>
          </HStack>
        );
      }}
    </Pressable>
  );
};

function GroupHeader() {
  return (
    <Box h="56" justifyContent="flex-end">
      <Image
        zIndex={-1}
        position="absolute"
        source={{
          uri: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80',
        }}
        alt="Alternate Text"
        top="0"
        right="0"
        left="0"
        bottom="0"
      />
      <Hidden from="md">
        <IconButton
          p="0"
          position="absolute"
          top="10"
          left="5"
          variant="unstyled"
          icon={
            <Icon
              size="6"
              as={AntDesign}
              name={'arrowleft'}
              color="coolGray.50"
            />
          }
        />
      </Hidden>

      <HStack
        px={{ base: '4', md: '30' }}
        justifyContent="space-between"
        alignItems="center"
        bg="coolGray.800:alpha.50"
      >
        <VStack py="2">
          <Text color="coolGray.50" fontWeight="bold" fontSize="md">
            Lè Familia
          </Text>
          <Text fontSize="xs" color="coolGray.200">
            Created by Mom
          </Text>
        </VStack>
        <Pressable>
          <Icon as={MaterialIcons} name="create" color="coolGray.50" size="6" />
        </Pressable>
      </HStack>
    </Box>
  );
}

function GroupActionList({ onOpen, removeUser }: any) {
  return (
    <VStack _light={{ bg: 'white' }} _dark={{ bg: 'coolGray.800' }}>
      <HStack
        py="4"
        px={{ base: '4', md: '8' }}
        justifyContent="space-between"
        alignItems="center"
        _light={{ bg: 'coolGray.100' }}
        _dark={{ bg: 'coolGray.800' }}
      >
        <Text
          fontWeight="medium"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
          fontSize="sm"
        >
          Mute Notifications
        </Text>

        <Switch size="sm" colorScheme="primary.900" />
      </HStack>
      <VStack
        px={{ base: '4', md: '8' }}
        _light={{ bg: 'coolGray.50' }}
        _dark={{ bg: 'coolGray.800' }}
      >
        <Pressable py="2">
          <HStack alignItems="center" space="7">
            <Center bg="primary.900" p="2" rounded="full">
              <Icon
                as={AntDesign}
                name="adduser"
                color="coolGray.50"
                size="sm"
              />
            </Center>
            <Text
              fontWeight="medium"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              fontSize="sm"
            >
              Add Participants
            </Text>
          </HStack>
        </Pressable>
        <Divider />
        <Pressable py="2">
          <HStack alignItems="center" space="7">
            <Center bg="primary.900" p="2" rounded="full">
              <Icon
                as={MaterialIcons}
                name="insert-link"
                color="coolGray.50"
                size="sm"
              />
            </Center>
            <Text
              fontWeight="medium"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              fontSize="sm"
            >
              Invite via link
            </Text>
          </HStack>
        </Pressable>
        <Hidden till="md">
          <>
            <Divider />
            <Pressable py="2">
              <HStack alignItems="center" space="7">
                <Center bg="primary.900" p="2" rounded="full">
                  <Icon
                    as={FontAwesome}
                    name="image"
                    color="coolGray.50"
                    size="sm"
                  />
                </Center>
                <Text
                  fontWeight="medium"
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.50' }}
                  fontSize="sm"
                >
                  Media, Links and Docs
                </Text>
              </HStack>
            </Pressable>
          </>
        </Hidden>
      </VStack>
      <Divider />
      <Pressable
        onPress={() => {
          removeUser(0);
          onOpen();
        }}
        px={{ base: '4', md: '8' }}
        py="2"
        _light={{ bg: 'coolGray.100' }}
        _dark={{ bg: 'coolGray.900' }}
      >
        <HStack alignItems="center" space="7">
          <Center bg="red.700" p="2" rounded="full">
            <Icon
              as={MaterialIcons}
              name="exit-to-app"
              color="coolGray.50"
              size="sm"
            />
          </Center>
          <Text fontWeight="medium" fontSize="sm" color="red.700">
            Exit Group
          </Text>
        </HStack>
      </Pressable>
      <Divider />
      <Text
        _light={{ color: 'primary.900' }}
        _dark={{ color: 'coolGray.50' }}
        px={{ base: '4', md: '8' }}
        mt="5"
        fontWeight="500"
      >
        {userList.length} Participants
      </Text>
    </VStack>
  );
}

function GroupMembers({ onOpen, removeUser }: any) {
  return (
    <VStack
      flex={1}
      space="2"
      px={{ base: '4', md: '8' }}
      py="4"
      _light={{ bg: 'white' }}
      _dark={{ bg: 'coolGray.800' }}
      divider={<Divider />}
    >
      {userList.map((data, idx) => {
        return (
          <React.Fragment key={idx}>
            {userListTemplate(data, idx, onOpen, removeUser)}
          </React.Fragment>
        );
      })}
    </VStack>
  );
}

export default function GroupChatEdit(props: any) {
  const { isOpen, onClose, onOpen } = useDisclose(false);
  const [toBeRemovedUserIndex, setToBeRemovedUserIndex] = React.useState(0);
  function removeUser(ind: number) {
    setToBeRemovedUserIndex(ind);
  }
  return (
    <DashboardLayout title={'Group'} showGroupInfoHeader>
      <VStack
        overflow="hidden"
        rounded={{ md: '8' }}
        borderWidth={{ md: '1' }}
        _light={{ borderColor: 'coolGray.200' }}
        _dark={{ borderColor: 'coolGray.700' }}
        flex={1}
      >
        <GroupHeader />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: '100%' }}
          _light={{ bg: 'white' }}
          _dark={{ bg: 'coolGray.800' }}
        >
          <GroupActionList onOpen={onOpen} removeUser={removeUser} />
          <GroupMembers onOpen={onOpen} removeUser={removeUser} />
        </ScrollView>
        <Modal isOpen={isOpen} onClose={onClose} size="md">
          <Modal.Content
            _dark={{ bg: 'coolGray.800' }}
            _light={{ bg: 'white' }}
            px={4}
            borderRadius={10}
          >
            <Modal.Body>
              <Modal.CloseButton />
              <VStack
                borderRadius="xl"
                alignItems="center"
                justifyContent="center"
                pt="8"
                pb="6"
                space="4"
              >
                <Avatar
                  size="20"
                  source={{
                    uri: userList[toBeRemovedUserIndex].imageUrl,
                  }}
                ></Avatar>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                  letterSpacing="0.5"
                  lineHeight="lg"
                  textAlign="center"
                >
                  Are you sure want to remove{' '}
                  <Text fontWeight="bold">
                    {userList[toBeRemovedUserIndex].name}
                  </Text>{' '}
                  from the <Text fontWeight="bold"> “Lè Famalia”</Text>
                  group?
                </Text>
                <HStack alignItems="center" space="3">
                  <Button
                    variant="outline"
                    borderRadius="4"
                    _light={{ borderColor: 'coolGray.400' }}
                    _dark={{ borderColor: 'coolGray.300' }}
                    width={{ lg: '32', base: '24' }}
                    h={10}
                    _text={{
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      _light: { color: 'coolGray.400' },
                      _dark: { color: 'coolGray.300' },
                    }}
                    onPress={onClose}
                  >
                    NO
                  </Button>
                  <Button
                    _light={{ bg: 'primary.900' }}
                    _dark={{ bg: 'primary.700' }}
                    borderRadius="4"
                    width={{ lg: '32', base: '24' }}
                    h={10}
                    _text={{ fontSize: 'sm', fontWeight: 'semibold' }}
                    onPress={onClose}
                  >
                    YES
                  </Button>
                </HStack>
              </VStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </VStack>
    </DashboardLayout>
  );
}
