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
  Center,
  IconButton,
  Button,
  Modal,
  Radio,
  Divider,
  Hidden,
} from 'native-base';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';
function Dropdown(props: any) {
  return (
    <VStack>
      <Radio.Group defaultValue="1" name="MyRadioGroup">
        <HStack justifyContent="space-between" width="100%">
          <HStack space="3" alignItems="center">
            <Avatar
              source={require('../../assets/women.jpg')}
              width="9"
              height="9"
            />
            <VStack>
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontSize="sm"
                fontWeight="bold"
              >
                Jane Doe
              </Text>
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
              >
                janedoe2@mydomain.com
              </Text>
            </VStack>
          </HStack>
          <Center>
            <Radio value="one"></Radio>
          </Center>
        </HStack>
        <Divider mt="5" />
        <HStack justifyContent="space-between" pt="6" width="100%">
          <HStack space="3" alignItems="center">
            <Avatar
              source={require('../../assets/women.jpg')}
              width="9"
              height="9"
            />
            <VStack>
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontSize="sm"
                fontWeight="bold"
              >
                Harry
              </Text>
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
              >
                Harrilegiee2@mydomain.com
              </Text>
            </VStack>
          </HStack>
          <Center>
            <Radio value="two"></Radio>
          </Center>
        </HStack>
      </Radio.Group>
    </VStack>
  );
}
export default function DeleteAccount(props: any) {
  const [dropdownTab, setDropdownTab] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(true);
  const { colorMode } = useColorMode();

  return (
    <DashboardLayout title={'Manage Accounts'}>
      <VStack
        px={{ base: 4, md: 8 }}
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
        space="9"
      >
        <HStack
          pb="3"
          alignItems="center"
          borderBottomWidth="1"
          _light={{ borderColor: 'coolGray.200' }}
          _dark={{ borderColor: 'coolGray.500' }}
          justifyContent="space-between"
        >
          <HStack space="4" alignItems="center">
            <Avatar
              source={require('../../assets/women.jpg')}
              width="10"
              height="10"
            />
            <VStack space="1">
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontSize="sm"
                fontWeight="bold"
              >
                Jane Doe
              </Text>
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
              >
                janedoe2@mydomain.com
              </Text>
            </VStack>
          </HStack>
          <IconButton
            p="0"
            variant="unstyled"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name={'delete'}
                size="25"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.300' }}
              />
            }
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </HStack>
        <Pressable
          onPress={() => {
            console.log('this onPress will add another account');
          }}
        >
          <HStack alignItems="center" space="3">
            <Icon
              as={AntDesign}
              name={'adduser'}
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              size="6"
            />
            <Text
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              fontSize="md"
              fontWeight="medium"
            >
              Add another account
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          onPress={() => {
            setDropdownTab(!dropdownTab);
          }}
        >
          <HStack justifyContent="space-between">
            <HStack space="4" alignItems="center">
              <Icon
                as={MaterialCommunityIcons}
                name={'account-box-multiple-outline'}
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                size="6"
              />
              <VStack>
                <Text
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.50' }}
                  fontSize="md"
                  fontWeight="medium"
                >
                  Switch Account
                </Text>
              </VStack>
            </HStack>
            <Center>
              {!dropdownTab ? (
                <Icon
                  as={MaterialCommunityIcons}
                  name={'chevron-up'}
                  size="25"
                />
              ) : (
                <Icon
                  as={MaterialCommunityIcons}
                  name={'chevron-down'}
                  size="25"
                />
              )}
            </Center>
          </HStack>
        </Pressable>
        {dropdownTab ? (
          <Dropdown
            modalVisible={dropdownTab}
            setModalVisible={setDropdownTab}
          />
        ) : null}
      </VStack>
      <Modal isOpen={modalVisible} onClose={setModalVisible}>
        <Modal.Content _light={{ bg: 'white' }} _dark={{ bg: 'coolGray.700' }}>
          <Modal.Body>
            <VStack
              space="4"
              justifyContent="center"
              alignItems="center"
              px="4"
              py="4"
            >
              <Hidden from="base" till="md">
                <Modal.CloseButton />
              </Hidden>
              <Avatar
                source={require('../../assets/women.jpg')}
                w="20"
                h="20"
              />
              <Text textAlign="center">
                Are you sure you want to remove your account?
              </Text>
              <HStack space="2" w="100%" justifyContent="center">
                <Button
                  onPress={() => console.log('button pressed')}
                  flex={1}
                  size="sm"
                  borderRadius="4"
                  variant="outline"
                  borderColor="coolGray.400"
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium',
                    color: 'coolGray.400',
                  }}
                >
                  NO
                </Button>
                <Button
                  onPress={() => console.log('button pressed')}
                  flex={1}
                  size="sm"
                  borderRadius="4"
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium',
                  }}
                  _light={{
                    bg: 'primary.900',
                  }}
                  _dark={{
                    bg: 'primary.700',
                    _pressed: { bg: 'primary.500' },
                  }}
                >
                  YES
                </Button>
              </HStack>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </DashboardLayout>
  );
}
