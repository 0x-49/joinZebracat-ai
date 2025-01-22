/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["selector", 'class'],
  theme: {
  	container: {
  	  center: true,
  	  padding: {
  	    DEFAULT: '1rem',
  	    sm: '2rem',
  	    lg: '4rem',
  	    xl: '5rem',
  	    '2xl': '6rem',
  	  },
  	},
  	screens: {
  	  'xs': '480px',
  	  'sm': '640px',
  	  'md': '768px',
  	  'lg': '1024px',
  	  'xl': '1280px',
  	  '2xl': '1536px',
  	},
  	extend: {
  	  fontSize: {
  	    base: ['1rem', { lineHeight: '1.5' }],
  	    lg: ['1.125rem', { lineHeight: '1.5' }],
  	    xl: ['1.25rem', { lineHeight: '1.5' }],
  	    '2xl': ['1.5rem', { lineHeight: '1.25' }],
  	    '3xl': ['1.875rem', { lineHeight: '1.25' }],
  	    '4xl': ['2.25rem', { lineHeight: '1.25' }],
  	    '5xl': ['3rem', { lineHeight: '1.25' }],
  	    '6xl': ['3.75rem', { lineHeight: '1.25' }],
  	    '7xl': ['4.5rem', { lineHeight: '1.25' }],
  	    '8xl': ['6rem', { lineHeight: '1.25' }],
  	    '9xl': ['8rem', { lineHeight: '1.25' }]
  	  },
  	  spacing: {
  	    px: '1px',
  	    0: '0',
  	    0.5: '0.125rem',
  	    1: '0.25rem',
  	    1.5: '0.375rem',
  	    2: '0.5rem',
  	    2.5: '0.625rem',
  	    3: '0.75rem',
  	    3.5: '0.875rem',
  	    4: '1rem',
  	    5: '1.25rem',
  	    6: '1.5rem',
  	    7: '1.75rem',
  	    8: '2rem',
  	    9: '2.25rem',
  	    10: '2.5rem',
  	    11: '2.75rem',
  	    12: '3rem',
  	    14: '3.5rem',
  	    16: '4rem',
  	    20: '5rem',
  	    24: '6rem',
  	    28: '7rem',
  	    32: '8rem',
  	    36: '9rem',
  	    40: '10rem',
  	    44: '11rem',
  	    48: '12rem',
  	    52: '13rem',
  	    56: '14rem',
  	    60: '15rem',
  	    64: '16rem',
  	    72: '18rem',
  	    80: '20rem',
  	    96: '24rem'
  	  },
  	  colors: {
  	    primary: {
  	      '100': '#e6f5e6',
  	      '200': '#c2e0c2',
  	      '300': '#9ecb9e',
  	      '400': '#7ab67a',
  	      '500': '#56a156',
  	      '600': '#3d8c3d',
  	      '700': '#2b772b',
  	      '800': '#1a611a',
  	      '900': '#0a4c0a',
  	      DEFAULT: 'hsl(var(--primary))',
  	      foreground: 'hsl(var(--primary-foreground))'
  	    },
  			neutral: {
  				'100': '#f5f5f5',
  				'200': '#e5e5e5',
  				'300': '#d4d4d4',
  				'400': '#a3a3a3',
  				'500': '#737373',
  				'600': '#525252',
  				'700': '#404040',
  				'800': '#262626',
  				'900': '#171717'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundColor: {
  			'neutral-900': '#171717'
  		},
  		textColor: {
  			'neutral-900': '#171717'
  		},
  		borderRadius: {
  			button: '4px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		zIndex: {
  			'0': '0',
  			'10': '10',
  			'20': '20',
  			'30': '30',
  			'40': '40',
  			'50': '50',
  			'auto': 'auto',
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-fluid-type")({
      settings: {
        fontSizeMin: 1.0,   // 16px
        fontSizeMax: 1.5,   // 24px
        ratioMin: 1.125,    // Minor third
        ratioMax: 1.333,    // Perfect fourth
        screenMin: 20,      // 320px
        screenMax: 96,      // 1536px
        unit: 'rem',
        prefix: '',
        extendValues: true,
      },
      values: {
        'xs': [-2, 1.6],
        'sm': [-1, 1.6],
        'base': [0, 1.6],
        'lg': [1, 1.6],
        'xl': [2, 1.6],
        '2xl': [3, 1.4],
        '3xl': [4, 1.3],
        '4xl': [5, 1.2],
        '5xl': [6, 1.1],
        '6xl': [7, 1.1],
        '7xl': [8, 1.1],
        '8xl': [9, 1.05],
        '9xl': [10, 1.05],
      },
    }),
  ],
}

module.exports = config