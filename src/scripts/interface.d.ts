interface ScrollElementProps extends ScrollToOptions {
  delay?: number;
  toTop?: boolean;
  toLeft?: boolean;
  toRight?: boolean;
  toBottom?: boolean;
  scrollSlides?: number;
  target: string | HTMLElement | null;
}
