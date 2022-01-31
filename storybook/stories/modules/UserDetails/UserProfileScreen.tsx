import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Button,
  useColorModeValue,
  useColorMode,
  useBreakpointValue,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import DashboardLayout from '../../layouts/DashboardLayout';

export default function (props: any) {
  const { colorMode } = useColorMode();
  const bgColor = useBreakpointValue({
    base: '#1f2937',
    lg: '#111827',
    md: '#111827',
    xl: '#111827',
  });
  return (
    <>
      <DashboardLayout title="Profile">
        <VStack
          px={{ base: 4, md: 12, lg: 24, xl: 32 }}
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
          borderWidth={{ md: '1' }}
          borderBottomWidth="1"
          space="4"
        >
          <HStack mb="3" alignItems="center" justifyContent="space-between">
            <Avatar source={require('../../assets/women.jpg')} w="24" h="24" />
            <Button
              size="sm"
              _light={{
                borderColor: 'primary.900',
                color: 'primary.900',
                _text: { color: 'primary.900' },
              }}
              _dark={{
                borderColor: 'coolGray.400',
                color: 'coolGray.400',
                _text: { color: 'coolGray.400' },
              }}
              variant="outline"
              startIcon={
                <Icon
                  as={MaterialIcons}
                  name="mode-edit"
                  _light={{
                    color: 'primary.900',
                  }}
                  _dark={{
                    color: 'coolGray.400',
                  }}
                  color="#45268F"
                  size="5"
                />
              }
            >
              Edit Profile
            </Button>
          </HStack>
          <HStack alignItems="center" justifyContent="space-between">
            <FloatingLabelInput
              w="100%"
              p="3"
              isRequired
              borderRadius="4"
              label="First Name"
              labelColor="#9CA3AF"
              defaultValue={'Jon'}
              fontWeight="semibold"
              containerWidth="48%"
              labelBGColor={useColorModeValue('#f9fafb', bgColor)}
              _text={{
                fontSize: 'md',
                fontWeight: 'semibold',
              }}
              _dark={{
                borderColor: 'coolGray.700',
              }}
              _light={{
                borderColor: 'coolGray.300',
              }}
            />
            <FloatingLabelInput
              w="100%"
              p="3"
              isRequired
              borderRadius="4"
              label="Last Name"
              labelColor="#9CA3AF"
              fontWeight="semibold"
              defaultValue={'Doe'}
              containerWidth="48%"
              labelBGColor={useColorModeValue('#f9fafb', bgColor)}
              _text={{
                fontSize: 'md',
                fontWeight: 'semibold',
              }}
              _dark={{
                borderColor: 'coolGray.700',
              }}
              _light={{
                borderColor: 'coolGray.300',
              }}
            />
          </HStack>

          <FloatingLabelInput
            fontWeight="semibold"
            isRequired
            p="3"
            borderRadius="4"
            label="Email"
            labelColor="#9CA3AF"
            defaultValue={'jondoe@example.com'}
            labelBGColor={useColorModeValue('#f9fafb', bgColor)}
            _text={{
              fontSize: 'md',
              fontWeight: 'semibold',
            }}
            _dark={{
              borderColor: 'coolGray.700',
            }}
            _light={{
              borderColor: 'coolGray.300',
            }}
          />
          <FloatingLabelInput
            fontWeight="semibold"
            isRequired
            p="3"
            borderRadius="4"
            label="Contact Number"
            labelColor="#9CA3AF"
            defaultValue={'+91-8239635900'}
            labelBGColor={useColorModeValue('#f9fafb', bgColor)}
            _text={{
              fontSize: 'md',
              fontWeight: 'semibold',
            }}
            _dark={{
              borderColor: 'coolGray.700',
            }}
            _light={{
              borderColor: 'coolGray.300',
            }}
          />
          <FloatingLabelInput
            fontWeight="semibold"
            isRequired
            p="3"
            borderRadius="4"
            label="Address"
            labelColor="#9CA3AF"
            defaultValue={'301, Bakers Street'}
            labelBGColor={useColorModeValue('#f9fafb', bgColor)}
            _text={{
              fontSize: 'md',
              fontWeight: 'semibold',
            }}
            _dark={{
              borderColor: 'coolGray.700',
            }}
            _light={{
              borderColor: 'coolGray.300',
            }}
          />
          <HStack alignItems="center" justifyContent="space-between">
            <FloatingLabelInput
              fontWeight="semibold"
              w="100%"
              isRequired
              p="3"
              borderRadius="4"
              label="City"
              labelColor="#9CA3AF"
              defaultValue={'Rochester'}
              labelBGColor={useColorModeValue('#f9fafb', bgColor)}
              containerWidth="48%"
              _text={{
                fontSize: 'md',
                fontWeight: 'semibold',
              }}
              _dark={{
                borderColor: 'coolGray.700',
              }}
              _light={{
                borderColor: 'coolGray.300',
              }}
            />
            <FloatingLabelInput
              fontWeight="semibold"
              w="100%"
              p="3"
              isRequired
              borderRadius="4"
              label="State"
              labelColor="#9CA3AF"
              defaultValue={'New York'}
              labelBGColor={useColorModeValue('#f9fafb', bgColor)}
              containerWidth="48%"
              _text={{
                fontSize: 'md',
                fontWeight: 'semibold',
              }}
              _dark={{
                borderColor: 'coolGray.700',
              }}
              _light={{
                borderColor: 'coolGray.300',
              }}
            />
          </HStack>
          <HStack alignItems="center" justifyContent="space-between">
            <FloatingLabelInput
              fontWeight="semibold"
              w="100%"
              isRequired
              borderRadius="4"
              label="Zip Code"
              p="3"
              labelColor="#9CA3AF"
              defaultValue={'11357'}
              labelBGColor={useColorModeValue('#f9fafb', bgColor)}
              containerWidth="48%"
              _text={{
                fontSize: 'md',
                fontWeight: 'semibold',
              }}
              _dark={{
                borderColor: 'coolGray.700',
              }}
              _light={{
                borderColor: 'coolGray.300',
              }}
            />
            <FloatingLabelInput
              fontWeight="semibold"
              w="100%"
              isRequired
              borderRadius="4"
              label="Country"
              p="3"
              labelColor="#9CA3AF"
              defaultValue={'USA'}
              labelBGColor={useColorModeValue('#f9fafb', bgColor)}
              containerWidth="48%"
              _text={{
                fontSize: 'md',
                fontWeight: 'semibold',
              }}
              _dark={{
                borderColor: 'coolGray.700',
              }}
              _light={{
                borderColor: 'coolGray.300',
              }}
            />
          </HStack>
        </VStack>
      </DashboardLayout>
    </>
  );
}
