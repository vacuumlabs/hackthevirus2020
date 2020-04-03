import {storiesOf} from '@storybook/react-native'
import React from 'react'
import Button from './Button'
import ButtonGroup from './ButtonGroup'

storiesOf('ButtonGroup', module)
  .add('horizontal', () => (
    <ButtonGroup>
      <Button onPress={() => {}} title="Button 1" variant="primary" />
      <Button onPress={() => {}} title="Button 2" variant="primary" />
      <Button onPress={() => {}} title="Button 3" variant="primary" />
    </ButtonGroup>
  ))
  .add('vertical', () => (
    <ButtonGroup vertical>
      <Button onPress={() => {}} title="Button 1" variant="primary" />
      <Button onPress={() => {}} title="Button 2" variant="primary" />
      <Button onPress={() => {}} title="Button 3" variant="primary" />
    </ButtonGroup>
  ))
