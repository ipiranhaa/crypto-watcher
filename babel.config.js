const inlineReactSvg = [
  'inline-react-svg',
  {
    svgo: {
      plugins: [
        {
          removeAttrs: { attrs: '(data-name)' },
        },
      ],
    },
  },
]

const config = {
  env: {
    development: {
      presets: ['next/babel'],
      plugins: [inlineReactSvg],
    },
    production: {
      presets: ['next/babel'],
      plugins: [inlineReactSvg],
    },
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: '12', chrome: '74' } }],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: [inlineReactSvg],
    },
  },
}

module.exports = config
