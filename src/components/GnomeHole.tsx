import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import hole from './gnomes/hole.png'
import gnome from './gnomes/successes/gnome_one/gnome.png'
import failSound from './gnomes/hole.png'
import useSound from 'use-sound';

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

    const [playFail] = useSound(
        failSound,
        {
            volume: 1,
            autoplay: true
        }
    );

    function gnomeOccurrence(gnomeChance: number) {
        const randomNumber = Math.floor(Math.random() * gnomeChance) + 1;
        return randomNumber === gnomeChance;
    }
    
    function displayGnome(timerFinished: boolean, gnomeChance: number) {
        return timerFinished && gnomeOccurrence(gnomeChance);
    }

    let content = [(<img src={hole} alt="Gnome Hole" />), (<p>Wait for Gnome?</p>)];

    if (displayGnome(timerFinished, gnomeChance)) {
        content = [((<img src={gnome} alt="A GNOME!" />))];
    } else if (timerFinished) {
        content[1] = (<p>Too bad, no gnome today</p>);
        playFail();
    }

    return (
        <Card>
            <CardContent>
                { content }
            </CardContent>
        </Card>
    );
};