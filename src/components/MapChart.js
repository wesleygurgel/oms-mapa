import React, { memo } from "react";
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";


const MapChart = ({ setTooltipContent }) => {
    return (
        <div data-tip="">
            <ComposableMap>
                <ZoomableGroup>
                    <Geographies geography="features.json">
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        console.log(geo)
                                        setTooltipContent(`${geo.properties.name}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
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
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default memo(MapChart);
