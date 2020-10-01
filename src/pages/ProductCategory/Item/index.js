import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Btn, Label } from './styles';

const Item = ({title}) => {
    return (
        <Container>
            <Btn>
                <FontAwesome5
                    name="edit"
                    size={25}
                    color="#3F3F3F"
                />
            </Btn>
            <Btn>
                <FontAwesome5
                    name="trash-alt"
                    size={25}
                    color="#3F3F3F"
                />
            </Btn>
            <Label>
                {title}
            </Label>
        </Container>
    );
}

export default Item;