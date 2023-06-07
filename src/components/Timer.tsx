import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTimer } from 'react-timer-hook';

interface TimerProps {
    timerLength: number;
    timerTrigger: () => any;
}

export function Timer({timerLength, timerTrigger}:TimerProps) {

    function getExpiryTimestamp(): Date {
        const expiryTimestamp = new Date();
        expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + timerLength);
        return expiryTimestamp;
    }

    const {
        seconds,
        restart,
        isRunning,
    } = useTimer({ expiryTimestamp: getExpiryTimestamp(), autoStart: false, onExpire: timerTrigger });

    function startOrResetTimer() {
        restart(getExpiryTimestamp(), true);
    }
    
    if (isRunning) {
        return (
            <CardContent>
                {seconds}
            </CardContent>
        )
    } else {
        return (
            <CardContent>
                <Button 
                    variant="contained"
                    onClick={startOrResetTimer}
                >
                    Start Timer
                </Button>
            </CardContent>
        )
    }
    
}