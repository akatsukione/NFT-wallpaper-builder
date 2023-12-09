import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: create({ colorPrimary: 'hotpink', colorSecondary: 'orangered' }),
});