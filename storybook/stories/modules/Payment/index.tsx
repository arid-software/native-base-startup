import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../../Wrapper';

import Emi from './Emi';
import Wallet from './Wallet';
import PaymentOne from './PaymentOne';
import PaymentsUpi from './PaymentsUpi';
import UpiPayments from './UpiPayments';
import PaymentsCard from './PaymentsCard';
import BalanceCheck from './BalanceCheck';
import UpiPaymentsOne from './UpiPaymentsOne';
import BalanceCheckTwo from './BalanceCheckTwo';
import OrderConfirmation from './OrderConfirmation';
import ConfirmationModal from './ConfirmationModal';

storiesOf('Payment', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('EMI', () => <Emi />)
  .add('Wallet', () => <Wallet />)
  .add('PaymentOne', () => <PaymentOne />)
  .add('PaymentsUpi', () => <PaymentsUpi />)
  .add('UpiPayments', () => <UpiPayments />)
  .add('PaymentsCard', () => <PaymentsCard />)
  .add('BalanceCheck', () => <BalanceCheck />)
  .add('UpiPaymentsOne', () => <UpiPaymentsOne />)
  .add('BalanceCheckTwo', () => <BalanceCheckTwo />)
  .add('ConfirmationModal', () => <ConfirmationModal />)
  .add('OrderConfirmation', () => <OrderConfirmation />);
