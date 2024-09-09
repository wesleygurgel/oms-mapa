import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FiMaximize, FiMinimize } from "react-icons/fi";

const FullScreenButton = ({ isFullscreen, toggleFullscreen }) => {
    return (
        <IconButton
            aria-label="Fullscreen"
            icon={isFullscreen ? <FiMinimize /> : <FiMaximize />}
            onClick={toggleFullscreen}
            position="absolute"
            top={4}
            right={4}
            zIndex={10}
            bg="white"
        />
    );
};

export default FullScreenButton;
