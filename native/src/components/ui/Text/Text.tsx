import React, {Ref, RefObject} from 'react'
import {StyleSheet, Text as RNText, TextProps as RNTextProps} from 'react-native'

const FONTS: {[key: string]: {[key: string]: {[key: string]: string}}} = {
  opensans: {
    normal: {
      300: 'OpenSans-Light',
      400: 'OpenSans-Regular',
      normal: 'OpenSans-Regular',
      700: 'OpenSans-Bold',
      bold: 'OpenSans-Bold',
    },
    italic: {
      300: 'OpenSans-LightItalic',
      400: 'OpenSans-Italic',
      normal: 'OpenSans-Italic',
      700: 'OpenSans-BoldItalic',
      bold: 'OpenSans-BoldItalic',
    },
  },
}

const styles = StyleSheet.create({
  headline: {
    fontSize: 15,
    lineHeight: 22,
  },
  body: {
    fontSize: 13,
    lineHeight: 16,
  },
  button: {
    fontSize: 14,
    fontWeight: '700',
  },
  error: {
    fontSize: 13,
    lineHeight: 16,
    color: '#d32223',
  },
})

// leaving this loosely typed as linter is mad about getting attributes from style objects
const get = (object: any, key: string, defaultValue: any) => {
  if (object) {
    return object[key] || defaultValue
  }
  return defaultValue
}

interface TextProps extends RNTextProps {
  variant?: 'headline' | 'body' | 'button' | 'error'
  innerRef?: string | ((instance: RNText | null) => void) | RefObject<RNText> | null
  children?: string | React.ReactNode[]
}

const Text: React.FC<TextProps> = ({variant = 'body', innerRef, ...props}) => {
  const activeFontFamily = 'opensans'
  const fontWeight = get(props.style, 'fontWeight', 'normal')
  const fontStyle = get(props.style, 'fontStyle', 'normal')

  return (
    <RNText
      {...props}
      ref={innerRef}
      allowFontScaling={false}
      style={[
        styles[variant],
        props.style,
        {fontFamily: FONTS[activeFontFamily][fontStyle][fontWeight]},
      ]}
    />
  )
}

export default React.forwardRef<RNText, TextProps>((props: TextProps, ref: Ref<RNText>) => (
  <Text {...props} innerRef={ref} />
))
