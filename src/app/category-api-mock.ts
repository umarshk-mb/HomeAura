import { DecorData } from "./models/decor-model";

export function categoryData(): DecorData[] {
  return [
    {
      id: 91,
      categoryType: 'Lighting',
      title: '',
      imageUrl: 'assets/light.jpg',
      description: 'first lighting product',
      items: [],
      sortBy: 1
    },
    {
      id: 92,
      categoryType: 'Pots & Plants',
      title: '',
      imageUrl: 'assets/pots.jpg',
      description: 'Second lighting product',
      items: [],
      sortBy: 2
    },
    {
      id: 93,
      categoryType: 'Painting & Frames',
      title: '',
      imageUrl: 'assets/frames.jpg',
      description: 'Second lighting product',
      items: [],
      sortBy: 2
    },
    {
      id: 93,
      categoryType: 'Furniture',
      title: '',
      imageUrl: 'assets/furniture.jpg',
      description: 'Second lighting product',
      items: [],
      sortBy: 2
    }
  ]
}
