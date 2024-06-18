import { Card, CardBody, Flex, Heading, Stack, Text, Image, CardFooter, Button,  Spinner, Center, useDisclosure } from "@chakra-ui/react";
import { IProduct } from "../../../models/interface";
import {useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux'
import {fetchingProductPower} from '../../../store/services'
import { RootState } from '../../../store/store';
import ModalBuy from "../../Modal/Modal";

function ProductPower() {

    const dispatch = useDispatch()

    const {prodPower, isLoading, error} = useSelector((state:RootState) => state.productsPower)

    const prodSlicePower = prodPower.slice(0,6)

    const {isOpen, onOpen, onClose} = useDisclosure()

    useEffect(()=>{
        dispatch(fetchingProductPower())
    },[dispatch])

    if(isLoading){
        return <Spinner />
    }

    if(error){
        return (
            <Center>
                <Text color={'red.500'}>{error}</Text>
            </Center>
        )
    }

    return ( 
        <>
            <Flex flexWrap={'wrap'} justify={'center'}>
                {prodSlicePower.map((product: IProduct) => (
                    <Card m={2} flexBasis={"32%"} key={product.id}>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{product.name}</Heading>
                                <Text>
                                {product.power_source}:{product.type}
                                </Text>
                                <Text>
                                    {product.description}
                                </Text>
                                <Text>
                                    {product.safety_instructions}
                                </Text>
                                <Image 
                                    style={{ transition: 'transform 0.3s ease' }}
                                    _hover={{ transform: 'scale(1.2)' }} src={product.image_url} alt={product.name} boxSize="300px" objectFit="cover" 
                                />
                                <Text color='blue.600' fontSize='2xl'>
                                    {product.price}
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
                <ModalBuy isOpen={isOpen} onClose={onClose}/>
        </>
     );
}

export default ProductPower;