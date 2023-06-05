import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTimer } from 'react-timer-hook';

interface TimerProps {
    timerLength: number;
    timerTrigger: () => any;
}

export function Timer({timerLength, timerTrigger}:TimerProps) {

    const expiryTimestamp = new Date();

    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + timerLength);

    const {
        seconds,
    } = useTimer({ expiryTimestamp, onExpire: timerTrigger });
    

    return (
        <Card>
            <CardContent>
                {seconds}
            </CardContent>
        </Card>
    )
}