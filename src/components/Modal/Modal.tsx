import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {RegExpCard} from "../../constant/RegExp"
import { IFormDataCard } from "../../models/interface";
import { ChangeEvent, useState } from "react";

interface IModalBuyProps {
    isOpen: boolean;
    onClose: () => void;
}

function ModalBuy({isOpen, onClose}:IModalBuyProps) {
    const toast = useToast()
    const [state, setState] = useState({
        firstName:"",
        lastName:"",
        card:"",
        date:"",
        cvv:""
    })

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
      };

    const { register, handleSubmit, formState:{errors, isValid, isDirty} } = useForm<IFormDataCard>({mode:"onSubmit"})

    const onSubmit = (data: IFormDataCard) => {
        console.log(data);
        onClose();
    };

    const isDisableButton = isValid || isDirty;

    return ( 
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalHeader>Enter Payment Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={!!errors.firstName}>
                            <FormLabel>First Name</FormLabel>
                                <Input 
                                    {
                                    ...register("firstName",{
                                        pattern: {
                                            value: RegExpCard.name,
                                            message: "Write true name",
                                        }
                                    }
                                )}
                                value={state.firstName}
                                onChange={handleChangeInput}
                                placeholder='First name' />
                                {errors?.firstName && <Text color={"red"}>errors</Text> }
                            </FormControl>
                            <FormControl isInvalid={!!errors.lastName} mt={4}>
                                <FormLabel>Last Name</FormLabel>
                                <Input 
                                    {
                                        ...register("lastName",{
                                            pattern: {
                                                value: RegExpCard.name,
                                                message: "Write true name",
                                            }
                                        }
                                    )}
                                    value={state.lastName}
                                    onChange={handleChangeInput}
                                    placeholder='Last name' />
                                {errors?.firstName && <Text color={"red"}>errors</Text> }
                            </FormControl>
                            <FormControl isInvalid={!!errors.card} mt={4}>
                                <FormLabel>Card Number</FormLabel>
                                <Input
                                    {
                                        ...register("card",{
                                            pattern: {
                                                value: RegExpCard.card,
                                                message: "Write true card number",
                                            }
                                        }
                                    )}
                                    value={state.card}
                                    onChange={handleChangeInput}
                                    placeholder='Card Number' />
                                {errors?.card && <Text color={"red"}>errors</Text> }
                            </FormControl>firstName
                            <FormControl isInvalid={!!errors.date} mt={4}>
                                <FormLabel>Expiration Date</FormLabel>
                                <Input
                                    {
                                        ...register("date",{
                                            pattern: {
                                                value: RegExpCard.date,
                                                message: "Write true date",
                                            }
                                        }
                                    )}
                                    value={state.date}
                                    onChange={handleChangeInput}
                                    placeholder='MM/YY' />
                                {errors?.date && <Text color={"red"}>errors</Text> }
                            </FormControl>
                            <FormControl isInvalid={!!errors.cvv} mt={4}>
                                <FormLabel>CVV</FormLabel>
                                <Input
                                    {
                                        ...register("cvv",{
                                            pattern: {
                                                value: RegExpCard.cvv,
                                                message: "Write true cvv",
                                            }
                                        }
                                    )}
                                    value={state.cvv}
                                    onChange={handleChangeInput}
                                    placeholder='CVV' />
                                {errors?.cvv && <Text color={"red"}>errors</Text> }
                            </FormControl>
                        
                            <Button
                                mt={15}
                                onClick={() =>
                                    toast({
                                        title: 'Product buy.',
                                        description: "Have a good day.",
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true,
                                        })
                                        } 
                                type="submit" colorScheme='blue'
                                disabled={isDisableButton}    
                                >
                                Buy
                            </Button>
                        </form>
            </ModalBody>
            </ModalContent>
            </Modal>

        </>
     );
}

export default ModalBuy;