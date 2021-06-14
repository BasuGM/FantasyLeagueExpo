import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const ReduxSetupScreen = (props) => (
    <View style={styles.container}>
        <Text>ReduxSetupScreen</Text>
    </View>
    )
export default ReduxSetupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});