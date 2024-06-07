type Color = ColorString | ColorRGB;
type ColorString = 'red' | 'blue' | 'yellow' | 'purple';
type ColorRGB = [red: number, green: number, blue: number];

type Theme = Record<string, Color>;

const theme = {
  primary: 'red',
  secondary: [0, 255, 0],
  tertiary: 'purple',
} satisfies Theme;

const [r, g, b] = theme.secondary;