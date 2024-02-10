import { View, Text } from 'react-native';
import React from 'react';

import TabHeader from '../components/TabHeader';

const WatctListScreen = () => {
    return (
        <View>
            <TabHeader initialLetter='My' title=' Watch List' />
            <Text>WatctListScreen</Text>
        </View>
    );
};

export default WatctListScreen;