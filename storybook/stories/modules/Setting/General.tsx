import React from 'react';
import { HStack, Text, VStack, Pressable } from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import IconStorage from './components/IconStorage';
import IconAbout from './components/IconAbout';
import IconHelp from './components/IconHelp';
import IconLegal from './components/IconLegal';
import IconTermsAndCondition from './components/IconTermsAndCondition';

function OptionItem({ icon, title }: any) {
  return (
    <Pressable>
      <VStack>
        <HStack alignItems="center" space={3}>
          {icon}
          <Text
            fontSize="md"
            fontWeight="medium"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {title}
          </Text>
        </HStack>
      </VStack>
    </Pressable>
  );
}

export default function General(props: any) {
  return (
    <DashboardLayout title="General">
      <VStack
        px={{ base: 4, md: 8 }}
        py={{ base: 4, md: 8 }}
        borderRadius={{ md: '8' }}
        _light={{
          borderColor: 'coolGray.200',
          bg: { base: 'white' },
        }}
        _dark={{
          borderColor: 'coolGray.700',
          bg: 'coolGray.800',
        }}
        borderWidth={{ md: '1' }}
        borderBottomWidth="1"
        space="6"
      >
        <OptionItem icon={<IconStorage />} title="Storage" />
        <OptionItem icon={<IconAbout />} title="About" />
        <OptionItem icon={<IconHelp />} title="Help" />
        <OptionItem icon={<IconLegal />} title="Legal" />
        <OptionItem
          icon={<IconTermsAndCondition />}
          title="Terms and Conditions"
        />
      </VStack>
    </DashboardLayout>
  );
}
