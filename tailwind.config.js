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
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
