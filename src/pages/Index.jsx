import { Box, Flex, Text, VStack, Link, Input, Button, Textarea } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box as="main" minH="100vh">
      <Flex as="header" bg="brand.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">John Doe</Text>
        <Flex as="nav">
          <Link href="#about" p={2}>About</Link>
          <Link href="#portfolio" p={2}>Portfolio</Link>
          <Link href="#contact" p={2}>Contact</Link>
        </Flex>
      </Flex>
      <VStack spacing={8} p={8} align="stretch" id="about">
        <Text fontSize="2xl" fontWeight="bold">About Me</Text>
        <Text>I'm a professional web developer with a passion for creating beautiful and functional websites. I have a background in computer science and over 5 years of experience in the industry.</Text>
      </VStack>
      <VStack spacing={8} p={8} align="stretch" bg="gray.100" id="portfolio">
        <Text fontSize="2xl" fontWeight="bold">Portfolio</Text>
        <Flex justify="space-between">
          <Box p={4} bg="white" boxShadow="md">
            <Text fontWeight="bold">Project 1</Text>
            <Text>Description of project 1.</Text>
          </Box>
          <Box p={4} bg="white" boxShadow="md">
            <Text fontWeight="bold">Project 2</Text>
            <Text>Description of project 2.</Text>
          </Box>
          <Box p={4} bg="white" boxShadow="md">
            <Text fontWeight="bold">Project 3</Text>
            <Text>Description of project 3.</Text>
          </Box>
        </Flex>
      </VStack>
      <Flex direction="column" p={8} align="center" id="contact">
        <Text fontSize="2xl" fontWeight="bold">Contact Me</Text>
        <Flex as="form" direction="column" mt={4} w="full" maxW="md">
          <Input placeholder="Your Name" mb={2} />
          <Input placeholder="Your Email" mb={2} type="email" />
          <Textarea placeholder="Your Message" mb={2} />
          <Button colorScheme="blue">Send Message</Button>
        </Flex>
        <Flex mt={4}>
          <Link href="https://github.com" isExternal><FaGithub size="24px" /></Link>
          <Link href="https://linkedin.com" isExternal ml={2}><FaLinkedin size="24px" /></Link>
          <Link href="mailto:example@example.com" ml={2}><FaEnvelope size="24px" /></Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;