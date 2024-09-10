// Função para alternar para o modo fullscreen
export const toggleFullscreen = (isFullscreen, setIsFullscreen, mapRef) => {
    if (!isFullscreen) {
        if (mapRef.current.requestFullscreen) {
            mapRef.current.requestFullscreen().then(() => handleOrientationChange());
        } else if (mapRef.current.mozRequestFullScreen) {
            mapRef.current.mozRequestFullScreen().then(() => handleOrientationChange()); // Firefox
        } else if (mapRef.current.webkitRequestFullscreen) {
            mapRef.current.webkitRequestFullscreen().then(() => handleOrientationChange()); // Chrome, Safari, Opera
        } else if (mapRef.current.msRequestFullscreen) {
            mapRef.current.msRequestFullscreen().then(() => handleOrientationChange()); // IE/Edge
        }
    } else {
        // Verifique se o documento está realmente em fullscreen antes de sair
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }
    setIsFullscreen(!isFullscreen);
};

// Função para buscar dados do país com base no id
export const getCountryInfo = (id, countryData) => {
    if (countryData) {
        return countryData.find((country) => country.CountryID === id);
    }
    return null;
};

// Função para mudar a orientação da tela
const handleOrientationChange = () => {
    // Verifica se a API de Orientação de Tela está disponível e se o dispositivo é mobile
    if (window.screen.orientation && /Mobi/i.test(navigator.userAgent)) {
        try {
            window.screen.orientation.lock("landscape").catch((error) => {
                console.warn("Erro ao mudar a orientação: ", error);
            });
        } catch (error) {
            console.warn("API de orientação de tela não suportada: ", error);
        }
    }
};
