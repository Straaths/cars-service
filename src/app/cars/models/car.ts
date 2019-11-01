export interface Car {
    id: number;
    model: string;
    plate: string;
    deliveryDate: string;
    deadline: string;
    client: {
        firstName: string;
        surname: string;
    },
    cost: number;
    isFullyDamaged: boolean;
}