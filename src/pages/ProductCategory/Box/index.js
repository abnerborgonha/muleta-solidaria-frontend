import React, { useContext, useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import ProductModalProvider from '../../../context/productModalContext';
import { Label } from '../../../components/Label';
import { Input } from '../../../components/Input';
import { FormComponent } from '../../../components/Form';
import { Container, Contend, Btn, BtnBackground } from './styles';

const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
}

const Box = () => {
    const {closeModal,addCategory} = useContext(ProductModalProvider);

    const {fild, setField} = useState('');


    return (
        <Container >
            <Contend style={shadow}>
                <FormComponent style={{
                    marginTop: '5%',
                    marginBottom: '0%'
                }}
                    behavior="height">
                    <Label>Categoria</Label>
                    <Input autoFocus={true} />
                </FormComponent>
                <BtnBackground>
                    <Btn style={shadow} onPress={() => {addCategory({
                        id: 3,
                        title: 'Teste'
                    })}} >
                        <FontAwesome5
                            name="check"
                            size={20}
                            color="#000"
                        />
                    </Btn>
                    <Btn style={shadow} onPress={() => {closeModal()}} >
                        <FontAwesome5
                            name="times"
                            size={20}
                            color="#000"
                        />
                    </Btn>
                </BtnBackground>
            </Contend>
        </Container>
    );
}

export default Box;