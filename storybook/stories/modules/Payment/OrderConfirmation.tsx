import React from 'react';
import { Box, Button, HStack, Text, VStack } from 'native-base';
import IconConfirm from './components/IconConfirm';
import DashboardLayout from '../../layouts/DashboardLayout';

const List = [
  {
    subTotal: 'Sub Total',
    taxes: 'VAT (15%)',
    charges: 'Shipping Charge',
    total: 'Total',
    totalAmount: '$144.35',
    subTotalAmount: '$138.75',
    taxAmount: '$5.05',
    chargesAmount: '$5.55',
    discount: 'Discount',
    discountValue: '- $5.0',
  },
];

export default function () {
  return (
    <DashboardLayout title="Confirmation" displaySidebar={false}>
      <VStack
        _light={{ bg: 'white', borderColor: 'coolGray.200' }}
        _dark={{
          bg: { base: 'coolGray.800', md: 'coolGray.900' },
          borderColor: 'coolGray.800',
        }}
        px={{ base: '8', lg: '32' }}
        py="8"
        space="8"
        justifyContent="space-between"
        borderRadius={{ md: '8' }}
        borderWidth="1"
        flex={1}
      >
        <VStack space="10" alignItems="center">
          <IconConfirm />
          <VStack space="2">
            <Text
              fontSize={{ base: 'xl', md: '3xl' }}
              fontWeight="bold"
              _light={{ color: 'coolGray.900' }}
              _dark={{ color: 'coolGray.50' }}
              textAlign="center"
            >
              Order Placed Successfully!
            </Text>
            <Text
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="normal"
              textAlign="center"
            >
              Congratulations! Your order has been placed. You can track your
              order number #6472883
            </Text>
          </VStack>
        </VStack>
        <VStack>
          <Box
            _light={{ bg: 'white' }}
            _dark={{
              bg: { base: 'coolGray.800', md: 'coolGray.900' },
            }}
          >
            {List.map((item, index) => {
              return (
                <VStack key={index} space="3">
                  <HStack justifyContent="space-between">
                    <Text
                      _light={{ color: 'coolGray.900' }}
                      _dark={{ color: 'coolGray.50' }}
                      fontSize="sm"
                      fontWeight="normal"
                    >
                      {item.subTotal}
                    </Text>
                    <Text
                      _light={{ color: 'coolGray.900' }}
                      _dark={{ color: 'coolGray.50' }}
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      {item.subTotalAmount}
                    </Text>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Text
                      _light={{ color: 'coolGray.900' }}
                      _dark={{ color: 'coolGray.50' }}
                      fontSize="sm"
                      fontWeight="normal"
                    >
                      {item.taxes}
                    </Text>
                    <Text
                      _light={{ color: 'coolGray.900' }}
                      _dark={{ color: 'coolGray.50' }}
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      {item.taxAmount}
                    </Text>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Text
                      _light={{ color: 'coolGray.900' }}
                      _dark={{ color: 'coolGray.50' }}
                      fontSize="sm"
                      fontWeight="normal"
                    >
                      {item.charges}
                    </Text>
                    <Text
                      _light={{ color: 'coolGray.900' }}
                      _dark={{ color: 'coolGray.50' }}
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      {item.chargesAmount}
                    </Text>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Text
                      _light={{ color: 'coolGray.900' }}
                      _dark={{ color: 'coolGray.50' }}
                      fontSize="sm"
                      fontWeight="normal"
                    >
                      {item.discount}
                    </Text>
                    <Text
                      _light={{ color: 'emerald.600' }}
                      _dark={{ color: 'emerald.600' }}
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      {item.discountValue}
                    </Text>
                  </HStack>
                </VStack>
              );
            })}
          </Box>
          <Box
            mx="-2px"
            mt="3"
            _light={{ bg: 'primary.50' }}
            _dark={{
              bg: { base: 'customGray', md: 'customGray' },
            }}
            px="3"
          >
            {List.map((item, index) => {
              return (
                <VStack my="3" key={index}>
                  <HStack justifyContent="space-between">
                    <Text
                      _light={{ color: 'coolGray.900' }}
                      _dark={{ color: 'coolGray.50' }}
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      {item.total}
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      _light={{ color: 'primary.900' }}
                      _dark={{ color: 'coolGray.50' }}
                    >
                      {item.totalAmount}
                    </Text>
                  </HStack>
                </VStack>
              );
            })}
          </Box>
        </VStack>
        <Box mx={{ md: '-12px' }} safeAreaBottom mt={{ base: '20' }}>
          <Button
            borderRadius="4"
            size="lg"
            py={3}
            _light={{ bg: 'primary.900' }}
            _dark={{ bg: 'primary.700', _pressed: { bg: 'primary.500' } }}
            onPress={() =>
              console.log('pair your device with help of this button')
            }
            _text={{
              fontSize: 'sm',
              fontWeight: 'medium',
              color: 'coolGray.50',
            }}
          >
            CONTINUE SHOPPING
          </Button>
        </Box>
      </VStack>
    </DashboardLayout>
  );
}
