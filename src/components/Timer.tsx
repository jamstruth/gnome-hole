import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTimer } from 'react-timer-hook';

interface TimerProps {
    timerLength: number;
    timerTrigger: Function;
}

export function Timer({timerLength}:TimerProps) {

    const expiryTimestamp = new Date();

    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + timerLength);

    const {
        seconds,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    

    return (
        <Card>
            <CardContent>
                {seconds}
            </CardContent>
        </Card>
    )
}