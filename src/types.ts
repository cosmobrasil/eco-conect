export type SectorType = 'Construção Civil' | 'Laticínios & Alimentos' | 'Indústria de Metais' | 'Tecnologia & Eletrônicos' | 'Varejo & Embalagens' | 'Outro';

export interface CompanyMetrics {
  energyRenewable: number; // 0 to 100
  waterRecirculation: number; // 0 to 100
  wasteDiverted: number; // 0 to 100 (diverted from landfill)
  rawMaterialCircular: number; // 0 to 100 (recycled or bio-based)
  logisticsReversible: number; // 0 to 100 (reverse logistics implemented)
}

export interface CircularAssessmentInput {
  companyName: string;
  sector: SectorType;
  customDetails?: string;
  metrics: CompanyMetrics;
}

export interface ActionPlanStep {
  step: string;
  priority: 'Alta' | 'Média' | 'Baixa';
  description: string;
  expectedImpact: string;
}

export interface CircularOpportunity {
  name: string;
  type: 'Simbiose Industrial' | 'Upcycling Industrial' | 'Logística Reversa' | 'Modelos de Negócio';
  description: string;
  potentialBenefit: string;
  partnersType: string;
}

export interface AIDiagnostic {
  maturityLevel: 'Iniciante' | 'Em Transição' | 'Avançado' | 'Líder Circular';
  scores: {
    strategy: number;    // 0-100
    operations: number;  // 0-100
    intelligence: number;// 0-100
    overall: number;     // 0-100
  };
  diagnosisSummary: string;
  isoCompliance: {
    iso59004: string; // Principles & Guidelines analysis
    iso59010: string; // Business models interpretation
    iso59020: string; // Measurement & Assessment perspective
  };
  actionPlan: ActionPlanStep[];
  circularOpportunities: CircularOpportunity[];
}
