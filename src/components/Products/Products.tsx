import { Heading } from '@chakra-ui/react';
import ProductHand from './ProductHand/ProductHand';
import ProductSeed from './ProductSeed/ProductSeed';
import ProductPower from './ProductPower/ProductPower';

const Products = () => {

    return (
        <>
            {/* <MenuProd/> */}
            <Heading color={'green'} mt={"20px"} textAlign={'center'}>Recommended</Heading>
            <Heading textAlign={'center'} padding={30} as={"h2"}> Recommended Seeds</Heading>
            <ProductSeed/>
            <Heading textAlign={'center'} padding={30} as={"h2"}>Recommended Hand Tools</Heading>
            <ProductHand/>
            <Heading textAlign={'center'} as={"h2"} padding={30}>Recommended Electric Tools</Heading>
            <ProductPower/>
        </>
        
    );
};

export default Products;