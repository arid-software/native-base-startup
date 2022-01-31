import React from 'react';
import { HStack, Text, VStack, Center, Divider } from 'native-base';

import DashboardLayout from '../../layouts/DashboardLayout';
import IconTrackOrders from './components/IconTrackOrders';
import IconTrackOrderColor from './components/IconTrackOrderColor';

export default function (props: any) {
  return (
    <>
      <DashboardLayout title="Track Order">
        <VStack
          borderRadius={{ md: '8' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'primary.50', md: 'white' },
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { md: 'coolGray.900', base: 'customGray' },
          }}
          borderWidth={{ md: '1' }}
          flexGrow={1}
        >
          <VStack
            px={{ base: 4, lg: 32 }}
            py={{ base: 4, md: 8 }}
            _light={{ bg: { base: 'white' } }}
            _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
          >
            <HStack justifyContent="flex-start">
              <VStack mt={1}>
                <IconTrackOrderColor />
                <Divider
                  orientation="vertical"
                  _light={{ bg: 'primary.900' }}
                  _dark={{ bg: 'violet.500' }}
                  size=".9"
                  ml="2"
                  flex={1}
                />
              </VStack>
              <VStack mb="5" flex={1} ml="4">
                <Text
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.50' }}
                  fontWeight="semibold"
                  fontSize="sm"
                >
                  Order Placed
                </Text>

                <Text color="coolGray.400" fontWeight="normal" fontSize="xs">
                  We have received your order on 28-May-2021, 5:38pm
                </Text>
              </VStack>
            </HStack>
            <HStack justifyContent="flex-start">
              <VStack>
                <IconTrackOrderColor />
                <Divider
                  orientation="vertical"
                  _light={{ bg: 'primary.900' }}
                  _dark={{ bg: 'violet.500' }}
                  size=".9"
                  ml="2"
                  flex={1}
                />
              </VStack>
              <VStack mb="5" flex={1} ml="4" mt={-1}>
                <Text
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.50' }}
                  fontWeight="semibold"
                  fontSize="sm"
                >
                  Order Packed
                </Text>

                <Text color="coolGray.400" fontWeight="normal" fontSize="xs">
                  Seller has processed your order on 29th Your item has been
                  picked up by courier partner.30-May-2021, 5:38{''}pm
                </Text>
              </VStack>
            </HStack>
            <HStack justifyContent="flex-start">
              <VStack>
                <VStack borderRadius="8" bg="coolGray.800">
                  <IconTrackOrders />
                </VStack>
                <VStack flex={1} height="8" width="0.5" space="1" ml="7px">
                  <Center py="0.5" bgColor="coolGray.400"></Center>
                  <Center py="0.5" bgColor="coolGray.400"></Center>
                  <Center py="0.5" bgColor="coolGray.400"></Center>
                  <Center py="0.5" bgColor="coolGray.400"></Center>
                  <Center py="0.5" bgColor="coolGray.400"></Center>
                  <Center py="0.5" bgColor="coolGray.400"></Center>
                  <Center py="0.5" bgColor="coolGray.400"></Center>
                </VStack>
              </VStack>
              <VStack mb="5" ml="4" mt={-1}>
                <Text color="coolGray.400" fontWeight="semibold" fontSize="sm">
                  Shipped
                </Text>
                <Text color="coolGray.400" fontWeight="normal" fontSize="xs">
                  Your item has been picked up not yet shipped
                </Text>
              </VStack>
            </HStack>
            <HStack justifyContent="flex-start">
              <VStack mt={1}>
                <IconTrackOrders />
              </VStack>
              <VStack ml="4">
                <Text
                  color="coolGray.400"
                  fontWeight="semibold"
                  fontSize="sm"
                  pt="0"
                >
                  Out for Delivery
                </Text>
                <Text color="coolGray.400" fontWeight="normal" fontSize="xs">
                  Your order is out for delivery
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </DashboardLayout>
    </>
  );
}
