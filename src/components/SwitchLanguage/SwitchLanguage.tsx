import {
    Box,
    Image,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "./index";
  import en from "../../assets/images/English.jpg";
  import ru from "../../assets/images/Russion.jpg";
  import { useState } from "react";
  
  interface ILanguage {
    text1: string;
    text2: string;
    onChange: (language: string) => void;
  }
  
  const SwitchLanguage: React.FC<ILanguage> = ({ text1, text2, onChange }) => {
    const getFlagSrc = (language: string) => (language === "en" ? en : ru);
    const [flagSrc, setFlagSrc] = useState(getFlagSrc(text1 || text2));
  
    const handleLanguageChange = (selectedLanguage: string) => {
      setFlagSrc(getFlagSrc(selectedLanguage));
      onChange(selectedLanguage);
    };
  
    return (
      <Menu>
        <MenuButton
          as={Button}
        >
          <Box display="flex" alignItems="center">
            <Image src={flagSrc} alt={text1} boxSize="20px" />
          </Box>
        </MenuButton>
  
        <MenuList minWidth={"50px"}>
          <MenuItem
            onClick={() => handleLanguageChange(text1)}
          >
            <Box display="flex" alignItems="center">
              <Image src={en} alt={text1} boxSize="20px" />
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleLanguageChange(text2)}>
            <Box display="flex" alignItems="center">
              <Image src={ru} alt={text2} boxSize="20px" />
            </Box>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  };
  
  export { SwitchLanguage };