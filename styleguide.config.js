const path = require('path');

// we can automatically search for all the components with component & ignore properties
// or use the section property and pass to a function with the same name as the name property all the relevant paths.

module.exports = {

  title: 'Aviv\'s Component Library',
  serverPort: 1111,

  // showCode: false, // the code is shown when clicking the code button.

  // showUsage: false, // the documentation is shown when clicking the code button.

  // showSidebar: true,

  // assetsDir : '{insert path}'/
  // Your application static assets folder. will be accessible as /

  // context: { map: 'lodash/map'  }/
  // Modules that will be available for examples.

  // defaultExample: true,
  // will generate a default example for each component that doesn't have an example file, in this pattern:
  // <__COMPONENT__>Default Example Usage</__COMPONENT__>
  //  we can provide a path for a more complex default

  // theme: {
  //   baseBackground: '#fdfdfc',
  //   link: '#274e75',
  //   linkHover: '#90a7bf',
  //   border: '#e0d2de',
  //   font: ['Helvetica', 'sans-serif'],
  // },

  // styles: {
  //   Playground: {
  //     preview: {
  //       paddingLeft: 0,
  //       paddingRight: 0,
  //       borderWidth: [[0, 0, 1, 0]],
  //       borderRadius: 0,
  //     },
  //   },
  //   Markdown: {
  //     pre: {
  //       border: 0,
  //       background: 'none',
  //     },
  //     code: {
  //       fontSize: 14,
  //     },
  //   },
  // },

  // components: 'app/common/styleguide/**/*.{js,jsx,ts,tsx}',

  // skipComponentsWithoutExample: false,
  // we can still require and display them in a different component example file or  add them in 'require' property to all other components

  // display the import path under the component name
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    const dir = path.dirname(componentPath);
    return `import ${name} from '${dir}';`;
  },

  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/index.js',
    '**/*.*.*',
  ],

  sections: [
    {
      name: 'Aviv\'s Component library',
      sections: [
        {
          name: 'General Explanation',
          content: './src/docs/styleGuidist/generalExplanation.md',
          description: 'I\'m the description from the config file',
        },
        {
          name: 'Terms Of Use',
          content: './src/docs/styleGuidist/termsOfUse.md',
          description: 'These are the terms of use',
        },
      ],
    },
    // {
    //   name: 'Component',
    //   // content: 'content.md',
    //   components: './src/styleguidist/*.js'
    //   // components: () => [
    //   //   './app/common/styleguide/ButtonWrapper/ButtonWrapper.js',
    //   //   './app/common/styleguide/DatePickerWrapper/DatePickerWrapper.js'
    //   // ]
    // },
  ],

  // webpackConfig: require('./internals/webpack/webpack.dev.babel.js'),

  // webpackConfig: { ... webpack configuration object  }

  // here we can config the name of the example file.
  // e,g: myComponent.examples.md
  // getExampleFilename(componentPath) {
  //   return componentPath.replace(/\.jsx?$/, '.examples.md')
  // }

  //    Will change any console massage coming from the component
  //   logger: {
  //     // Suppress messages
  //     info: () => {},
  //     // Override display function
  //     warn: (message) => console.warn(`Warning while using styleguidist: ${message}`)
  //   }

  // Debounce time in milliseconds used before render the changes from the editor.
  // while typing the preview will not update.
  // previewDelay: 500

  // resolver
  // allows to override the mechanism used to identify classes/components to show in the styleguide library.
  // Default behavior is to find all exported components in each file.

  // verbose: false // Print debug information.
};
