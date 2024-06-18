import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProductPower } from "../../../store/services";
import { RootState } from '../../../store/store';
import { Button, Card, CardBody, CardFooter, Center, Flex, Heading, Image, Spinner, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { IProduct } from "../../../models/interface";
import ModalBuy from "../../Modal/Modal";

function Power() {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const dispatch = useDispatch()
    const {prodPower, isLoading, error} = useSelector((state:RootState) => state.productsPower)

    useEffect(()=>{
        dispatch(fetchingProductPower())
    },[dispatch])


    if(isLoading) {return <Spinner/>}

    if(error){
        return(
        <Center>
            <Text>{error} lkjsflkjf</Text>
        </Center>
    )}


    return (
        <>
            <Flex flexWrap={'wrap'} justifyContent={'center'} gap={4} p={4}>
                {prodPower.map((product: IProduct) => (
                    <Card m={2} key={product.id}>
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

export default Power;