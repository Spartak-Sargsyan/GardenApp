import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { UnauthenticatedRoutePath } from "../../../constant/UnauthenticatedRoutePath";

function MenuProd({product}:any) {
    return ( 
        <Menu>
            <MenuButton>
            <NavLink to={UnauthenticatedRoutePath.Product()}>
                {product} 🡣
            </NavLink>
            </MenuButton>
            <MenuList>
                <MenuItem bg={'green'}><Link to={UnauthenticatedRoutePath.Seed()}>Seed</Link></MenuItem>
                <MenuItem bg={'green'}><Link to={UnauthenticatedRoutePath.HandTool()}>Hand Tools</Link></MenuItem>
                <MenuItem bg={'green'}><Link to={UnauthenticatedRoutePath.PowerTool()}>Power Tools</Link></MenuItem>
            </MenuList>
        </Menu>
     );
}

export default MenuProd;