import React, { useState } from 'react';
import { Text, VStack, Button, Modal, Center } from 'native-base';
import IconLady from './components/IconLady';
import DashboardLayout from '../../layouts/DashboardLayout';

export default function ConfirmationModal() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <DashboardLayout
      title="Confirmation modal"
      displayScreenTitle={false}
      displaySidebar={false}
    >
      <Center flex={1}>
        <Button onPress={() => setIsOpen(true)}>Open Modal</Button>
      </Center>
      <Modal isOpen={isOpen} size="md" onClose={() => setIsOpen(false)}>
        <Modal.Content
          _dark={{ bg: 'coolGray.900' }}
          _light={{ bg: 'white' }}
          px={{ base: '6', md: '2' }}
          py="8"
          maxWidth={{ base: '368px', md: '540px' }}
        >
          <VStack
            width="100%"
            borderRadius="lg"
            alignItems="center"
            justifyContent="center"
            space="6"
          >
            <Text
              fontSize="lg"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              fontWeight="semibold"
            >
              Thank you for shopping!
            </Text>
            <IconLady />
            <VStack alignItems="center">
              <Text
                fontSize="md"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontWeight="bold"
              >
                September 7, 2021
              </Text>
              <Text
                fontSize="xs"
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.400' }}
                fontWeight="medium"
              >
                Estimated Delivery
              </Text>
            </VStack>

            <Text
              fontSize="sm"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.300' }}
              w={{ base: '56', md: '64' }}
              lineHeight="sm"
              textAlign="center"
              letterSpacing="0.2"
            >
              Your orders has been received. You will receive the confirmation
              email with the order details.
            </Text>
            <Button
              _dark={{
                bg: 'primary.700',
                _focus: { bg: 'primary.700' },
                _pressed: { bg: 'primary.500' },
              }}
              _light={{ bg: 'primary.900', _focus: { bg: 'primary.900' } }}
              px="8"
              w={{ base: '240', md: '400' }}
              _text={{ fontSize: 'xs', fontWeight: 'semibold' }}
            >
              VIEW ORDER DETAILS
            </Button>
          </VStack>
        </Modal.Content>
      </Modal>
    </DashboardLayout>
  );
}
