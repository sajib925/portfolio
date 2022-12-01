const breakPoint = {
  sm: 575,
  md: 768,
  lg: 995,
  xl: 1170,
};

export const media = {
  up: function (bpn) {
    return `
      @media screen and (min-width: ${breakPoint[bpn]}px)
    `;
  },
  down: function (bpn) {
    return `
      @media screen and (max-width: ${breakPoint[bpn]}px)
    `;
  },
};

export default media
