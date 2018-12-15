import { IDays } from './days.interface';
import { IFandom } from './fandoms.interface';

export interface IGuest {
    id: number;
    category: string;
    firstName: string;
    lastName: string;
    fullName?: string;
    initials?: string;
    isFavorite?: boolean;
    image: string;
    avatar: string;
    autograph: boolean;
    autographPrice: number;
    selfie: boolean;
    selfiePrice: number;
    photoOp: boolean;
    photoOpPrice: number;
    days: IDays[];
    fandoms: IFandom[];
    rating: number;
}