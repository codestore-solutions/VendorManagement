import { type Meta, type StoryObj } from '@storybook/react';

import Sidebar from './Sidebar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Sidebar> = {
  title: 'Example/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    menuItems: [ 
        { title: 'Home', key: 1, label: 'Home' },
        { title: 'Home', key: 1, label: 'Vendors' } ],
    collapsed: true,
    setCollapsed: () => {}
  },
};
