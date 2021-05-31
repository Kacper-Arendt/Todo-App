const size= {
    mobileS: '320px',
    mobileM: '375px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
}

export const device: typeof size = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
};