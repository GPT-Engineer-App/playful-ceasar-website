import { Container, Image, Box, Text, VStack } from "@chakra-ui/react";
import { useState, useRef } from 'react';

const Index = () => {
  const [zoom, setZoom] = useState(1);
  const imgRef = useRef(null);
  const handleZoom = () => {
    setZoom(zoom => zoom < 2 ? zoom + 0.1 : zoom);
    if (zoom >= 2) setZoom(1);
  };

  return (
    <Container maxW="full" p={0} centerContent>
      <Box display="flex" alignItems="center" justifyContent="center" height="100vh" width="100vw" bg="black" onClick={handleZoom}>
        <Image
          src="https://caesar-age.netlify.app/ceasar-on-back.jpg"
          alt="Caesar"
          objectFit="cover"
          htmlWidth={`${100 * zoom}%`}
          htmlHeight="100%"
          style={{ objectPosition: 'top' }}
          ref={imgRef}
        />
      </Box>
      <Box p={5} bg="white" width="full" textAlign="center">
        <VStack spacing={3}>
          <Text fontSize="xl" fontWeight="bold">About Caesar</Text>
          <Text fontSize="md">Caesar is currently 24.03 months old.</Text>
          <Text fontSize="md">He was born on 2022-05-12.</Text>
          <Text fontSize="md">He is 2 years old.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;