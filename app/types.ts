export type RegaloType = {
    id: number;
    created_at: Date;
    updated_at: Date;
    item: string;
    purchased: boolean;
    cookie_id?: string;
    item_url?: string;
    buyer: string;
};
