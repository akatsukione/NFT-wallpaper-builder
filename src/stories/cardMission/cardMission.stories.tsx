import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardMission from '../../pages/missions/cardMission';
import { stepsMission } from '../../assets/data/mission'

export default {
    title: 'Molecules/Card4Mission',
    component: CardMission,
} as ComponentMeta<typeof CardMission>;

const Template: ComponentStory<typeof CardMission> = (args) => <CardMission {...args} />;

export const LeftSide = Template.bind({});
LeftSide.args = stepsMission[1]
LeftSide.decorators = [
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

export const RightSide = Template.bind({});
RightSide.args = stepsMission[0]
RightSide.decorators = [
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
