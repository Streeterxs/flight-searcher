module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      body: ['Roboto']
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
        '144': '36rem',
        '156': '39rem',
        '178': '42rem',
        '190': '45rem',
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
