import React, { useEffect, useState } from 'react';
import MapView, { LocalTile } from 'react-native-maps';
import { Dimensions } from 'react-native';

import { Container } from './styles';

function Map() {

    return (
        <Container>
            <MapView
                loadingEnabled={true}
                initialRegion={{
                    latitude: -27.2141700,
                    longitude: -49.6430600,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}
            />
        </Container>
    );
}

export default Map;