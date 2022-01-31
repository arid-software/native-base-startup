import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Pressable,
  useColorMode,
  useDisclose,
  useColorModeValue,
  IconButton,
  Center,
  Actionsheet,
  Modal,
} from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import FloatingLabelInput from '../../components/FloatingLabelInput';

import IconPhoto from './components/IconPhoto';
import IconCamera from './components/IconCamera';
import IconRemovePhoto from './components/IconRemovePhoto';
import DashboardLayout from '../../layouts/DashboardLayout';

export default function (props: any) {
  const { colorMode } = useColorMode();
  const [pass, setPass] = React.useState('');
  const { isOpen, onOpen, onClose } = useDisclose();
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <DashboardLayout title="Edit Profile">
        <VStack
          px={{ base: 4, md: 8 }}
          py={{ base: 4, md: 10 }}
          borderRadius={{ md: '8' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'coolGray.50' },
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { md: 'coolGray.900', base: 'coolGray.800' },
          }}
          borderWidth="1"
        >
          <Center mt="5">
            <Avatar
              height="20"
              width="20"
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg',
              }}
            >
              <Avatar.Badge bg="coolGray.50" p={2}>
                <Pressable
                  onPress={
                    Platform.OS === 'ios'
                      ? onOpen
                      : () => {
                          setModalVisible(!modalVisible);
                        }
                  }
                >
                  <Center top={{ md: '-12px' }}>
                    <Icon
                      size="5"
                      as={Ionicons}
                      color="coolGray.900"
                      name={'camera-outline'}
                    />
                  </Center>
                </Pressable>
              </Avatar.Badge>
            </Avatar>
          </Center>
          <VStack space="8" mt="8">
            <FloatingLabelInput
              isRequired
              p="3"
              type="name"
              label="Full Name"
              borderRadius="4"
              labelColor="#9ca3af"
              labelBGColor={useColorModeValue('#f9fafb', '#111827')}
              defaultValue={pass}
              onChangeText={(txt: any) => setPass(txt)}
              InputRightElement={
                <IconButton
                  variant="unstyled"
                  icon={
                    <Icon
                      size="6"
                      _light={{ color: 'coolGray.400' }}
                      _dark={{ color: 'coolGray.300' }}
                      as={<MaterialIcons name="person" />}
                    />
                  }
                  onPress={() => {
                    console.log('button clicked');
                  }}
                />
              }
              _text={{
                fontSize: 'sm',
                fontWeight: 'medium',
              }}
              _dark={{
                borderColor: 'coolGray.700',
              }}
              _light={{
                borderColor: 'coolGray.300',
              }}
            />
            <FloatingLabelInput
              isRequired
              type="email"
              label="Email"
              borderRadius="4"
              p="3"
              labelColor="#9ca3af"
              labelBGColor={useColorModeValue('#f9fafb', '#111827')}
              defaultValue={pass}
              onChangeText={(txt: any) => setPass(txt)}
              InputRightElement={
                <IconButton
                  variant="unstyled"
                  icon={
                    <Icon
                      size="6"
                      _light={{ color: 'coolGray.400' }}
                      _dark={{ color: 'coolGray.300' }}
                      as={<MaterialIcons name="email" />}
                    />
                  }
                  onPress={() => {
                    console.log('button clicked');
                  }}
                />
              }
              _text={{
                fontSize: 'sm',
                fontWeight: 'medium',
              }}
              _dark={{
                borderColor: 'coolGray.700',
              }}
              _light={{
                borderColor: 'coolGray.300',
              }}
            />
            <FloatingLabelInput
              isRequired
              type="text"
              label="Phone"
              borderRadius="4"
              p="3"
              labelColor="#9ca3af"
              labelBGColor={useColorModeValue('#f9fafb', '#111827')}
              defaultValue={pass}
              onChangeText={(txt: any) => setPass(txt)}
              InputRightElement={
                <IconButton
                  variant="unstyled"
                  icon={
                    <Icon
                      size="6"
                      _light={{ color: 'coolGray.400' }}
                      _dark={{ color: 'coolGray.300' }}
                      as={<MaterialIcons name="phone" />}
                    />
                  }
                  onPress={() => {
                    console.log('button clicked');
                  }}
                />
              }
              _text={{
                fontSize: 'sm',
                fontWeight: 'medium',
              }}
              _dark={{
                borderColor: 'coolGray.700',
              }}
              _light={{
                borderColor: 'coolGray.300',
              }}
            />
          </VStack>
        </VStack>
        <Actionsheet
          hideDragIndicator
          isOpen={isOpen}
          onClose={onClose}
          display={{ base: 'flex', md: 'none' }}
        >
          <Actionsheet.Content
            _light={{ bg: 'coolGray.50' }}
            _dark={{ bg: 'coolGray.800' }}
            borderTopRightRadius={20}
            borderTopLeftRadius={20}
          >
            <Text
              py="4"
              fontSize="xl"
              mr="56"
              fontWeight="medium"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              Profile Picture
            </Text>
            <HStack space="5" alignItems="center" pb="1" mt="2" mr="32">
              <Pressable
                onPress={() => {
                  console.log('hello');
                }}
              >
                <VStack space="1" alignItems="center">
                  <IconPhoto />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    Photos
                  </Text>
                </VStack>
              </Pressable>
              <Pressable
                onPress={() => {
                  console.log('hello');
                }}
              >
                <VStack space="1" alignItems="center">
                  <IconCamera />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    Camera
                  </Text>
                </VStack>
              </Pressable>
              <Pressable
                onPress={() => {
                  console.log('hello');
                }}
              >
                <VStack space="1" alignItems="center">
                  <IconRemovePhoto />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    Remove photo
                  </Text>
                </VStack>
              </Pressable>
            </HStack>
          </Actionsheet.Content>
        </Actionsheet>
        <Modal
          isOpen={modalVisible}
          onClose={setModalVisible}
          size="lg"
          marginX="auto"
          display={{ base: 'none', md: 'flex' }}
          maxWidth="400"
        >
          <Modal.Content
            _dark={{ bg: 'coolGray.800' }}
            _light={{ bg: 'coolGray.50' }}
            pb={{ md: 4, base: 0 }}
          >
            <Text
              py={{ base: 4 }}
              fontSize="xl"
              mr={{ base: 56, md: 40 }}
              fontWeight="medium"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              Profile Picture
            </Text>
            <HStack space="5" alignItems="center" pb="1" mt="2" mr="32">
              <Pressable
                onPress={() => {
                  console.log('hello');
                }}
              >
                <VStack space="1" alignItems="center">
                  <IconPhoto />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    Photos
                  </Text>
                </VStack>
              </Pressable>
              <Pressable
                onPress={() => {
                  console.log('hello');
                }}
              >
                <VStack space="1" alignItems="center">
                  <IconCamera />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    Camera
                  </Text>
                </VStack>
              </Pressable>
              <Pressable
                onPress={() => {
                  console.log('hello');
                }}
              >
                <VStack space="1" alignItems="center">
                  <IconRemovePhoto />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  >
                    Remove photo
                  </Text>
                </VStack>
              </Pressable>
            </HStack>
          </Modal.Content>
        </Modal>
      </DashboardLayout>
    </>
  );
}
