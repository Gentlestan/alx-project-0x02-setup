export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  /*Button labels */
  children: React.ReactNode //this line makes it possible to pass text or icon
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full'
}

export interface PostProps {
  userId: number;
  title: string;
  content: string
}