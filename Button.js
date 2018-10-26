'use strict';

var React = require('react-native');
var {
    View,
    TouchableOpacity,
    StyleSheet,
    PropTypes,
    ActivityIndicator,
    TouchableNativeFeedback,
    Platform,
    Component
    } = React;

const IS_ANDROID = Platform.OS === 'android';

class Button extends Component {

    constructor() {
        super();
        this.state = {}
    }

    _renderChild() {
        if (this.props.loading) {
            return (
                <ActivityIndicatorIOS
                    animating={true}
                    size='small'
                    style={styles.spinner}
                    color={this.props.activityIndicatorColor || 'black'}
                />
            );
        }
        return this.props.children;
    }

    render() {
        if (this.props.disabled === true || this.props.loading === true) {
            return (
                <View style={[styles.button, this.props.style, (this.props.disabledStyle || styles.opacity)]}>
                    {this._renderChild()}
                </View>
            );
        } else {
            // Extract Touchable props
            var touchableProps = {
                onPress: this.props.onPress,
                onPressIn: this.props.onPressIn,
                onPressOut: this.props.onPressOut,
                onLongPress: this.props.onLongPress
            };
            if (IS_ANDROID) {
                touchableProps = Object.assign(touchableProps, {
                    background: this.props.background || TouchableNativeFeedback.SelectableBackground()
                });
                return (
                    <TouchableNativeFeedback {...touchableProps}>
                        {this._renderChild()}
                    </TouchableNativeFeedback>
                )
            } else {
                return (
                    <TouchableOpacity {...touchableProps}
                        style={[styles.button, this.props.style]}>
                        {this._renderChild()}
                    </TouchableOpacity>
                );
            }
        }
    }
}

Button.propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func
};

var styles = StyleSheet.create({
    button: {
    },
    textButton: {
        fontSize: 18,
        alignSelf: 'center'
    },
    spinner: {
        alignSelf: 'center'
    },
    opacity: {
        opacity: 0.5
    }
});

module.exports = Button;