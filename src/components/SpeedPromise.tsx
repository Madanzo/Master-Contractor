import { Language } from '@/lib/translations';

interface SpeedPromiseProps {
    language: Language;
}

const content = {
    en: {
        title: 'Fast Response Guaranteed',
        items: [
            { time: '15 min', desc: 'We call you back' },
            { time: '24 hrs', desc: 'Inspection scheduled' },
            { time: '48 hrs', desc: 'Written estimate ready' }
        ]
    },
    es: {
        title: 'Respuesta Rápida Garantizada',
        items: [
            { time: '15 min', desc: 'Te llamamos' },
            { time: '24 hrs', desc: 'Inspección programada' },
            { time: '48 hrs', desc: 'Presupuesto listo' }
        ]
    }
};

export function SpeedPromise({ language }: SpeedPromiseProps) {
    const t = content[language];

    return (
        <div className="bg-primary/10 rounded-lg p-4 my-6">
            <h4 className="text-primary font-bold text-center mb-4">{t.title}</h4>
            <div className="flex justify-around">
                {t.items.map((item, i) => (
                    <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-primary">{item.time}</div>
                        <div className="text-sm text-foreground/80">{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpeedPromise;
