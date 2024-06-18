import { Box } from "@chakra-ui/react";


const Footer = () => {
    
    return (
      <Box as="footer" bg="gray.200" color="black" py={4} textAlign="center">
        © {new Date().getFullYear()} Garden & Gardening Supplies. All rights reserved.
      </Box>
    );
  };

export default Footer;