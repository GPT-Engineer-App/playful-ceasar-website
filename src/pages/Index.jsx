import { Container, Image, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="full" p={0} centerContent>
      <Box display="flex" alignItems="center" justifyContent="center" height="100vh" width="100vw" bg="black">
        <Image src="https://caesar-age.netlify.app/ceasar-on-back.jpg" alt="Caesar" objectFit="cover" htmlWidth="100%" htmlHeight="100%" />
      </Box>
    </Container>
  );
};

export default Index;