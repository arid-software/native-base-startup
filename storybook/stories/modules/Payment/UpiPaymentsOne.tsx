import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Button,
  Pressable,
  Input,
} from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import IconMobile from './components/IconMobile';
import DashboardLayout from '../../layouts/DashboardLayout';

export default function UpiPaymentsOne() {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);
  return (
    <DashboardLayout title="UPI Payment">
      <VStack
        _light={{ bg: 'white', borderColor: 'coolGray.200' }}
        _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.800' }}
        flex={1}
        height="100%"
        justifyContent="space-between"
        alignItems="center"
        py="8"
        borderRadius={{ md: '8' }}
        borderWidth="1"
      >
        <VStack alignItems="center" space="4">
          <IconMobile />
          <VStack space="1">
            <Text
              fontSize="xl"
              fontWeight="bold"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              ENTER 4-DIGIT UPI PIN
            </Text>
            <HStack alignItems="center">
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.50' }}
                fontWeight="medium"
              >
                Sending to
              </Text>
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontSize="sm"
                fontWeight="bold"
                ml="1"
              >
                Kevinjohn21@okaxis
              </Text>
            </HStack>
          </VStack>
        </VStack>

        <VStack space="4" mb={{ base: 32 }}>
          <HStack space="2">
            {[1, 2, 3, 4].map((e, i) => (
              <Input
                type={show ? 'text' : 'password'}
                key={i}
                variant="underlined"
                boxSize="12"
                textAlign="center"
                borderBottomWidth="2"
                fontSize="lg"
              />
            ))}
          </HStack>

          <Box justifyContent="center" alignItems="center">
            <Pressable onPress={console.log(show)}>
              <HStack alignItems="center" space="2">
                <Pressable onPress={handleClick}>
                  {show ? (
                    <Icon
                      as={Ionicons}
                      name={'eye-off'}
                      size="5"
                      color="coolGray.400"
                    />
                  ) : (
                    <Icon
                      as={Ionicons}
                      name={'eye'}
                      size="5"
                      color="coolGray.400"
                    />
                  )}
                </Pressable>
                <Text color="coolGray.400" fontSize="md" fontWeight="normal">
                  {show ? "Don't Show" : 'Show'}
                </Text>
              </HStack>
            </Pressable>
          </Box>
        </VStack>

        <Box width="100%" px={{ base: 4, md: 28, xl: 40 }} safeAreaBottom>
          <Button
            borderRadius="4"
            width="100%"
            py="4"
            _light={{ bg: 'primary.900' }}
            _dark={{ bg: 'primary.700', _pressed: { bg: 'primary.500' } }}
            onPress={() => console.log('Send')}
            _text={{
              fontSize: 'sm',
              fontWeight: 'medium',
              letterSpacing: '0.6',
              color: 'coolGray.50',
            }}
          >
            PROCEED
          </Button>
        </Box>
      </VStack>
    </DashboardLayout>
  );
}
