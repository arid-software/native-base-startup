import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import LanguageTranslation from '../Setting/LanguageTranslations';
import TermsAndCondition from './TermsAndCondition';
import PrivacySettings from './PrivacySettings';
import General from './General';
storiesOf('Setting', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('TermsAndCondition', () => <TermsAndCondition />)
  .add('PrivacySettings', () => <PrivacySettings />)
  .add('General', () => <General />)
  .add('LanguageTranslation', () => <LanguageTranslation />);
