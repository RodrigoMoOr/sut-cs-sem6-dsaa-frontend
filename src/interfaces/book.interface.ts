export interface IBook {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  coverImageURL: string;
}

export const isBook = (obj: any): obj is IBook => {
  return obj && obj.id && typeof obj.title === 'string';
};
