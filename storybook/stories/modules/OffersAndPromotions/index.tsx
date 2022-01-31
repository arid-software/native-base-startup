import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import SubscriptionPlan from './SubscriptionPlan';
import SubscriptionFeatures from './SubscriptionFeatures';
import ReferAndEarn from './ReferAndEarn';
import GiftCard from './GiftCard';
import Notification from './Notification';
import ReferAndEarn1 from './ReferAndEarn1';
storiesOf('OffersAndPromotions', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('SubscriptionPlan', () => <SubscriptionPlan />)
  .add('GiftCard', () => <GiftCard />)
  .add('SubscriptionFeatures', () => <SubscriptionFeatures />)
  .add('Notification', () => <Notification />)
  .add('ReferAndEarn1', () => <ReferAndEarn1 />)
  .add('ReferAndEarn', () => <ReferAndEarn />);
