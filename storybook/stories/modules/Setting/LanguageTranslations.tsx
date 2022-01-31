import React from 'react';
import { VStack, Radio } from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
const languageList = [
  {
    language: 'English',
  },
  {
    language: 'Hindi',
  },
  {
    language: 'Kannada',
  },
  {
    language: 'Urdu',
  },
  {
    language: 'Dutch',
  },
  {
    language: 'Spanish',
  },
];
export default function LanguageTranslations(props: any) {
  return (
    <DashboardLayout title="Language Settings">
      <VStack
        p={{ base: 4, md: 8 }}
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
        borderBottomWidth={{ md: '1', base: 0 }}
      >
        <Radio.Group name="language" defaultValue="1">
          <VStack space="6" alignItems="flex-start">
            {languageList.map((item, index) => {
              return (
                <Radio
                  borderColor="coolGray.500"
                  _light={{
                    // @ts-ignore
                    _checked: {
                      _icon: { color: 'primary.900' },
                      borderColor: 'primary.900',
                    },
                    borderColor: 'coolGray.500',
                  }}
                  _dark={{
                    // @ts-ignore
                    _checked: {
                      _icon: { color: 'primary.700' },
                      borderColor: 'primary.700',
                    },
                    borderColor: 'coolGray.500',
                    background: { base: 'coolGray.800', md: 'coolGray.800' },
                  }}
                  _text={{
                    ml: '3',
                    _dark: { color: 'white' },
                    _light: { color: 'coolGray.800' },
                  }}
                  key={index}
                  value={index + 1 + ''}
                >
                  {item.language}
                </Radio>
              );
            })}
          </VStack>
        </Radio.Group>
      </VStack>
    </DashboardLayout>
  );
}
