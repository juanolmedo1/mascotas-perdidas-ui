import {Button} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchLogin} from '@login/store/actions';
import styles from '@login/views/LoginView/styles';

export class LoginView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
  }

  handleUsernameInput = text => {
    this.setState({
      username: text,
    });
  };

  handlePasswordInput = text => {
    this.setState({
      password: text,
    });
  };

  handleLogin = () => {
    const {fetchLoginFunc} = this.props;
    fetchLoginFunc(this.state);
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Navigate to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
    );
  }
}

LoginView.propTypes = {
  fetchLoginFunc: PropTypes.func.isRequired,
  session: PropTypes.shape({
    requestInProgress: PropTypes.bool,
    requestFailed: PropTypes.bool,
    profileInfo: PropTypes.object,
  }).isRequired,
};

const mapDispatchToProps = {
  fetchLoginFunc: fetchLogin,
};

const mapStateToProps = state => ({
  session: state.session,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView);
