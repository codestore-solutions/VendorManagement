import { poppinFont } from '@/assets/fonts';
import { Button, Input, Space } from 'antd';
import { FC } from "react"

interface SearchInputProps {
    searchText?: string;
    placeholderText: string;
    searchHandler?: () => void
}

export const Searchbar: FC<SearchInputProps> = ({ placeholderText, searchText, searchHandler }) => {
    return (
        <Input
            placeholder={placeholderText}
            value={searchText}
            onChange={searchHandler}
            onPressEnter={searchHandler}
            className={`${poppinFont.className} mr-2 sm:mr-2`}
        />
    )
}