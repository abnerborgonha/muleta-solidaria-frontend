import React, { useContext } from 'react';
import { FlatList, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import Routes from '../../routes';

import {
    Container,
    ButtonFilter,
    TextFilter,
    ContendFilter,
    CardProdutc,
    CardText,
    CardContent,
    CardArrowIcon,
    Image
} from './styles';
import { Title } from '../../components/Title'
import { Header } from '../ProductCategory/styles';
import { BtnAdd } from '../ProductCategory/styles';
import ProductModalProvider from '../../context/productModalContext';

function ProductView({ navigation }) {
    const { categories, products } = useContext(ProductModalProvider);

    const renderItem = ({ item }) => (
        <CardProdutc>
            <Image />
            <CardContent>
                <CardText highlight >{item.titulo}</CardText>
                <CardText >{`Quantidade: ${item.quantidade}`}</CardText>
                <CardText >{`Responsável: ${item.responsavel}`}</CardText>
            </CardContent>
            <CardArrowIcon>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={40}
                    color="#737373"
                />
            </CardArrowIcon>
        </CardProdutc>
    );

    return (
        <Container>
            <StatusBar style="dark" />
            <Header>
                <Title>Produtos</Title>
            </Header>
            {/* <ContendFilter>
                <ScrollView horizontal >
                    {categories.map(category =>
                        <ButtonFilter>
                            <TextFilter>{category.title}</TextFilter>
                        </ButtonFilter>
                    )}
                </ScrollView>
            </ContendFilter> */}
            <FlatList
                style={{ marginTop: 30 }}
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <BtnAdd onPress={() => { navigation.navigate('ProductForm');}}>
                <FontAwesome5
                    name="plus"
                    size={20}
                    color="#fff"
                />
            </BtnAdd>
        </Container>
    );
}

export default ProductView;