import { useContext } from "react" 
import { CounterContext } from "../context/CounterContext";
 
type UseCounterNumberHookType = { 
    count: number; 
    increment: () => void; 
    decrement: () => void; 
} 
 
export const useCounterNumberHook = (): UseCounterNumberHookType => { 
    const { 
        state: { count }, 
        increment, 
        decrement 
    } = useContext(CounterContext); 
 
    return { count, increment, decrement }; 
}