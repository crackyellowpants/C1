
export interface Character {
  id: string;
  name: string;
  gender: string;
  appearance: string;
  personality: string;
  likes: string;
  dislikes: string;
  skills: string;
  weaknesses: string;
  speechStyle: string;
  background: string;
  imageUrl: string;
  galleryImages: string[];
}

export interface Series {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  characters: Character[];
}
