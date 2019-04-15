const ButtonStyle = (style: any, props: any) => {
  return {
    Button: {
      backgroundColor: style.backgroundColor[props.type],
      height: style.size[props.size].height,
      borderRadius: style.borderRadius,
    },
    Text: {
      color: style.textColor[props.type],
      fontSize: style.textSize[props.size]
    }
  }
}

export default ButtonStyle