import React, { useEffect, useState } from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import DashboardLayout from '../../../layouts/DashboardLayout';
//@ts-ignore
import MapView, { PROVIDER_GOOGLE } from 'react-native-web-maps';
import {
  Button,
  HStack,
  VStack,
  Text,
  Icon,
  Input,
  Pressable,
} from 'native-base';
import Constants from 'expo-constants';

const GOOGLE_MAPS_API_KEY = Constants?.manifest?.extra?.GOOGLE_MAPS_API_KEY;
const MAP_SCRIPT_WITH_API_KEY = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;

export default function Map() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    if (!document.body.dataset.mapLoaded) {
      const mapScript = document.createElement('script');
      mapScript.src = MAP_SCRIPT_WITH_API_KEY;
      mapScript.onload = () => {
        document.body.dataset.mapLoaded = 'true';
        setMapLoaded(true);
      };
      document.head.appendChild(mapScript);
    } else {
      setMapLoaded(true);
    }
  }, []);

  return (
    <>
      {mapLoaded ? (
        <DashboardLayout title="Add Address" displaySidebar={false}>
          <VStack
            safeAreaBottom
            flex="1"
            space={{ base: '4', md: '5' }}
            px={{ base: '0', md: '10', lg: '40' }}
            py={{ base: '0', md: '8' }}
            pb={{ base: '4', md: '8' }}
            rounded={{ md: 'lg' }}
            borderWidth={{ base: '0', md: '1' }}
            _light={{
              bg: { md: 'white', base: 'primary.50' },
              borderColor: 'coolGray.200',
            }}
            _dark={{
              bg: { base: 'coolGray.700', md: 'coolGray.900' },
              borderColor: 'coolGray.700',
            }}
          >
            <Input
              mx={{ base: '0', md: '10', lg: '40' }}
              zIndex={1}
              variant="unstyled"
              position="absolute"
              top="16"
              left={{ md: '20', lg: '40' }}
              right={{ md: '20', lg: '40' }}
              marginX={6}
              value={textInput}
              onChangeText={setTextInput}
              py={4}
              size="lg"
              _light={{
                bg: 'coolGray.50',
                placeholderTextColor: 'coolGray.500',
                borderColor: 'coolGary.400',
              }}
              _dark={{
                bg: 'coolGray.800',
                borderColor: 'coolGary.400',
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
              placeholder="Search Address"
            />
            <MapView
              style={{
                height: 400,
              }}
              provider={PROVIDER_GOOGLE}
              region={{
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                latitude: 12.91095437167937,
                longitude: 77.60180353953143,
              }}
            >
              <MapView.Marker
                draggable
                coordinate={{
                  latitude: 12.91095437167937,
                  longitude: 77.60180353953143,
                }}
              />
            </MapView>
            <VStack
              pt={4}
              _light={{ bg: 'white' }}
              _dark={{ bg: 'coolGray.900' }}
            >
              <HStack
                py={2}
                px={{ base: 4 }}
                _light={{ bg: 'primary.100' }}
                _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.500' }}
                bg="primary.900"
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
                _dark={{ color: 'coolGray.50' }}
                fontSize="sm"
                mt={{ base: 4 }}
                fontWeight="normal"
              >
                Building Name / House No.
              </Text>
              <Input
                py={3}
                fontSize="md"
                mt={{ base: 4 }}
                placeholder="2118"
                fontWeight="normal"
                borderColor="coolGray.300"
                _dark={{
                  borderColor: 'coolGray.600',
                }}
              />
              <Text
                fontSize="sm"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                mt={{ base: 4 }}
                fontWeight="normal"
              >
                Address Label
              </Text>
              <HStack
                space={{ base: 1 }}
                justifyContent={{ base: 'space-between', md: 'flex-start' }}
                mt={3}
              >
                <Button
                  width={{ base: '30%', md: '20%', lg: '16%' }}
                  height={12}
                  variant="outline"
                  borderColor="primary.900"
                  _text={{
                    color: 'primary.900',
                    fontWeight: 'normal',
                    fontSize: 'md',
                    _dark: {
                      color: 'coolGray.50',
                    },
                  }}
                  onPress={() => console.log('hello')}
                  _light={{
                    bg: 'primary.100',
                    borderColor: 'primary.100',
                  }}
                  _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
                >
                  Home
                </Button>
                <Button
                  width={{ base: '30%', md: '20%', lg: '16%' }}
                  variant="outline"
                  ml={{ base: 1, md: 3, lg: 4 }}
                  borderColor="coolGray.300"
                  _text={{
                    color: 'coolGray.400',
                    fontWeight: 'normal',
                    fontSize: 'md',
                  }}
                  _dark={{
                    borderColor: 'coolGray.500',
                  }}
                  onPress={() => console.log('hello')}
                >
                  Office
                </Button>
                <Button
                  width={{ base: '30%', md: '20%', lg: '16%' }}
                  variant="outline"
                  ml={{ base: 1, md: 3, lg: 4 }}
                  borderColor="coolGray.300"
                  _text={{
                    color: 'coolGray.400',
                    fontWeight: 'normal',
                    fontSize: 'md',
                  }}
                  _dark={{
                    borderColor: 'coolGray.500',
                  }}
                  onPress={() => console.log('hello')}
                >
                  Other
                </Button>
              </HStack>
              <Button
                py="3"
                mt={{ base: 5 }}
                bg="primary.900"
                _dark={{ bg: 'primary.700' }}
                variant="unstyled"
                onPress={() => console.log('hello')}
                _text={{ color: 'white', fontSize: 'sm' }}
                _pressed={{ bg: 'primary.800' }}
              >
                SAVE ADDRESS
              </Button>
            </VStack>
          </VStack>
        </DashboardLayout>
      ) : (
        'Loading ...'
      )}
    </>
  );
}
