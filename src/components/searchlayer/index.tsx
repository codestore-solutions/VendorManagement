import { FC } from "react";
import { Searchbar } from "../searchbar/main";
import { Breadcrumb, Button, Col, Row, Tooltip } from "antd";
import { poppinFont } from "@/assets/fonts";


interface SearchLayerProps {
    searchbar: boolean;
    breadcrumbItems: any[];
    searchText?: string;
    handleSearch?: () => void;
    addTooltipText?: string;
    btnOnClickHandler?: () => void;
    goBack?: () => void;
    mode: "view" | "list" | "basic";
    verifyProfileBtnHandler?: () => void;
    rejectProfileTooltipText?: string;
    rejectProfileBtnHandler?: () => void;
    editProfileTooltipText?: string;
    editProfileBtnHandler?: () => void;
    deleteProfileTooltipText?: string;
    deleteProfileBtnHandler?: () => void;
}
const CrumbAndSearchLayer: FC<SearchLayerProps> = ({
    searchbar = false,
    breadcrumbItems,
    searchText, handleSearch,
    addTooltipText,
    btnOnClickHandler,
    goBack,
    mode,
    verifyProfileBtnHandler,
    rejectProfileTooltipText,
    rejectProfileBtnHandler,
    editProfileTooltipText,
    editProfileBtnHandler,
    deleteProfileTooltipText,
    deleteProfileBtnHandler
}) => {
    return (
        <Row className="flex sm:items-center flex-col sm:flex-row mb-6">
            <Col span={24} sm={{ span: 18 }} className="flex items-center">
                {goBack && <Button onClick={goBack} className="border-none shadow-none p-0 mr-2">
                    <img src="/svgs/back.svg" alt="back" />
                </Button>}

                <Breadcrumb
                    className={`text-[#3F4254] 
                    ${poppinFont.className} 
                    font-semibold text-lg sm:text-2xl leading-10`}
                    items={breadcrumbItems} />
            </Col>
            <Col span={24} sm={{ span: 6 }} className="flex items-center">
                {
                    (searchbar) &&
                    <Searchbar
                        placeholderText={`Search name`}
                        searchText={searchText}
                        searchHandler={handleSearch} />
                }
                {
                    btnOnClickHandler &&
                    <Tooltip placement="topLeft" title={addTooltipText}>
                        <Button onClick={btnOnClickHandler}
                            className="bg-white p-1.5 border border-gray-200 rounded-md">
                            <img src="/svgs/plus.svg" />
                        </Button>
                    </Tooltip>
                }

                {mode === 'view' &&
                    <>
                        <Button onClick={verifyProfileBtnHandler}
                            className="bg-[#20C069] text-[#fff] hover:text-[#fff] 
                            hover:bg-[#20C069] text-sm px-6 mr-2 border border-gray-200 rounded-md">
                            Verify
                        </Button>

                        <Tooltip placement="topLeft" title={rejectProfileTooltipText}>
                            <Button onClick={rejectProfileBtnHandler}
                                className="bg-white px-2 mr-2 border border-gray-200 rounded-md">
                                <img className="w-4" src="/svgs/cancel.svg" />
                            </Button>
                        </Tooltip>

                        <Tooltip placement="topLeft" title={editProfileTooltipText}>
                            <Button onClick={editProfileBtnHandler}
                                className="bg-white px-2 mr-2 border border-gray-200 rounded-md">
                                <img className="w-4" src="/svgs/edit.svg" />
                            </Button>
                        </Tooltip>

                        <Tooltip placement="topLeft" title={deleteProfileTooltipText}>
                            <Button onClick={deleteProfileBtnHandler}
                                className="bg-white px-2 mr-2 border border-gray-200 rounded-md">
                                <img className="w-3.5" src="/svgs/delete2.svg" />
                            </Button>
                        </Tooltip>
                    </>
                }
            </Col>
        </Row>
    )
}

export default CrumbAndSearchLayer;