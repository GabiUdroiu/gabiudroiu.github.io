export const THEMES = {
  default: {
    name: 'Default',
    description: 'Clean professional dark/light',
    colors: {
      primary: 'rgb(59, 130, 246)',
      secondary: 'rgb(107, 114, 128)',
      accent: 'rgb(139, 92, 246)',
    },
  },
  sakura: {
    name: 'Sakura Pink',
    description: 'Soft pink and cherry blossom vibes',
    colors: {
      primary: 'rgb(236, 72, 153)',
      secondary: 'rgb(244, 63, 94)',
      accent: 'rgb(254, 205, 211)',
    },
  },
  ocean: {
    name: 'Ocean Blue',
    description: 'Cool ocean and deep sea tones',
    colors: {
      primary: 'rgb(3, 102, 214)',
      secondary: 'rgb(5, 150, 213)',
      accent: 'rgb(0, 184, 148)',
    },
  },
  forest: {
    name: 'Forest Green',
    description: 'Natural green and earth tones',
    colors: {
      primary: 'rgb(34, 197, 94)',
      secondary: 'rgb(59, 130, 246)',
      accent: 'rgb(168, 85, 247)',
    },
  },
  sunset: {
    name: 'Sunset Orange',
    description: 'Warm orange and golden hues',
    colors: {
      primary: 'rgb(249, 115, 22)',
      secondary: 'rgb(236, 72, 153)',
      accent: 'rgb(251, 146, 60)',
    },
  },
  midnight: {
    name: 'Midnight Purple',
    description: 'Deep purple and violet tones',
    colors: {
      primary: 'rgb(139, 92, 246)',
      secondary: 'rgb(168, 85, 247)',
      accent: 'rgb(236, 72, 153)',
    },
  },
}

export const LAYOUT_PRESETS = {
  comfortable: {
    name: 'Comfortable',
    description: 'Relaxed spacing and padding',
    values: {
      containerPadding: 'px-8 py-10',
      cardPadding: 'p-8',
      gap: 'gap-8',
      radius: 'rounded-xl',
    },
  },
  default: {
    name: 'Default',
    description: 'Standard spacing',
    values: {
      containerPadding: 'px-6 py-8',
      cardPadding: 'p-6',
      gap: 'gap-6',
      radius: 'rounded-xl',
    },
  },
  compact: {
    name: 'Compact',
    description: 'Tight spacing for efficiency',
    values: {
      containerPadding: 'px-4 py-6',
      cardPadding: 'p-4',
      gap: 'gap-4',
      radius: 'rounded-lg',
    },
  },
}
