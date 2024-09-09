import React from "react";
import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { FaFlag, FaUsers, FaCity, FaLanguage } from "react-icons/fa"; // Importando ícones do react-icons

const CountryLegend = ({ selectedCountry }) => {
    if (!selectedCountry) return null;

    return (
        <Box
            position="absolute"
            top={4}
            right={16}
            bg="white"
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="lg"
            textAlign="left" // Alinha o texto à esquerda
        >
            {/* Nome do País */}
            <Flex alignItems="center" mb={2}>
                <Icon as={FaFlag} color="teal.500" mr={2} />
                <Text fontWeight="bold">{selectedCountry.name}</Text>
            </Flex>

            {/* População */}
            <Flex alignItems="center" mb={2}>
                <Icon as={FaUsers} color="teal.500" mr={2} />
                <Text>Population: {selectedCountry.population}</Text>
            </Flex>

            {/* Capital */}
            <Flex alignItems="center" mb={2}>
                <Icon as={FaCity} color="teal.500" mr={2} />
                <Text>Capital: {selectedCountry.capital}</Text>
            </Flex>

            {/* Idioma */}
            <Flex alignItems="center">
                <Icon as={FaLanguage} color="teal.500" mr={2} />
                <Text>Language: {selectedCountry.language}</Text>
            </Flex>
        </Box>
    );
};

export default CountryLegend;
