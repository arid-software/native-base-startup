import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Button,
  IconButton,
  Hidden,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import IconRate from './components/IconRate';
import DashboardLayout from '../../layouts/DashboardLayout';

const iconName = [
  {
    name: 'ios-star-outline',
  },
  { name: 'ios-star-outline' },
  {
    name: 'ios-star-outline',
  },
  {
    name: 'ios-star-outline',
  },
  {
    name: 'ios-star-outline',
  },
];

export default function RateUs(props: any) {
  return (
    <DashboardLayout title="Rate Us" displaySidebar={false}>
      <VStack
        flex={1}
        px={{ base: 4, md: 8 }}
        py={{ base: 4, md: 8 }}
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
        justifyContent="space-between"
      >
        <VStack px={{ md: 8 }}>
          <VStack
            px="4"
            alignItems="center"
            pt="10"
            pb="4"
            borderRadius={{ md: 8 }}
          >
            <Hidden from="md">
              <IconRate w="170" h="182" />
            </Hidden>
            <Hidden from="base" till="md">
              <IconRate w="270" h="280" />
            </Hidden>

            <Text
              mt="12"
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              _dark={{ color: 'coolGray.50' }}
              _light={{ color: 'coolGray.800' }}
            >
              Your opinion matters to us!
            </Text>
            <Text
              mt="4"
              letterSpacing="0.5"
              fontSize="sm"
              textAlign="center"
              fontWeight="medium"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.400' }}
            >
              We work super hard to make the app better for you, and would love
              to know how would you rate our app?
            </Text>
            <HStack
              space="2"
              alignItems="center"
              justifyContent="center"
              mt={{ base: 12, md: 6 }}
            >
              {iconName.map((item, index) => {
                return (
                  <IconButton
                    borderRadius="full"
                    key={index}
                    icon={
                      <Icon
                        size="6"
                        as={Ionicons}
                        name={item.name}
                        _dark={{ color: 'coolGray.100' }}
                        _light={{ color: 'coolGray.800' }}
                      />
                    }
                  />
                );
              })}
            </HStack>
            <Text mt="3" mb="8" color="coolGray.400" textAlign="center">
              Tap the stars
            </Text>
          </VStack>
        </VStack>
        <VStack w="100%" space="3">
          <Button
            size="md"
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
            }}
            _pressed={{
              _dark: {
                bg: 'primary.500',
              },
            }}
          >
            SUBMIT
          </Button>
          <Button
            size="md"
            borderRadius="4"
            _light={{ borderColor: 'primary.900' }}
            _dark={{ borderColor: 'coolGray.400' }}
            variant="outline"
            _text={{
              fontSize: 'sm',
              fontWeight: 'medium',
              _light: { color: 'primary.900' },
              _dark: { color: 'coolGray.400' },
            }}
          >
            NOT NOW
          </Button>
        </VStack>
      </VStack>
    </DashboardLayout>
  );
}
