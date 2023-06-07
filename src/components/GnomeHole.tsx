import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import hole from './gnomes/hole.png'
import gnome from './gnomes/successes/gnome_one/gnome.png'
import failSound from './gnomes/hole.png'
import useSound from 'use-sound';
import { useState, useEffect } from 'react';

interface GnomeHoleProps {
    timerFinished: boolean;
    audible: boolean;
    gnomeChance: number;
}

export function GnomeHole({
    timerFinished,
    audible,
    gnomeChance,
}: GnomeHoleProps) {

    const [gnomeState, setGnomeState] = useState('none');

    const [playFail] = useSound(
        failSound
    );
    
    useEffect(() => {
        if (timerFinished) {
            if (gnomeOccurrence(gnomeChance)) {
                setGnomeState('success');
            } else {
                setGnomeState('fail');
                playFail();
            }
        } else {
            setGnomeState('none');
        }
    }, [timerFinished]);

    function gnomeOccurrence(gnomeChance: number) {
        const randomNumber = Math.floor(Math.random() * gnomeChance) + 1;
        return randomNumber === gnomeChance;
    }

    return (
        <Card>
            { gnomeState === 'none' && (
                <CardContent>
                    <img src={hole} alt="Gnome Hole" />
                    <p>Wait for Gnome?</p>
                </CardContent>
            )}
            { gnomeState === 'fail' && (
                <CardContent>
                    <img src={hole} alt="Gnome Hole" />
                    <p>Too bad, no gnome today</p>
                </CardContent>
            )}
            { gnomeState === 'success' && (
                <CardContent>
                    <img src={gnome} alt="A GNOME!" />
                </CardContent>
            )}
        </Card>
    );
};