import { ButtonStyle, ButtonInterface } from '../props/ButtonProps'
import { TextStyle } from '../props/TextProps'

interface componentProps extends ButtonInterface { }
interface StyleProps extends ButtonStyle, TextStyle { }

export default function (componentStyle: StyleProps, props: componentProps) {
  const styleButton = componentStyle.Button
  const styleText = componentStyle.Text

  return {
    Button: {
      backgroundColor: styleButton.backgroundColor[props.type],
      height: styleButton.size[props.size]!.height,
      borderRadius: styleButton.borderRadius,
    },
    Text: {
      fontFamily: styleText.weight.regular,
      color: styleButton.textColor[props.type],
      fontSize: styleButton.textSize.normal,
      fontWeight: styleButton.textWeight.normal
    },
  };
};
