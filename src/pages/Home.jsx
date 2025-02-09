import Button from '@/components/ui/Button';
import { testAtom } from '@/contexts/store/testAtom';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';

export default function Home() {
    const [count] = useAtom(testAtom);
    return (
        <div>
            <Link to="/test">Test</Link>
            <Button label="버튼 컴포넌트" onClick={() => alert('click')} className="px-16" />
            <p>{count}</p>
        </div>
    );
}
