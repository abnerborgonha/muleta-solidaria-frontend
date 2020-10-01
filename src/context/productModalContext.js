import React, { createContext, useState } from 'react';

const ProductModalContext = createContext({});

export const ProductModalProvider = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [categories, setCategories] = useState([
        {
            id: 1,
            title: "Cadeira de Rodas"
        },
        {
            id: 2,
            title: "Muleta"
        },
        {
            id: 3,
            title: "Bota Ortopédica"
        }
    ]);
    const [products, setProducts] = useState([
        {
            titulo:'Cadeira de Rodas Padrão',
            quantidade: 30,
            responsavel: 'Paulo Moura',
            categoria: 'Cadeira de Rodas'
        },
        { 
            titulo:'Muleta Canadense',
            quantidade: 30,
            responsavel: 'Paulo Moura',
            categoria: 'Muleta'
        },
    ]);

    async function openModal() {
        setModalVisible(true);
    }

    async function closeModal() {
        setModalVisible(false);
    }

    async function addCategory(value) {
        console.log(value);
    }

    return (
        <ProductModalContext.Provider value={{
            modalVisible,
            openModal,
            closeModal,
            categories,
            addCategory,
            products
        }}>
            {children}
        </ProductModalContext.Provider>
    );
}

export default ProductModalContext;