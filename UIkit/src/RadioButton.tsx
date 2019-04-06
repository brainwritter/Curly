import * as React from 'react';
import { Text as RNText, StyleSheet, TextStyle, TouchableOpacity, View } from 'react-native';
import colors from '../common/colors';
import { heading } from '../common/metrics';

type props = {
  data: string[];
  id: number;
};

type state = {
  radioSelected: number;
};

export default class RadioButton extends React.PureComponent<props, state> {
  static defaultProps = {
    data: [],
    id: 0,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      radioSelected: 1,
    };
  }

  public radioClick(id: number) {
    this.setState({
      radioSelected: id,
    });
  }

  public Mapping(array: any[]) {
    const newArray: any = [];
    array.map((haha: any, index: any) => newArray.push({ id: index, name: haha }));
    return newArray;
  }

  public render() {
    const { radioSelected } = this.state;
    const { data } = this.props;
    const products = this.Mapping(data);

    return products.map((val: any) => {
      return (
        <TouchableOpacity
          key={val.id}
          onPress={this.radioClick.bind(this, val.id)}
          style={{ flexDirection: 'row', margin: 4 }}
        >
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {val.id == radioSelected ? (
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 6,
                  backgroundColor: '#000',
                }}
              />
            ) : null}
          </View>
          <RNText style={styles.text}>{val.name}</RNText>
        </TouchableOpacity>
      );
    });
  }
}

const styles = StyleSheet.create({
  text: {
    color: colors.textSafe,
    marginLeft: 8,
    fontSize: 13,
  },
  heading: {
    fontSize: heading,
    fontWeight: '700',
  },
});
