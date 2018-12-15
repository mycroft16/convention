import { IDays } from './days.interface';

export interface IConvention {
    id: number;
    conName: string;
    startDate: string;
    startDisplay: string;
    endDate: string;
    endDisplay: string;
    days: IDays[];
    status: 'Archived' | 'Current' | 'Next';
}

