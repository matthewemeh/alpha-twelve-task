interface ScrollElementProps extends ScrollToOptions {
  delay?: number;
  toTop?: boolean;
  toLeft?: boolean;
  toRight?: boolean;
  toBottom?: boolean;
  target: string | HTMLElement | null;
}
