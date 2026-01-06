import { Language } from '@/lib/translations';

interface RiskReversalProps {
    language: Language;
}

const guarantees = {
    en: [
        { icon: '✓', text: '100% Free Inspection' },
        { icon: '✓', text: 'No Obligation to Buy' },
        { icon: '✓', text: 'No Pressure Sales' },
        { icon: '✓', text: 'Written Estimate Included' }
    ],
    es: [
        { icon: '✓', text: 'Inspección 100% Gratis' },
        { icon: '✓', text: 'Sin Obligación de Compra' },
        { icon: '✓', text: 'Sin Presión de Venta' },
        { icon: '✓', text: 'Presupuesto Escrito Incluido' }
    ]
};

const titles = {
    en: 'Our Guarantee',
    es: 'Nuestra Garantía'
};

export function RiskReversal({ language }: RiskReversalProps) {
    return (
        <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mt-6">
            <h4 className="text-accent font-bold text-center mb-3">
                {titles[language]}
            </h4>
            <div className="grid grid-cols-2 gap-2">
                {guarantees[language].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-foreground/80">
                        <span className="text-accent font-bold">{item.icon}</span>
                        <span className="text-sm">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RiskReversal;
