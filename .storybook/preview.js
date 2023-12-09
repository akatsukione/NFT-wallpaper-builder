import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    options: {
      storySort: {
        order: ['Pages', 'Templates', 'Organisms', 'Molecules', 'Atoms'], 
      },
    },
  },
};

// export const decorators = [
//   (Story) => (
//     <div
//       style={{
//         marginLeft: "auto",
//         marginRight: "auto",
//         // maxWidth: 1600,
//       }}
//     >
//       {Story()}
//     </div>
//   ),
// ];
