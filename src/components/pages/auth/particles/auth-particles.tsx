import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import type {ISourceOptions} from "@tsparticles/engine";
import {loadSlim} from "@tsparticles/slim";
import particlesOptionLight from './auth-particles-light.json';
import particlesOptionDark from './auth-particles-dark.json';
import {useSelector} from "react-redux";
import type {RootState} from "../../../../store/store.ts";

export function AuthParticles() {
    const [init, setInit] = useState(false);
    const theme = useSelector((state: RootState) => state.theme.mode)
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const option = useMemo<ISourceOptions>(() => {
        if (theme === 'dark') {
            return particlesOptionDark as ISourceOptions
        } else {
            return particlesOptionLight as ISourceOptions
        }
    }, [theme]);

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={option}
            />
        );
    }

    return null;
}
