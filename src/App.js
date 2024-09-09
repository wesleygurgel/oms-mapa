import "./App.css";
import MapChart from "./components/MapChart";
import { Box, Text, Grid, Heading } from "@chakra-ui/react";

function App() {
    return (
        <div>
            <Grid templateRows="auto 1fr" templateColumns="1fr" gap={6} p={4} textAlign="center" alignItems="center" justifyItems="center">
                {/* Header da Aplicação */}
                <Box>
                    <Text fontSize="lg" fontWeight="bold" color="gray.600">
                        Organização Mundial da Saúde
                    </Text>
                </Box>

                {/* Título da Página */}
                <Box>
                    <Heading as="h1" size="xl" color="teal.600">
                        Mapa da OMS
                    </Heading>
                </Box>

                {/* Box contendo o Mapa */}
                <Box
                    p={4}
                    borderWidth="1px"
                    borderRadius="lg"
                    boxShadow="md"
                    marginTop="auto"
                    width="90%"
                >
                    <MapChart />
                </Box>
            </Grid>
        </div>
    );
}

export default App;
