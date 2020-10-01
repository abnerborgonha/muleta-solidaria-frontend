import React, { useContext } from 'react';
import { FlatList, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ProductModalProvider from '../../context/productModalContext';
import { FontAwesome5 } from '@expo/vector-icons';
import { Title } from '../../components/Title'
import { Container, Header, BtnAdd, Main } from './styles';
import Item from './Item';
import Box from './Box';


function ProductCategory() {
  const {
    modalVisible,
    openModal,
    closeModal,
    categories 
  } = useContext(ProductModalProvider);

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <Container>
      <StatusBar style="dark" />
      <Header>
        <Title>Categoria de Produtos</Title>
      </Header>
      <FlatList
        style={{
          width: '100%',
          marginLeft: '10%'
        }}
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <BtnAdd
        onPress={() => { openModal() }}
      >
        <FontAwesome5
          name="plus"
          size={20}
          color="#fff"
        />
      </BtnAdd>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          closeModal();
        }}
      >
        <Box />
      </Modal>
    </Container>
  );
}

export default ProductCategory;