export interface IBooth {
    boothNumber: number;
}

export interface IVendor {
    id: number;
    category: string;
    name: string;
    image: string;
    description: string;
    link: string;
    booths: IBooth[];
}