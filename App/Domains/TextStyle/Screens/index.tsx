import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { iRootState, Dispatch } from 'Setup/Store';
import { View, Button, Container, Text, RadioButton } from '@curly-ui';
import images from 'Constants/images';

type CounterScreenProps = {
  counter: number;
  counterFunc: any;
}

class TextStyle extends React.Component<CounterScreenProps> {

  static navigationOptions = {
    headerTitle: "Text Style"
  };

  public render() {
    return (
      <Container style={styles.container}>
        <View section>
          <View style={{ flexDirection: 'row' }}>
            <View >
              <Text>Colour</Text>
              <RadioButton data={["Primary", "Secondary", "Alternative", "Description"]} />
            </View>
            <View >
              <Text>Size</Text>
              <RadioButton data={["Tiny", "Small", "Medium", "Large", "veryLarge"]} />
            </View>
            <View >
              <Text>Style</Text>
              <RadioButton data={["Normal", "Bold"]} />
            </View>
          </View>

          <View>
            <Text secondary veryLarge bold>Text Style</Text>
          </View>
          <View>
            <Text secondary large bold>Text Style</Text>
          </View>
          <View>
            <Text secondary medium bold>Text Style</Text>
          </View>
          <View>
            <Text secondary small bold>Text Style</Text>
          </View>
          <View>
            <Text secondary tiny bold>Text Style</Text>
          </View>
          <View>
            <Text alternative veryLarge bold>Text Style</Text>
          </View>
          <View>
            <Text alternative large bold>Text Style</Text>
          </View>
          <View>
            <Text alternative medium bold>Text Style</Text>
          </View>
          <View>
            <Text alternative small bold>Text Style</Text>
          </View>
          <View>
            <Text alternative tiny bold>Text Style</Text>
          </View>
        </View>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around'
  },
  curlyImage: {
    height: 150,
    width: '100%',
    resizeMode: 'contain'
  }
});

const mapState = (state: iRootState) => ({
  counter: state.counterModel.counter,
});

const mapDispatch = (dispatch: Dispatch) => ({
  counterFunc: dispatch.counterModel,
});

export default connect(
  mapState,
  mapDispatch
)(TextStyle);
