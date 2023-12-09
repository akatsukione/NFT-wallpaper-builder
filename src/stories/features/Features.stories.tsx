import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StagesFeatures from '../../pages/features/Features';
import {articleTitle, stepsFeatures} from '../../assets/data/features'


export default {
    title: 'Organisms/NFT Drip App',
    component: StagesFeatures,
} as ComponentMeta<typeof StagesFeatures>;

const Template: ComponentStory<typeof StagesFeatures> = (args) => <StagesFeatures {...args} />;

export const Draft = Template.bind({});

Draft.args = {articleTitle, stepsFeatures}
Draft.decorators = [
    (Story) => (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 468,
        }}
      >
        <Story/>
      </div>
    ),
  ]