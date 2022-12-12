
// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(180deg, ${color1} 0%, ${color2} 100%)`;
}

// ----------------------------------------------------------------------

const primary = {
  light:"#fff",
  lighter:"rgba(255, 255, 255, 0.7)",
  main:"#90CAF9",
  dark:"#8381F0",
  darker:"#723F65"
};
const bgGray = {
  main:"#464E5F",
  dark: '#121212',    
}
const error = {
  main:"#F44336"
}
const secondry = {
  dark: 'rgba(255, 255, 255, 0.5);',
};

const gradients = {
  primary: createGradient(primary.light, bgGray.dark),
};
const activeColor = {
  main:"#90CAF9"
}
const textG = {
  main:"#0BB783"
}


const palette = {
  light: {
    mode: 'light',
    secondry,
    bgGray,
    gradients,
    activeColor,
    textG,
    error
  },
  dark: { 
    primary,
    secondry,
    mode: 'dark',
    gradients,
    activeColor,
    textG,
    error

  },
};

export default palette;
