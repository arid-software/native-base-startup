import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  ScrollView,
  Divider,
  Button,
  Spacer,
} from 'native-base';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Platform } from 'react-native';

const address = [
  {
    iconName: 'map-marker',
    place: 'Home',
    subAddress: '4517 Washington Ave. Manchester, Kentucky 39495',
  },
  {
    iconName: 'map-marker',
    place: 'Others',
    subAddress:
      '4517 Washington Ave. Manchester, Washington State University, Kentucky 39495',
  },
];

function AddressItem({ item, index }: any) {
  return (
    <VStack space="4" key={index}>
      <HStack space="3">
        <Icon
          size="6"
          name={item.iconName}
          as={MaterialCommunityIcons}
          _dark={{ color: 'violet.700' }}
          _light={{ color: 'primary.900' }}
        />
        <VStack space="2">
          <Text
            fontWeight="bold"
            fontSize="lg"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.200' }}
          >
            {item.place}
          </Text>
          <Text
            fontSize="xs"
            fontWeight="normal"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.300' }}
            lineHeight="sm"
            width={{ base: '80', md: '100%' }}
          >
            {item.subAddress}
          </Text>
        </VStack>
      </HStack>
      <Button.Group
        space="4"
        alignItems="center"
        ml={{ base: '9' }}
        variant="outline"
      >
        <Button
          py={{ base: 1, md: 2 }}
          flex={{ base: '-1', md: '1' }}
          _light={{
            borderColor: 'coolGray.300',
          }}
          _dark={{
            borderColor: 'coolGray.400',
          }}
          _web={{
            _light: {
              borderColor: 'primary.900',
            },
            _dark: {
              borderColor: 'coolGray.400',
            },
          }}
          _hover={{
            _dark: { bg: 'coolGray.700' },
            _light: { bg: 'coolGray.50' },
            borderColor: 'coolGray.400',
          }}
          _pressed={{
            _dark: { bg: 'coolGray.800' },
            _light: { bg: 'coolGray.100' },
            borderColor: 'coolGray.400',
          }}
        >
          <HStack space="3" alignItems="center" justifyContent="center">
            <Icon
              size="6"
              name="edit"
              as={MaterialIcons}
              _light={{
                color: Platform.OS === 'web' ? 'primary.900' : 'coolGray.400',
              }}
              _dark={{
                color: Platform.OS === 'web' ? 'coolGray.400' : 'coolGray.400',
              }}
            />

            <Text
              fontSize="sm"
              fontWeight="semibold"
              _light={{
                color: Platform.OS === 'web' ? 'primary.900' : 'coolGray.400',
              }}
              _dark={{
                color: Platform.OS === 'web' ? 'coolGray.400' : 'coolGray.400',
              }}
            >
              Edit
            </Text>
          </HStack>
        </Button>
        <Button
          flex={{ base: '-1', md: '1' }}
          py={{ base: 1, md: 2 }}
          _light={{
            borderColor: Platform.OS === 'web' ? 'primary.900' : 'coolGray.300',
          }}
          _dark={{
            borderColor:
              Platform.OS === 'web' ? 'coolGray.400' : 'coolGray.400',
          }}
          _hover={{
            _dark: { bg: 'coolGray.700' },
            _light: { bg: 'coolGray.50' },
            borderColor: 'coolGray.400',
          }}
          _pressed={{
            _dark: { bg: 'coolGray.800' },
            _light: { bg: 'coolGray.100' },
            borderColor: 'coolGray.400',
          }}
        >
          <HStack space="3" alignItems="center" justifyContent="center">
            <Icon
              size="6"
              name="delete"
              as={MaterialIcons}
              _light={{
                color: Platform.OS === 'web' ? 'primary.900' : 'coolGray.400',
              }}
              _dark={{
                color: Platform.OS === 'web' ? 'coolGray.400' : 'coolGray.400',
              }}
            />
            <Text
              fontSize="sm"
              fontWeight="semibold"
              _light={{
                color: Platform.OS === 'web' ? 'primary.900' : 'coolGray.400',
              }}
              _dark={{
                color: Platform.OS === 'web' ? 'coolGray.400' : 'coolGray.400',
              }}
            >
              Delete
            </Text>
          </HStack>
        </Button>
      </Button.Group>
      <Divider _dark={{ bg: 'coolGray.600' }} _light={{ bg: 'coolGray.300' }} />
    </VStack>
  );
}

function AddressGroup(props: any) {
  return (
    <VStack
      space="6"
      flex="1"
      rounded={{ md: 'lg' }}
      px={{ base: '4', md: '12', lg: '32' }}
      pt={{ base: '6', md: '8' }}
      pb={{ base: '4', md: '8' }}
      _light={{
        bg: 'white',
        borderColor: 'coolGray.200',
      }}
      _dark={{
        bg: { base: 'coolGray.800', md: 'coolGray.900' },
        borderColor: 'coolGray.800',
      }}
      borderWidth={{ md: '1' }}
    >
      <Text
        fontSize="sm"
        fontWeight="medium"
        _light={{ color: 'coolGray.500' }}
        _dark={{ color: { base: 'coolGray.300', md: 'coolGray.300' } }}
      >
        Saved Addresses
      </Text>
      <ScrollView>
        <VStack space="7">{props.children}</VStack>
      </ScrollView>
      <Spacer />
      <Button
        py="3"
        _dark={{ bg: 'primary.700', _pressed: { bg: 'primary.500' } }}
        _light={{ bg: 'primary.900' }}
      >
        ADD NEW ADDRESS
      </Button>
    </VStack>
  );
}

export default function (props: any) {
  return (
    <DashboardLayout
      title="Manage Addresses"
      displayMenuButton
      displayNotificationButton
    >
      <AddressGroup>
        {address.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <AddressItem item={item} index={index} />
            </React.Fragment>
          );
        })}
      </AddressGroup>
    </DashboardLayout>
  );
}
