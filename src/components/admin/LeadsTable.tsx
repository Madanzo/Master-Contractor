import { useState, useEffect } from 'react';
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    updateDoc,
    doc
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { LeadStatusSelect } from './LeadStatusSelect';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';

interface Lead {
    id: string;
    name?: string;
    phone: string;
    city: string;
    service?: string;
    status: string;
    submittedAt: any;
    utm_source?: string;
    landingPageUrl?: string;
}

export const LeadsTable = () => {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Real-time subscription to leads
        const q = query(
            collection(db, 'leads'),
            orderBy('submittedAt', 'desc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const leadsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Lead[];
            setLeads(leadsData);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const handleStatusChange = async (leadId: string, newStatus: string) => {
        try {
            await updateDoc(doc(db, 'leads', leadId), {
                status: newStatus
            });
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const filteredLeads = leads.filter(lead =>
        lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.includes(searchTerm) ||
        lead.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div className="p-8 text-center text-gray-500">Loading leads...</div>;
    }

    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <h1 className="text-2xl font-bold tracking-tight">Leads</h1>
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search leads..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Service</TableHead>
                            <TableHead>Source</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredLeads.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="h-24 text-center">
                                    No leads found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredLeads.map((lead) => (
                                <TableRow key={lead.id}>
                                    <TableCell className="whitespace-nowrap">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Calendar className="w-3 h-3" />
                                            {lead.submittedAt?.toDate ? format(lead.submittedAt.toDate(), 'MMM d, h:mm a') : 'Pending'}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <LeadStatusSelect
                                            status={lead.status}
                                            onChange={(status) => handleStatusChange(lead.id, status)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-medium">{lead.name || 'Anonymous'}</div>
                                        <div className="text-sm text-gray-500">
                                            <a href={`tel:${lead.phone}`} className="hover:text-primary hover:underline">
                                                {lead.phone}
                                            </a>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-3 h-3 text-gray-400" />
                                            {lead.city}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <span className="capitalize">{lead.service || 'Not specified'}</span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded w-fit">
                                                {lead.utm_source || 'Direct'}
                                            </span>
                                            {lead.landingPageUrl && (
                                                <a
                                                    href={lead.landingPageUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-xs text-blue-500 hover:underline flex items-center gap-1"
                                                >
                                                    View Page <ExternalLink className="w-2 h-2" />
                                                </a>
                                            )}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="text-xs text-gray-400 text-right">
                Showing {filteredLeads.length} leads
            </div>
        </div>
    );
};
