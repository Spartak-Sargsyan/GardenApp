import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../../store/store';
import { Center, Button, Flex, Spinner, Text, Card, CardBody, CardFooter, Heading, Image, Stack, useDisclosure } from "@chakra-ui/react";
import { IProduct } from "../../../models/interface";
import { useEffect } from "react";
import { fetchingProductSeeds } from "../../../store/services";
import ModalBuy from "../../Modal/Modal";


function Seed() {

    const dispatch = useDispatch()
    const {prodSeed, isLoading, error} = useSelector((state:RootState) => state.products)

    const { onOpen, onClose, isOpen } = useDisclosure()

    useEffect(()=>{
        dispatch(fetchingProductSeeds())
    },[dispatch])

    if(isLoading)( <Spinner/> )
    if(error)(
            <Center>
            <Text color="red">
                {error}
            </Text>
        </Center>
    )


    return ( 
        <>
            <Flex flexWrap={'wrap'} justifyContent={"center"}>
                {prodSeed.map((product:IProduct) => (
                    <Card key={product.id} m={2}>
                    <CardBody >
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{product.name}</Heading>
                            <Text>
                                {product.planting_instructions}
                            </Text>
                            <Text>
                                {product.quantity}
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
            <ModalBuy onClose={onClose} isOpen={isOpen} />
        </>
     );
}

export default Seed;