import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';
import MutualFundsPortfolio from '../Statistics/MutualFundsPortfolio';
import InsuranceScreen from './InsuranceScreen';
import TopPerformingStocks from './TopPerformingStocks';
import Donations from '../Statistics/Donations';
import CampaignDetails from '../Statistics/CampaignDetails';

storiesOf('Statistics', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('InsuranceScreen', () => <InsuranceScreen />)
  .add('TopPerformingStocks', () => <TopPerformingStocks />)
  .add('MutualFundsPortfolio', () => <MutualFundsPortfolio />)
  .add('Donations', () => <Donations />)
  .add('CampaignDetails', () => <CampaignDetails />);
