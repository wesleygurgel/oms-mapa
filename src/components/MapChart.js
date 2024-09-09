import React, { memo, useEffect, useState, useRef } from "react";
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import FullScreenButton from "./FullScreenButton";
import CountryLegend from "./CountryLegend";
import { toggleFullscreen, getCountryInfo } from "../utils";
import { Tooltip } from "react-tooltip";

const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

const MapChart = () => {
    const [countryData, setCountryData] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [content, setContent] = useState(""); // Mover o estado do conteúdo do tooltip para cá
    const mapRef = useRef(); // Referência para o mapa

    // Carregar o JSON com dados dos países
    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setCountryData(data));
    }, []);

    return (
        <div style={{ position: "relative", height: "100%", width: "100%", overflow: "hidden", backgroundColor: isFullscreen ? "white" : "initial" }} ref={mapRef}>
            {/* Botão para alternar para o modo fullscreen */}
            <FullScreenButton
                isFullscreen={isFullscreen}
                toggleFullscreen={() => toggleFullscreen(isFullscreen, setIsFullscreen, mapRef)}
            />

            {/* Componente do Mapa */}
            <ComposableMap>
                <ZoomableGroup
                    minZoom={1}
                    maxZoom={4}
                    center={[0, 20]}
                    translateExtent={[
                        [-200, -200],
                        [1000, 800],
                    ]}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const countryInfo = getCountryInfo(geo.id, countryData); // Busca informações do país
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => {
                                            setContent(`${geo.properties.name}`); // Atualiza o conteúdo do tooltip
                                            setSelectedCountry(countryInfo); // Define o país selecionado para a legenda
                                        }}
                                        onMouseLeave={() => {
                                            setContent(""); // Limpa o conteúdo do tooltip
                                            setSelectedCountry(null); // Reseta a legenda ao sair do mouse
                                        }}
                                        style={{
                                            default: {
                                                fill: "#D6D6DA",
                                                outline: "none",
                                            },
                                            hover: {
                                                fill: "#F53",
                                                outline: "none",
                                            },
                                            pressed: {
                                                fill: "#E42",
                                                outline: "none",
                                            },
                                        }}
                                        data-tooltip-id="map-tooltip"
                                        data-tooltip-content={geo.properties.name}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>

            {/* Adicione o Tooltip aqui */}
            <Tooltip
                id="map-tooltip"
                place="top"
                content={content}
                isOpen={content !== ""}
                style={{ zIndex: 1000 }} // Garante que o tooltip apareça acima de outros elementos
            />

            {/* Legenda do País no Canto Superior Direito */}
            <CountryLegend selectedCountry={selectedCountry} />
        </div>
    );
};

export default memo(MapChart);
