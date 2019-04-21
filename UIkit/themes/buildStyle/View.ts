import { TextStyle as RNViewStyle } from 'react-native'
import { ViewStyle, ViewInterface } from '../props/ViewProps';

interface componentProps extends ViewInterface { }
interface StyleProps extends ViewStyle { }

export default function (componentStyle: StyleProps, props: componentProps): RNViewStyle {
  const style = componentStyle.View
  return {
    ...props.flex ? { flex: props.flex } : null,
    ...props.align ? { alignItems: props.align } : null,
    ...props.flexDirection ? { flexDirection: props.flexDirection } : null,
    ...props.justifyContent ? { justifyContent: props.justifyContent } : null,
    backgroundColor: props.backgroundColor || style.backgroundColor,
    borderRadius: props.borderRadius || style.borderRadius,
    marginVertical: style.type[props.type!].margin.vertical,
    marginHorizontal: style.type[props.type!].margin.horizontal,
    paddingHorizontal: style.type[props.type!].padding.vertical,
    paddingVertical: style.type[props.type!].padding.horizontal,
  }
};