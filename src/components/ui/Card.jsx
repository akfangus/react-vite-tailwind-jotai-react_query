import { cn } from '@/shared/utils/cn';

function Card({ className, ...props }) {
    return <div data-slot="card" className={cn('w-fit', className)} {...props} />;
}

function CardHeader({ className, ...props }) {
    return <div data-slot="card-header" className={cn('flex flex-col gap-1.5 p-6', className)} {...props} />;
}

function CardTitle({ className, ...props }) {
    return (
        <div data-slot="card-title" className={cn('leading-none font-semibold tracking-tight', className)} {...props} />
    );
}

function CardDescription({ className, ...props }) {
    return <div data-slot="card-description" className={cn('text-muted-foreground text-sm', className)} {...props} />;
}

function CardContent({ className, ...props }) {
    return (
        <div
            data-slot="card-content"
            className={cn('w-full bg-[#E7E7E7] flex flex-row px-4 py-3 gap-5 items-center', className)}
            {...props}
        />
    );
}

function CardFooter({ className, ...props }) {
    return <div data-slot="card-footer" className={cn('flex items-center p-6 pt-0', className)} {...props} />;
}

function CardImage({ className, src, alt, loading = 'lazy', children, ...props }) {
    return (
        <div className={cn('relative', className)} {...props}>
            <img src={src} alt={alt} loading={loading} decoding="async" className="w-full" />
            {children}
        </div>
    );
}

export { Card, CardImage, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
