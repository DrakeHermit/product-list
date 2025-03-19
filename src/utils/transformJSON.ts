import productData from '../data.json';

interface RawData {
  name: string,
  category: string,
  price: number,
  image: {
    mobile: string,
    tablet: string,
    desktop: string,
    thumbnail: string,
  }
}

export interface ProcessedData extends RawData {
  id: string,
}

export const transformJSON = (): ProcessedData[] => {
  return productData.map((item: RawData, index: number) => {
    return {
      ...item,
      id: `item-${index}`,
    }
  })
}