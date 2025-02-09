import { useAtom } from 'jotai';
import { testAtom } from '@/contexts/store/testAtom';
import { Link } from 'react-router-dom';

export default function Test() {
    const [count, setCount] = useAtom(testAtom);
    return (
        <div>
            <Link to="/">Home</Link>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
        </div>
    );
}
