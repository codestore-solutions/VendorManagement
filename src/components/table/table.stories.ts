import { type Meta, type StoryObj } from '@storybook/react';

import DataTable from '.';
import fetchVendorColumns, { vendors } from '../../pages/vendor/components/column';

const text = ""
const handleSearch = () => {

}
const meta: Meta<typeof DataTable> = {
    title: 'Example/Data table',
    component: DataTable,
    args: {
        columns: fetchVendorColumns({searchInput: text, handleSearch, handleReset: handleSearch}),
        data: vendors
    },
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Basic: Story = {
    args: {
        // data: vendors
    },
};
