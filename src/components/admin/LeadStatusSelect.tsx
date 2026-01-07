import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface LeadStatusSelectProps {
    status: string;
    onChange: (value: string) => void;
}

export const LeadStatusSelect = ({ status, onChange }: LeadStatusSelectProps) => {
    const getStatusColor = (s: string) => {
        switch (s) {
            case 'new': return 'bg-blue-100 text-blue-800';
            case 'contacted': return 'bg-yellow-100 text-yellow-800';
            case 'scheduled': return 'bg-purple-100 text-purple-800';
            case 'completed': return 'bg-green-100 text-green-800';
            case 'lost': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <Select value={status} onValueChange={onChange}>
            <SelectTrigger className={`w-[130px] h-8 text-xs font-medium border-0 ${getStatusColor(status)}`}>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="new">New Lead</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="completed">Sold / Closed</SelectItem>
                <SelectItem value="lost">Lost</SelectItem>
            </SelectContent>
        </Select>
    );
};
