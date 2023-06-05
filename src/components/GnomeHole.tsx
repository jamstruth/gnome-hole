import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'

interface GnomeHoleProps {
    timerFinished: boolean;
    gnomeDirectories: Array<File>;
    audible: boolean;
    gnomeChance: number;
}

function gnomeOccurrence(gnomeChance: number) {
    const randomNumber = Math.floor(Math.random() * gnomeChance) + 1;
    return randomNumber === gnomeChance;
}

function displayGnome(timerFinished: boolean, gnomeChance: number) {
    return timerFinished;
}

export function GnomeHole({
    timerFinished,
    gnomeDirectories,
    audible,
    gnomeChance,
}: GnomeHoleProps) {
    let content = (
        <CardContent>
            Wait for Gnome?
        </CardContent>
    );

    if (displayGnome(timerFinished, gnomeChance)) {
        content = (
            <CardContent>
                GNOME OCCURENCE!!!
            </CardContent>
        );
    } else if (timerFinished) {
        content = (
            <CardContent>
                Too bad, no gnome today
            </CardContent>
        )
    }

    return (
        <Card>
            { displayGnome(timerFinished, gnomeChance) && 
                <CardContent>
                    GNOME OCCURENCE!!!
                </CardContent>
            }
        </Card>
    )
}