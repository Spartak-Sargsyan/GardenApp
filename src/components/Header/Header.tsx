import { Box, Heading, Flex, Container } from "@chakra-ui/react";
import { SwitchLanguage } from "../SwitchLanguage/SwitchLanguage";
import { useTranslation } from "react-i18next";
import NavBar from "../NavBar/NavBar";

const Header = () => {

    const {t, i18n} = useTranslation()

    const handeleSwitchLanguage = (language:string) =>{
        i18n.changeLanguage(language)
    }

    return (

        <Box as="header" bg="green.500" color="white" py={4}>
            <Container maxW={1500}>
            <Flex justify={"space-between"} mx="auto" alignItems="center">
                <Heading as="h1" size="lg">
                Garden & Gardening Supplies
                </Heading>
                
                <NavBar home={t('MENU.HOME')} product={t('MENU.PRODUCT')} about={t("MENU.ABOUT")} contact={t("MENU.CONTACT")}/>
                
                <Box>
                    <SwitchLanguage onChange={handeleSwitchLanguage} text1={"en"} text2={"ru"}/>
                </Box>
            </Flex>
            </Container>
        </Box>
    );
    };

export default Header;
