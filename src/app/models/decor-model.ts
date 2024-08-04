export interface DecorData {
  id: number;
  categoryType: string;
  title: string;
  imageUrl: string;
  description: string;
  items: string[];
  sortBy?: number;
}

export interface LightingData extends DecorData {

}
