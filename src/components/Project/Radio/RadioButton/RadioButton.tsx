import {RadioButtonProps} from '../types';
import {styles} from './styles';
import {PixelRatio, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../../constants/colors';
import {globalStyles} from '../../../../constants/globalStyles';

export default function RadioButton({
  borderColor = colors.lightGrey,
  selectedBorderColor = colors.green,
  color = colors.green,
  containerStyle,
  description,
  descriptionStyle,
  disabled = false,
  id,
  rightLabel,
  leftLabel,
  leftLabelStyle,
  rightLabelStyle,
  layout = 'row',
  onPress,
  selected = false,
  size = 24,
}: RadioButtonProps) {
  const borderWidth = PixelRatio.roundToNearestPixel(size * 0.075);
  const sizeHalf = PixelRatio.roundToNearestPixel(size * 0.5);
  const sizeFull = PixelRatio.roundToNearestPixel(size);

  let orientation: any = {flexDirection: 'row'};

  if (layout === 'column') {
    orientation = {alignItems: 'center'};
  }

  function handlePress() {
    if (disabled) {
      return null;
    }
    if (onPress) {
      onPress(id);
    }
  }

  return (
    <>
      <Pressable
        onPress={handlePress}
        style={[
          styles.container,
          orientation,
          // eslint-disable-next-line react-native/no-inline-styles
          {opacity: disabled ? 0.2 : 1},
          containerStyle,
        ]}>
        {Boolean(leftLabel) && (
          <Text
            style={[
              leftLabelStyle,
              globalStyles.blackText,
              globalStyles.normalText,
            ]}>
            {leftLabel}
          </Text>
        )}
        <View
          style={[
            styles.border,
            {
              borderColor: selected ? selectedBorderColor : borderColor,
              borderWidth,
              width: sizeFull,
              height: sizeFull,
              borderRadius: sizeHalf,
            },
          ]}>
          {selected && (
            <View
              style={{
                backgroundColor: color,
                width: sizeHalf,
                height: sizeHalf,
                borderRadius: sizeHalf,
              }}
            />
          )}
        </View>
        {Boolean(rightLabel) && (
          <Text
            style={[
              rightLabelStyle,
              globalStyles.blackText,
              globalStyles.normalText,
            ]}>
            {rightLabel}
          </Text>
        )}
      </Pressable>
      {Boolean(description) && (
        <Text style={[descriptionStyle]}>{description}</Text>
      )}
    </>
  );
}
