const ButtonStyle = (style: any, props: any) => {
  return {
    backgroundColor: style.backgroundColor[props.type],
    color: style.textColor[props.type],
    height: 50,
    borderRadius: style.borderRadius
  }
}

export default ButtonStyle