import React from "react";
import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { FaFlag, FaUsers, FaVirus, FaSkull } from "react-icons/fa"; // Importando ícones do react-icons

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
            textAlign="left"
        >
            {/* Nome do País */}
            {selectedCountry.CountryName && (
                <Flex alignItems="center" mb={2}>
                    <Icon as={FaFlag} color="teal.500" mr={2} />
                    <Text fontWeight="bold">{selectedCountry.CountryName}</Text>
                </Flex>
            )}

            {/* População */}
            {selectedCountry.População && (
                <Flex alignItems="center" mb={2}>
                    <Icon as={FaUsers} color="teal.500" mr={2} />
                    <Text>População: {selectedCountry.População}</Text>
                </Flex>
            )}

            {/* Infectados */}
            {selectedCountry.Infectados && (
                <Flex alignItems="center" mb={2}>
                    <Icon as={FaVirus} color="red.500" mr={2} />
                    <Text>Infectados: {selectedCountry.Infectados}</Text>
                </Flex>
            )}

            {/* Óbitos */}
            {selectedCountry.Óbitos && (
                <Flex alignItems="center">
                    <Icon as={FaSkull} color="gray.600" mr={2} />
                    <Text>Óbitos: {selectedCountry.Óbitos}</Text>
                </Flex>
            )}
        </Box>
    );
};

export default CountryLegend;
