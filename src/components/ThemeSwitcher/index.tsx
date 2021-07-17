import { useCallback, useEffect, useState } from 'react';

import { ColorCircle, Container, SwitchBox, ThemeBox, ThemeName, CustomColorInput, InputColorWrapper } from './styles'
import { useDebounce } from '../../hooks/useDebounce'

type ThemeSwitcherProps = {
    handleThemeSwitch: (themeTitle: string, hue?: number) => void;
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [debouncedCustomHue, customHue, setCustomHue] = useDebounce('', 20);


    useEffect(() => {
        function event(e: KeyboardEvent) {
            if (e.code === 'Escape') {  //close pressing escape
                setIsOpen(false)
            }
        }
        document.addEventListener('keydown', (e) => event(e));
        return () => document.removeEventListener('keydown', event)
    }, [])

    function handleChangeTheme(themeTitle: string, hue?: number) {
        props.handleThemeSwitch(themeTitle);
    }

    function getHueFromRGB(val: string) {
        const hex = val;
        const red = parseInt(hex.substr(1, 2), 16) / 255;
        const green = parseInt(hex.substr(3, 2), 16) / 255;
        const blue = parseInt(hex.substr(5, 2), 16) / 255;

        const rgb = [red, green, blue].sort();
        const min = rgb[0];
        const max = rgb[2];

        /*
        const l = (min + max) / 2;
        let s: number;
        if (min == max) {
            s = 0;
        } else if (l <= 0.5) {
            s = (max - min) / (max + min);
        } else {
            s = (max - min) / (2.0 - max - min)
        }
        */
        let h: number;

        if (red === max) {
            h = (green - blue) / (max - min);
        } else if (green === max) {
            h = 2 + (blue - red) / (max - min);
        } else {
            h = 4.0 + (red - green) / (max - min)
        }
        h = h * 60;
        return h;
    }

    const setCustomTheme = useCallback((val: string) => {
        props.handleThemeSwitch("custom", getHueFromRGB(val))
    }, [props])

    useEffect(() => {
        setCustomTheme(debouncedCustomHue);

    }, [debouncedCustomHue, setCustomTheme])
    console.log("custom hue", customHue)
    return (
        <Container>
            <ThemeBox>
                <ColorCircle onClick={() => setIsOpen(!isOpen)} />
                <ThemeName>Temas</ThemeName>
            </ThemeBox>
            <SwitchBox className={isOpen ? "visible" : ""}>
                <ColorCircle
                    className="red"
                    onClick={() => handleChangeTheme("red")} />
                <ColorCircle
                    className="orange"
                    onClick={() => handleChangeTheme("orange")} />
                <ColorCircle
                    className="yellow"
                    onClick={() => handleChangeTheme("yellow")} />
                <ColorCircle
                    className="lemon"
                    onClick={() => handleChangeTheme("lemon")} />
                <ColorCircle
                    className="green"
                    onClick={() => handleChangeTheme("green")} />
                <ColorCircle
                    className="lightBlue"
                    onClick={() => handleChangeTheme("lightBlue")} />
                <ColorCircle
                    className="blue"
                    onClick={() => handleChangeTheme("blue")} />
                <ColorCircle
                    className="purple"
                    onClick={() => handleChangeTheme("purple")} />
                <ColorCircle
                    className="malva"
                    onClick={() => handleChangeTheme("malva")} />
                <ColorCircle
                    className="pink"
                    onClick={() => handleChangeTheme("pink")} />
                <InputColorWrapper>
                    <CustomColorInput onChange={(e) => {
                        //console.log(e.target.value)
                        const val = e.target.value;
                        setCustomHue(val)
                    }} />
                </InputColorWrapper>
            </SwitchBox>

        </Container>
    )
}