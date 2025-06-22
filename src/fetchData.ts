import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
}

interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}


export const fetchData = async (searchVal: string, curentPage: number): Promise<UnsplashResponse> => {
    const response = await axios.get<UnsplashResponse>("", {
        params: {
          client_id: "PcDGVBlQbnoOjss3cPKeJ1dEjQGABwpKslQjuEefe_E",
          query: searchVal,
          per_page: 12,
          page: curentPage
        }
    });
    
    return response.data;
}