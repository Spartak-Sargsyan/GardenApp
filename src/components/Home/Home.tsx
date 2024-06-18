import React from "react";
import { Box, Container, Heading, Text, Flex, Button } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <>
      <Box bg="gray.100" py={12}>
        <Container maxW="container.lg">
          <Heading as="h1" size="xl" textAlign="center" mb={6}>
            Welcome to Garden & Gardening Supplies
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12}>
            Explore our wide selection of gardening tools, equipment, seeds, and more.
          </Text>
          <Flex justifyContent="center">
            <Button colorScheme="blue" size="lg">
              Shop Now
            </Button>
          </Flex>
        </Container>
      </Box>
      <Box py={12}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={6}>
            Featured Products
          </Heading>
          {/* Здесь вы можете добавить раздел с избранными продуктами */}
        </Container>
      </Box>
      <Box bg="gray.100" py={12}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={6}>
            About Us
          </Heading>
          <Text fontSize="lg" mb={12}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tellus id ligula sagittis tincidunt.
            Nulla facilisi. Suspendisse ac diam non nisi ultricies ultricies. Sed nec semper nisl.
          </Text>
        </Container>
      </Box>
      <Box py={12}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={6}>
            Contact Us
          </Heading>
          <Text fontSize="lg" mb={6}>
            Email: info@gardensupplies.com
          </Text>
          <Text fontSize="lg" mb={12}>
            Phone: 123-456-7890
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Home;
