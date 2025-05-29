import {
  FiLayers,
  FiDroplet,
  FiBox,
  FiClock,
  FiThermometer,
  FiCheck,
  FiShield,
  FiLock,
  FiCheckCircle
} from 'react-icons/fi';

export type ProductSpec = {
  icon: React.ReactNode;
  name: string;
  value: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  specs: ProductSpec[];
  features: string[];
  documents?: {
    catalog: string;
    certificate: string;
  };
  parameters?: Record<string, string>;
};

export type ProductsCategory = {
  id: string;
  name: string;
  products: Product[];
};