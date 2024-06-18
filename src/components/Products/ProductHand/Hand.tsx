import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProductHand } from "../../../store/services";

function Hand() {
    const dispatch = useDispatch()

    const {} = useSelector(state=> state)

    const {isOpen, onClose, onOpen} = useDisclosure()

    useEffect((
        dispatch(fetchingProductHand())
    ), [dispatch])

    if(isLoading)(<Spinner/>)
    if (eror)()
    return (  );
}

export default Hand;