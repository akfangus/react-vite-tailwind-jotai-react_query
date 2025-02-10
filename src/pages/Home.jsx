import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardImage } from '@/components/ui/Card';
import { testAtom } from '@/contexts/store/testAtom';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';

export default function Home() {
    const [count] = useAtom(testAtom);
    return (
        <Container>
            <Link to="/test">Test</Link>
            <Button onClick={() => alert('nnnnnn')}> click</Button>
            <p>{count}</p>
            <Card>
                <CardImage src="https://picsum.photos/200/300" alt="Card Image">
                    <div className="absolute top-0 right-0">
                        <p>test</p>
                    </div>
                </CardImage>
                <CardContent>
                    <p>Logo</p>
                    <CardDescription>88%</CardDescription>
                </CardContent>
            </Card>
        </Container>
    );
}
