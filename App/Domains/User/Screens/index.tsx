import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { iRootState, Dispatch } from 'Setup/Store';
import { View, Button, Container, Text } from '@curly-ui';
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
      <Container style={styles.container}>
        <View center>
          <Image source={images.curly_introduction} style={styles.curlyImage} />
        </View>
        <View section center>
          <View>
            <Text heading>Welcome to curly</Text>
          </View>
          <View>
            <Text alignCenter>Super blazing fast react native boilerplate with driven domain structure, scalable your project out of the box</Text>
          </View>
        </View>
        <View section>
          <Button type="alternative">HALO</Button>
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
)(CounterScreen);
