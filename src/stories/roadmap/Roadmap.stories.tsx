import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import VerticalLinearStepper from '../../components/roadmap/Roadmap';
import { articleTitle, steps } from '../../assets/data/roadmap'

export default {
    title: 'Organisms/Roadmap',
    component: VerticalLinearStepper,
} as ComponentMeta<typeof VerticalLinearStepper>;

const Template: ComponentStory<typeof VerticalLinearStepper> = (args) => <VerticalLinearStepper {...args} />;

export const Draft = Template.bind({});

Draft.args = { articleTitle, steps}
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

