import 'react-native';
import 'react';
import HomeScreen from '../src/screens/home-screen';
import renderer from 'react-test-renderer';
import {it} from '@jest/globals';

it('renders correctly', () => {
  renderer.create(<HomeScreen />);
});
