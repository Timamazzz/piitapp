import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
// @ts-ignore
import isEqual from 'lodash';

import RadioButton from '../RadioButton/RadioButton';
import {RadioButtonProps, RadioButtonsGroupProps} from '../types';

export default function RadioButtonsGroup({
  containerStyle,
  layout = 'column',
  onPress,
  radioButtons,
}: RadioButtonsGroupProps) {
  const [radioButtonsLocal, setRadioButtonsLocal] =
    useState<RadioButtonProps[]>(radioButtons);

  if (!isEqual(radioButtons, radioButtonsLocal)) {
    setRadioButtonsLocal(radioButtons);
  }
  const [selected, setSelected] = useState();

  function handlePress(id: string) {
    for (const button of radioButtonsLocal) {
      if (button.selected && button.id === id) {
        return;
      }
      button.selected = button.id === id;
    }
    setRadioButtonsLocal([...radioButtonsLocal]);
    if (onPress) {
      onPress(radioButtonsLocal);
    }
  }

  return (
    <View style={[styles.container, {flexDirection: layout}, containerStyle]}>
      {radioButtonsLocal.map(button => (
        <RadioButton
          {...button}
          key={button.id}
          onPress={(id: string) => {
            handlePress(id);
            if (button.onPress && typeof button.onPress === 'function') {
              button.onPress(id);
            }
          }}
        />
      ))}
    </View>
  );
}
