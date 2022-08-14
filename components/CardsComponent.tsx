import { Grid, GridItem, Box, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const CardsComponent = () => {
  const formData = useSelector((state: any) => state.form.form);

  return (
    <Box as="section" h="100vh" pos="relative">
      <Flex
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%);"
      >
        <Grid w="40vw" gap={10}>
          <GridItem display="flex" justifyContent="flex-start">
            <Box pos="relative" p="2rem" pl="1.5rem" w="27rem">
              <Image
                pos="absolute"
                zIndex="-1"
                top="0"
                left="0"
                src="/bg-card-front.png"
                alt="card-front"
              />
              <Flex
                height="11rem"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Flex alignItems="center" pl="0.5rem">
                  <Box
                    as="span"
                    bgColor="#fff"
                    borderRadius="50%"
                    w="2.5rem"
                    h="2.5rem"
                  ></Box>
                  <Box
                    as="span"
                    border="1px solid #fff"
                    borderRadius="50%"
                    w="1.5rem"
                    h="1.5rem"
                    ml="1rem"
                  ></Box>
                </Flex>
                <Box>
                  <Text
                    w="fit-content"
                    margin="auto"
                    fontSize="1.8rem"
                    fontWeight="500"
                    letterSpacing="2px"
                    color="#fff"
                    mb="1rem"
                  >
                    {formData.cardNumber}
                  </Text>
                  <Flex justifyContent="space-between" px="0.7rem">
                    <Text
                      letterSpacing="2px"
                      color="#fff"
                      w="fit-content"
                      fontSize="0.8rem"
                      fontWeight="500"
                      textTransform="uppercase"
                    >
                      {formData.cardHolderName}
                    </Text>
                    <Text
                      letterSpacing="2px"
                      color="#fff"
                      w="fit-content"
                      fontSize="0.8rem"
                      fontWeight="500"
                      textTransform="uppercase"
                    >
                      {formData.expiryMM}/{formData.expiryYY}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>
          <GridItem display="flex" justifyContent="flex-end">
            <Box pos="relative" p="2rem" pl="1.5rem" w="27rem" h="13rem">
              <Image
                pos="absolute"
                zIndex="-1"
                top="0"
                left="0"
                src="/bg-card-back.png"
                alt="card-front"
              />

              <Text
                pos="absolute"
                top="50%"
                right="15%"
                fontWeight="500"
                fontSize="1.2rem"
                color="#fff"
              >
                {formData.cvv}
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};

export default CardsComponent;
