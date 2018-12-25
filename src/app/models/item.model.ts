export interface IItem {
  id: number;
  heading: string;
  image: string;
  description: string;
  marks: number[];
  reviews: string[];
  favourite?: boolean;
}
