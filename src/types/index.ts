import { type RouterOutputs } from "~/utils/api";

export type FilteredProduct = RouterOutputs["product"]["getfiltered"][0];

export interface featuredCard {
  id: string;
  name: string;
  type: string;
  price: number;
  vendor: string;
  url: string | undefined;
}
