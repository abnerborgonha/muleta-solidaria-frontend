import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Title } from '../../components/Title';
import { TextHighlightAnimed, TextHighlight } from '../../components/TextHighlight';

import { Container, Header, Contend } from './styles';
// import { Container } from './styles';

const Settings = ({ navigation }) => {
    return (
        <Container>
            <StatusBar style="dark" />
            <Header>
                <Title>Configurações</Title>
            </Header>
            <Contend>
                <TextHighlightAnimed
                    animation='fadeInLeft'
                    delay={250}
                    lg
                    style={{ marginBottom: 15 }}
                    onPress={() => navigation.navigate('Account')}
                >Minha Conta
                </TextHighlightAnimed>
                <TextHighlightAnimed
                    animation='fadeInLeft'
                    delay={750}
                    lg
                    style={{ marginBottom: 15 }}
                >FAQ
                </TextHighlightAnimed>
                <TextHighlightAnimed
                    animation='fadeInLeft'
                    delay={1000}
                    lg
                    style={{ marginBottom: 15 }}
                >Contato
                </TextHighlightAnimed>
                <TextHighlightAnimed
                    animation='fadeInLeft'
                    delay={1250}
                    lg
                    style={{ marginBottom: 15 }}
                >Termos de privacidade
                </TextHighlightAnimed>
            </Contend>
        </Container>
    );
}

export default Settings;