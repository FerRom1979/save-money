export interface ITitleProps {
  text: string;
  variant?: "h1" | "h2";
  fontSize?: number;
  color?: string;
  className?: string;
}

export interface IStyledTitlesProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: number;
  color?: string;
}
