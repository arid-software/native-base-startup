import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  useColorMode,
  Center,
  Pressable,
  Divider,
} from 'native-base';

import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import IconCoder from './components/IconCoder';
import DashboardLayout from '../../layouts/DashboardLayout';

function OptionList(props: any) {
  const list = [
    {
      iconName: 'chat',
      iconText: 'Chat Support',
      secondIcon: 'chevron-right',
    },
    {
      iconName: 'phone',
      iconText: 'Voice Support',
      secondIcon: 'chevron-right',
    },
    {
      iconName: 'email',
      iconText: 'Mail Support',
      secondIcon: 'chevron-right',
    },
  ];
  return (
    <>
      <VStack
        py={{ base: '20', md: '12' }}
        px={{ base: 4, md: 48 }}
        divider={
          <Divider
            _light={{ bg: 'coolGray.300' }}
            _dark={{ bg: 'coolGray.600' }}
            width="100%"
          />
        }
        space="4"
      >
        {list.map((item, index) => {
          return (
            <Box key={index}>
              <Pressable>
                <HStack alignItems="center" justifyContent="space-between">
                  <HStack space="4" alignItems="center">
                    <Center
                      _light={{ bg: 'primary.50' }}
                      _dark={{ bg: 'coolGray.700' }}
                      p="2"
                      rounded="full"
                    >
                      {item.iconName == 'chat' ? (
                        <Icon
                          as={Entypo}
                          name={item.iconName}
                          size="6"
                          _light={{ color: 'primary.900' }}
                          _dark={{ color: 'coolGray.50' }}
                        />
                      ) : (
                        <Icon
                          as={MaterialCommunityIcons}
                          name={item.iconName}
                          size="6"
                          _light={{ color: 'primary.900' }}
                          _dark={{ color: 'coolGray.50' }}
                        />
                      )}
                    </Center>
                    <Text
                      alignItems="center"
                      fontSize="sm"
                      fontWeight="semibold"
                      _light={{ color: 'coolGray.800' }}
                      _dark={{ color: 'coolGray.50' }}
                    >
                      {item.iconText}
                    </Text>
                  </HStack>
                  <Icon
                    as={Feather}
                    name={item.secondIcon}
                    size="6"
                    _light={{ color: 'coolGray.500' }}
                    _dark={{ color: 'coolGray.50' }}
                  />
                </HStack>
              </Pressable>
            </Box>
          );
        })}
      </VStack>
    </>
  );
}

export default function (props: any) {
  const { colorMode } = useColorMode();
  return (
    <DashboardLayout title={'Help & Support'} displaySidebar={false}>
      <VStack
        _light={{ bg: 'white', borderColor: 'coolGray.200' }}
        _dark={{
          bg: { base: 'coolGray.800', md: 'coolGray.900' },
          borderColor: 'coolGray.700',
        }}
        borderRadius={{ md: '8' }}
        borderWidth={{ md: '1' }}
      >
        <Box alignItems="center" mt={{ base: 5, md: 10 }}>
          <IconCoder />
        </Box>
        <Text fontSize="2xl" textAlign="center" bold mt="6">
          How can we help you today?
        </Text>
        <Center>
          <Text
            width={{ base: 72, md: '37%' }}
            mt="2"
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.500' }}
            fontSize="sm"
            textAlign="center"
            lineHeight="lg"
            fontWeight="medium"
          >
            It looks like you are experiencing some problem. We are here to help
            you. Please get in touch with us!
          </Text>
        </Center>
        <OptionList />
      </VStack>
    </DashboardLayout>
  );
}
