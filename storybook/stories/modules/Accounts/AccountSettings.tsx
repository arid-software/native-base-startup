import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Pressable,
  useColorMode,
  Button,
  Progress,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import IconPassword from './components/IconPassword';
import IconGeneral from './components/IconGeneral';
import IconManageAccount from './components/IconManageAccount';
import IconLanguage from './components/IconLanguage';
import IconLinkedAccounts from './components/IconLinkedAccounts';
import IconDisableAccount from './components/IconDisableAccount';
import DashboardLayout from '../../layouts/DashboardLayout';

const mainlst = [
  {
    svg: <IconPassword size="6" />,
    iconText: 'Change password',
    secondIconName: 'chevron-right',
  },
  {
    svg: <IconGeneral />,
    iconText: 'General',
    secondIconName: 'chevron-right',
  },
  {
    svg: <IconManageAccount />,
    iconText: 'Manage Accounts',
    secondIconName: 'chevron-right',
  },
  {
    svg: <IconLanguage />,
    iconText: 'Language',
    secondIconName: 'chevron-right',
    text: 'English',
  },
  {
    svg: <IconLinkedAccounts />,
    iconText: 'Linked Accounts',
    secondIconName: 'chevron-right',
  },
  {
    svg: <IconDisableAccount />,
    iconText: 'Disable Account',
    secondIconName: 'chevron-right',
  },
];

function StorageComponent() {
  return (
    <VStack
      px="4"
      py="2"
      mt="30"
      mx={{ base: 4, md: 0 }}
      _light={{ bg: 'white', borderColor: 'coolGray.200' }}
      _dark={{
        bg: { base: 'coolGray.800', md: 'coolGray.900' },
        borderColor: 'coolGray.800',
      }}
      borderWidth={{ md: '1' }}
      borderBottomWidth="1"
      borderRadius="6"
    >
      <HStack space="3">
        <Icon
          as={MaterialIcons}
          name="cloud-queue"
          size="6"
          _light={{ color: 'coolGray.500' }}
          _dark={{ color: 'coolGray.400' }}
        />
        <Text
          fontSize="md"
          fontWeight="medium"
          _dark={{ color: 'coolGray.100' }}
          _light={{ color: 'coolGray.800' }}
        >
          Storage
        </Text>
      </HStack>
      <HStack alignItems="center" space={{ base: 4, md: 10 }}>
        <VStack flex={1}>
          <Progress
            size="sm"
            value={40}
            width="100%"
            rounded="none"
            _light={{
              bg: 'coolGray.100',
              innerBg: 'primary.900',
            }}
            _dark={{
              bg: 'coolGray.700',
              innerBg: 'primary.900',
            }}
          />
        </VStack>
        <Button
          size="sm"
          borderRadius="4"
          variant="outline"
          _light={{ borderColor: 'primary.900' }}
          _dark={{ borderColor: 'coolGray.400' }}
          _text={{
            fontSize: 'sm',
            fontWeight: 'medium',
            _light: { color: 'primary.900' },
            _dark: { color: 'coolGray.400' },
          }}
        >
          Buy Storage
        </Button>
      </HStack>
      <Text
        fontSize="xs"
        fontWeight="medium"
        _light={{ color: 'coolGray.500' }}
        _dark={{ color: 'coolGray.300' }}
      >
        4 GB of 15 GB used
      </Text>
    </VStack>
  );
}
export default function AccountSettings(props: any) {
  const { colorMode } = useColorMode();
  return (
    <>
      <DashboardLayout title="Settings">
        <VStack
          _light={{
            borderColor: 'coolGray.200',
            bg: 'white',
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { base: 'coolGray.800', md: 'coolGray.900' },
          }}
          borderWidth={{ md: '1' }}
          borderBottomWidth="1"
          borderRadius={{ md: '8' }}
          px={{ base: 4, md: 8 }}
          py={{ base: 4, md: 6 }}
        >
          <Pressable
            borderRadius={{ md: 4 }}
            onPress={() => {
              console.log('pressable pressed');
            }}
          >
            {mainlst.map((item: any, index: number) => {
              return (
                <HStack justifyContent="space-between" my="3" key={index}>
                  <HStack space="3" alignItems="center">
                    {item.svg}
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      _dark={{ color: 'coolGray.100' }}
                      _light={{ color: 'coolGray.800' }}
                    >
                      {item.iconText}
                    </Text>
                  </HStack>
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    _dark={{ color: 'coolGray.400' }}
                    _light={{ color: 'coolGray.500' }}
                  >
                    {item.text == 'English' ? item.text : null}
                  </Text>
                </HStack>
              );
            })}
          </Pressable>
        </VStack>
        <StorageComponent />
      </DashboardLayout>
    </>
  );
}
