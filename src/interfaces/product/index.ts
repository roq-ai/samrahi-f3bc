import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  cost: number;
  buying_quantity: number;
  price_per_unit: number;
  discount?: number;
  total_price: number;
  unit_sent: number;
  location: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  organization_id?: string;
}
