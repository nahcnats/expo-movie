import { View, Text } from 'react-native';
import React from 'react';

import TabHeader from '../components/TabHeader';
import Loading from '../components/Loading';
import Error from '../components/Error';

const WatctListScreen = () => {
    return (
        <View>
            <TabHeader initialLetter='My' title=' Watch List' />
            <Text>WatctListScreen</Text>
        </View>
    );
};

export default WatctListScreen;