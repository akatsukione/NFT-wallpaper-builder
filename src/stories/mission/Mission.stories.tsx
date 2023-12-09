import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Mission from '../../pages/missions/Mission';
import {articleTitle, stepsMission} from '../../assets/data/mission'


export default {
    title: 'Organisms/Mission',
    component: Mission,
} as ComponentMeta<typeof Mission>;

const Template: ComponentStory<typeof Mission> = (args) => <Mission {...args} />;

export const Draft = Template.bind({});

Draft.args = {articleTitle, stepsMission}
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