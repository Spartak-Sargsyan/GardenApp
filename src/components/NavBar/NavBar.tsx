import { Flex, Box } from "@chakra-ui/react";
import { UnauthenticatedRoutePath } from "../../constant/UnauthenticatedRoutePath";
import MenuProd from "../Products/Menu/MenuPorduct";
import { NavLink} from "react-router-dom"

interface INavBarProsp {
    [key: string]: string
}

function NavBar({home, about, contact, product}:INavBarProsp) {
    return ( 
        <nav>
                    <Flex>
                        <Box fontSize={18} mr={4}>
                            <NavLink to={UnauthenticatedRoutePath.Home()}>
                                {home}
                            </NavLink>
                        </Box>
                        <Box fontSize={18} mr={4}>
                            <NavLink to="#">
                                {about}
                            </NavLink>
                        </Box> 
                        <Box fontSize={18} mr={4}>
                            <MenuProd product={product}/>
                        </Box> 
                        <Box fontSize={18} mr={4}>
                            <NavLink to="#">
                                {contact}
                            </NavLink>
                        </Box> 
                        <Box fontSize={18} mr={4}>
                            <NavLink to="#">
                                Baskets
                            </NavLink>
                        </Box> 
                    </Flex>
                </nav>
     );
}

export default NavBar;