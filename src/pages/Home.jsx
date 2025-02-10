import { Button } from '@/components/ui/Button';
import { testAtom } from '@/contexts/store/testAtom';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';

export default function Home() {
    const [count] = useAtom(testAtom);
    return (
        <div>
            <Link to="/test">Test</Link>
            <Button>click</Button>
            <p>{count}</p>
        </div>
    );
}
