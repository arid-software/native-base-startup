import React from 'react';
import { Text, VStack, Button, useColorMode, Center } from 'native-base';
import IconPlaylistLight from './components/IconPlaylistLight';
import IconPlaylistDark from './components/IconPlaylistDark';
import DashboardLayout from '../../layouts/DashboardLayout';

export default function EmptyPlaylist(props: any) {
  const { colorMode } = useColorMode();
  return (
    <DashboardLayout displaySidebar={false} title="Playlist">
      <VStack
        px={{ base: 4, md: 32 }}
        py={{ base: 4, md: 4 }}
        borderRadius={{ md: '8' }}
        _light={{
          borderColor: 'coolGray.200',
          bg: { base: 'coolGray.50' },
        }}
        _dark={{
          borderColor: 'coolGray.800',
          bg: { md: 'coolGray.800', base: 'coolGray.800' },
        }}
        borderWidth="1"
        space={4}
        flex={1}
        alignItems="center"
      >
        <Center mt={{ base: 10, md: 12 }}>
          {colorMode === 'dark' ? <IconPlaylistDark /> : <IconPlaylistLight />}
        </Center>

        <Text
          mt={{ base: '5', md: '10' }}
          fontSize="xl"
          textAlign="center"
          fontWeight="bold"
          _dark={{ color: 'coolGray.50' }}
          _light={{ color: 'coolGray.800' }}
        >
          No playlist found
        </Text>
        <Text
          fontSize="sm"
          textAlign="center"
          fontWeight="medium"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.400' }}
          px={{ base: 0, md: 32 }}
        >
          We didn’t find any playlist in your music folder. Use the “Create
          Playlist” feature to find your playlist.
        </Text>

        <Button
          w={{ base: '50%', md: '100%' }}
          mt={{ base: '6', md: 32 }}
          mb={{ md: 4 }}
          borderRadius="4"
          _dark={{
            bg: 'primary.800',
            _focus: { bg: 'primary.700' },
          }}
          _light={{ bg: 'primary.900', _focus: { bg: 'primary.900' } }}
          _text={{ fontSize: 'sm', fontWeight: 'medium' }}
          onPress={() => console.log('')}
        >
          CREATE PLAYLIST
        </Button>
      </VStack>
    </DashboardLayout>
  );
}
