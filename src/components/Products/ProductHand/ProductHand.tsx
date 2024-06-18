import { Card, CardBody, Flex, Heading, Stack, Text, Image, CardFooter, Button,  Spinner, Container, Center, useDisclosure } from "@chakra-ui/react";
import { IProduct } from "../../../models/interface";
import {useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux'
import {fetchingProductHand} from '../../../store/services'
import { RootState } from '../../../store/store';
import ModalBuy from "../../Modal/Modal";

function ProductHand() {

    const dispatch = useDispatch()
    const {prodHand, isLoading, error} = useSelector((state:RootState) => state.productsHand);
    const {isOpen, onOpen, onClose} = useDisclosure()

    const prodHandSlice = prodHand.slice(0,6);

    useEffect(()=>{
        dispatch(fetchingProductHand())
    },[dispatch])


    if(isLoading){
        return <Spinner/>
    }
        
    if(error){
        <Center mt={10}>
                <Text color="red.500">{error}</Text>
        </Center>
    }


    return (
        <>
            <Container maxWidth={"1500"}>
                <Flex flexWrap={'wrap'} justify={'center'}>
                    {prodHandSlice.map((product: IProduct) => (
                        <Card m={2} key={product.id} flexBasis={"30%"}>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{product.name}</Heading>
                                    <Text>
                                        {product.type}
                                    </Text>
                                    <Text>
                                        {product.description}
                                    </Text>
                                    <Image 
                                        style={{ transition: 'transform 0.3s ease' }}
                                    _hover={{ transform: 'scale(1.2)' }} src={product.image_url} alt={product.name} boxSize="300px" objectFit="cover" 
                                    />
                                    <Text color='blue.600' fontSize='2xl'>
                                        Price {product.price} RUB
                                    </Text>
                                </Stack>
                                </CardBody>
                                <CardFooter>
                                    <Flex justifyContent={'space-between'}>
                                        <Button onClick={onOpen} colorScheme='green'>
                                            Buy now
                                        </Button>
                                        <Button variant='ghost' colorScheme='blue'>
                                            Add to cart 🧺
                                        </Button>
                                    </Flex>
                                </CardFooter>
                        </Card>
                    ))}
                </Flex>
            </Container>
            <ModalBuy isOpen={isOpen} onClose={onClose}/>
        </>
     );
}

export default ProductHand;