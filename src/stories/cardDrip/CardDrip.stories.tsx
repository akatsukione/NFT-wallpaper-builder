import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardDrip from '../../components/cardDrip/CardDrip';

export default {
    title: 'Molecules/Card4Features',
    component: CardDrip,
    
} as ComponentMeta<typeof CardDrip>;

const Template: ComponentStory<typeof CardDrip> = (args) => <CardDrip {...args} />;

export const Draft = Template.bind({});
Draft.args = {
    url: "https://via.placeholder.com/146X98",
    sectionTitle: "Features 1.0",
    featureName: "Watch URLs",
    featureDescription: `for countdowns and marketplace listing 
                        a better description of how this works - There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure`
}

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
