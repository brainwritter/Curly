import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { iRootState, Dispatch } from 'Setup/Store';
import { View, Button, Text } from '@curly-ui';
import images from 'Constants/images';


type CounterScreenProps = {
  counter: number;
  counterFunc: any;
}

class CounterScreen extends React.Component<CounterScreenProps> {

  static navigationOptions = {
    header: null
  }

  public render() {
    const { counter, counterFunc } = this.props;
    return (
      <View justifyContent="space-around" flex={1} backgroundColor="white">
        <View align="center">
          <Image source={images.curly_introduction} style={styles.curlyImage} />
        </View>
        <View type="section">
          <View align="center">
            <Text size="large" weight="bold">Welcome to curly</Text>
          </View>
          <View align="center">
            <Text alignCenter>Super blazing fast react native boilerplate with driven domain structure, scalable your project out of the box</Text>
          </View>
        </View>
        <View type="section">
          <Button>CONTINUE</Button>
        </View>
      </View >
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
)(CounterScreen);
