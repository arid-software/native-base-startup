import React, { useState } from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import DashboardLayout from '../../../layouts/DashboardLayout';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
  Button,
  HStack,
  VStack,
  Text,
  Icon,
  Input,
  Pressable,
} from 'native-base';

export default function AutoDetectLocation() {
  const [textInput, setTextInput] = useState('');

  return (
    <DashboardLayout title="Add Address">
      <Input
        mx={{ base: '0', md: '10', lg: '40' }}
        zIndex={1}
        variant="unstyled"
        position="absolute"
        top="5"
        left={{ md: '20', lg: '40' }}
        right={{ md: '20', lg: '40' }}
        marginX={6}
        py={4}
        value={textInput}
        onChangeText={setTextInput}
        size="lg"
        _light={{
          bg: 'coolGray.50',
          placeholderTextColor: 'coolGray.500',
          borderColor: 'coolGray.400',
        }}
        _dark={{
          bg: 'coolGray.800',
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
        InputRightElement={
          <Pressable
            onPress={() => {
              setTextInput('');
            }}
          >
            <Icon
              as={<AntDesign name="close" />}
              size="sm"
              mr="3"
              _light={{
                color: 'coolGray.500',
              }}
              _dark={{
                color: 'coolGray.400',
              }}
            />
          </Pressable>
        }
        placeholder="Thornridge Cir. Syracuse, Connecticut"
      />
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        region={{
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
          latitude: 12.91095437167937,
          longitude: 77.60180353953143,
        }}
      >
        <Marker
          draggable
          coordinate={{
            latitude: 12.91095437167937,
            longitude: 77.60180353953143,
          }}
        />
      </MapView>
      <VStack
        px={{ base: 4 }}
        pt={4}
        _light={{ bg: 'white' }}
        _dark={{ bg: 'coolGray.900' }}
        pb={6}
      >
        <HStack
          _dark={{
            bg: 'coolGray.800',
          }}
          _light={{ bg: 'primary.100' }}
          px={{ base: 4 }}
          py={3}
          alignItems="center"
        >
          <Icon
            as={FontAwesome}
            name="map-marker"
            _light={{ color: 'primary.900' }}
            _dark={{ color: 'primary.700' }}
          />

          <Text
            fontSize="md"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'white' }}
          >
            Thornridge Cir. Syracuse, Connecticut
          </Text>
        </HStack>
        <Text
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'white' }}
          color="black"
          fontSize="sm"
          fontWeight="medium"
          mt={{ base: 4 }}
        >
          Building Name/ House No.
        </Text>
        <Input
          placeholder="2118"
          borderColor="coolGray.400"
          mt={{ base: 4 }}
          fontSize="md"
          fontWeight="normal"
          py={3}
          _dark={{
            borderColor: 'coolGray.600',
          }}
        />
        <Text
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'white' }}
          fontSize="sm"
          fontWeight="medium"
          mt={{ base: 4 }}
        >
          Address Label
        </Text>
        <HStack space={{ base: 1 }} justifyContent="space-between" mt={3}>
          <Button
            onPress={() => {
              console.log('hello');
            }}
            variant="outline"
            _text={{
              color: 'primary.900',
              _dark: {
                color: 'coolGray.50',
              },
              fontSize: 'md',
            }}
            width="30%"
            height={12}
            _light={{
              bg: 'primary.100',
              borderColor: 'primary.100',
            }}
            _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
          >
            Home
          </Button>
          <Button
            onPress={() => {
              console.log('hello');
            }}
            variant="outline"
            borderColor="coolGray.400"
            _text={{
              color: 'coolGray.400',
              fontWeight: 'normal',
              fontSize: 'md',
            }}
            _dark={{
              borderColor: 'coolGray.500',
            }}
            width="30%"
          >
            Office
          </Button>
          <Button
            onPress={() => {
              console.log('hello');
            }}
            variant="outline"
            borderColor="coolGray.400"
            _text={{
              color: 'coolGray.400',
              fontWeight: 'normal',
              fontSize: 'md',
            }}
            _dark={{
              borderColor: 'coolGray.500',
            }}
            width="30%"
          >
            Other
          </Button>
        </HStack>
        <Button
          mt={{ base: 5 }}
          variant="unstyled"
          bg="primary.900"
          _text={{
            color: 'white',
            fontSize: 'sm',
          }}
          onPress={() => {
            console.log('hello');
          }}
          _pressed={{ bg: 'primary.700' }}
          py="3"
        >
          SAVE ADDRESS
        </Button>
      </VStack>
    </DashboardLayout>
  );
}
