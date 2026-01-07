import { Navigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user, loading, signOut } = useAuth();
    const { toast } = useToast();

    const ALLOWED_EMAILS = ['camilo.reyna97@gmail.com'];

    useEffect(() => {
        if (user && user.email && !ALLOWED_EMAILS.includes(user.email)) {
            toast({
                variant: "destructive",
                title: "Access Denied",
                description: `The account ${user.email} is not authorized for this area.`,
            });
        }
    }, [user]);


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Security Check: Allowlist
    if (user.email && !ALLOWED_EMAILS.includes(user.email)) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
                <div className="bg-white p-8 rounded-lg shadow-sm max-w-md w-full border border-gray-100">
                    <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-xl">🔒</span>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900 mb-2">Access Restricted</h1>
                    <p className="text-gray-600 mb-6">
                        The account <strong>{user.email}</strong> does not have permission to access the Master Contractor Admin Dashboard.
                    </p>
                    <div className="flex flex-col gap-3">
                        <Button
                            variant="outline"
                            onClick={() => signOut()}
                            className="w-full"
                        >
                            Sign Out & Try Different Account
                        </Button>
                        <Button
                            variant="link"
                            onClick={() => window.location.href = '/'}
                            className="text-gray-500"
                        >
                            Return to Home
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};
