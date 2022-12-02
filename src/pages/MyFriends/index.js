import React from "react";

import { Row, Column, Img, Button, Input, Text, Grid, List } from "components";

const MyFriendsPage = () => {
  return (
    <>
      <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center mx-[auto] w-[100%]">
        <aside className="md:hidden sm:hidden w-[12%]">
          <div className="">
            <Column className="bg-indigo_A200 flex flex-col items-center justify-start sm:p-[15px] md:p-[30px] p-[45px] w-[100%]">
              <Img
                src="images/img_standardcollec_48X48.svg"
                className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[48px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[25px] md:w-[33px]"
                alt="StandardCollec"
              />
              <Button className="bg-white_A700 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center mt-[101px] sm:mt-[53px] md:mt-[69px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                <Img
                  src="images/img_home.svg"
                  className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                  alt="Home"
                />
              </Button>
              <Button className="bg-white_A700_33 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:mt-[21px] md:mt-[27px] mt-[40px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                <Img
                  src="images/img_calendar.svg"
                  className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                  alt="Calendar"
                />
              </Button>
              <Button className="bg-white_A700_33 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:mt-[21px] md:mt-[27px] mt-[40px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                <Img
                  src="images/img_message.svg"
                  className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                  alt="Message"
                />
              </Button>
              <Button className="bg-white_A700_33 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:mt-[21px] md:mt-[27px] mt-[40px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                <Img
                  src="images/img_user.svg"
                  className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                  alt="User"
                />
              </Button>
              <Button className="bg-white_A700_33 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:mt-[21px] md:mt-[27px] mt-[40px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                <Img
                  src="images/img_settings.svg"
                  className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                  alt="Settings"
                />
              </Button>
              <Button className="border-2 border-solid border-white_A700_33 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center md:mb-[10px] mb-[15px] sm:mb-[7px] sm:mt-[171px] md:mt-[221px] mt-[322px] md:px-[10px] px-[15px] sm:px-[7px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                <Img
                  src="images/img_logout.svg"
                  className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                  alt="Logout"
                />
              </Button>
            </Column>
          </div>
        </aside>
        <Column className="flex flex-col items-center max-w-[760px] sm:ml-[34px] md:ml-[44px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[12px] sm:p-[6px] md:p-[8px] rounded-radius12 w-[100%]">
            <Input
              className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
              wrapClassName="bg-white_A700 flex md:pl-[6px] md:pr-[24px] md:py-[5px] my-[1px] pl-[9px] pr-[35px] py-[8px] sm:mx-[0] sm:pl-[4px] sm:pr-[15px] sm:py-[4px] sm:w-[100%] w-[89%]"
              name="FrameOne"
              placeholder="Search in social…"
              prefix={
                <Img
                  src="images/img_icon_search.svg"
                  className="mr-[15px] sm:mr-[7px] md:mr-[10px] my-[auto]"
                  alt="Icon/Search"
                />
              }
            ></Input>
            <Text
              className="font-bold ml-[13px] sm:ml-[6px] md:ml-[8px] text-gray_500 tracking-ls1 uppercase w-[auto]"
              as="h6"
              variant="h6"
            >
              Filters
            </Text>
          </Row>
          <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:pr-[4px] md:pr-[6px] pr-[9px] w-[100%]">
              <Text className="text-gray_900 w-[auto]" as="h1" variant="h1">
                My Friends
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
                <Text
                  className="flex-grow font-medium mb-[1px] text-gray_900"
                  as="h5"
                  variant="h5"
                >
                  Filter
                </Text>
                <Img
                  src="images/img_iconfiltter.svg"
                  className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] ml-[3px] mt-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                  alt="IconFiltter"
                />
              </Row>
            </Row>
            <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:px-[0] w-[100%]">
              <Grid className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
                <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_avatar.png"
                    className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                    alt="Avatar"
                  />
                  <Column className="flex flex-col sm:h-[46px] md:h-[59px] h-[85px] items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[45px] md:w-[58px] w-[85px]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 flex items-center justify-center md:mt-[8px] md:pl-[6px] md:pr-[4px] md:py-[5px] min-w-[99%] mt-[13px] pl-[9px] pr-[7px] py-[8px] rounded-radius4 sm:mt-[6px] sm:pl-[4px] sm:pr-[3px] sm:py-[4px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_button.svg"
                          className="mr-[3px] text-center"
                          alt="Icon/Check"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_avatar_6.png"
                    className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                    alt="Avatar One"
                  />
                  <Column className="flex flex-col sm:h-[46px] md:h-[59px] h-[85px] items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[45px] md:w-[58px] w-[85px]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 flex items-center justify-center md:mt-[8px] md:pl-[6px] md:pr-[4px] md:py-[5px] min-w-[99%] mt-[13px] pl-[9px] pr-[7px] py-[8px] rounded-radius4 sm:mt-[6px] sm:pl-[4px] sm:pr-[3px] sm:py-[4px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_button.svg"
                          className="mr-[3px] text-center"
                          alt="Icon/Check"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_avatar_25.png"
                    className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                    alt="Avatar Two"
                  />
                  <Column className="flex flex-col sm:h-[46px] md:h-[59px] h-[85px] items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[45px] md:w-[58px] w-[85px]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 flex items-center justify-center md:mt-[8px] md:pl-[6px] md:pr-[4px] md:py-[5px] min-w-[99%] mt-[13px] pl-[9px] pr-[7px] py-[8px] rounded-radius4 sm:mt-[6px] sm:pl-[4px] sm:pr-[3px] sm:py-[4px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_button.svg"
                          className="mr-[3px] text-center"
                          alt="Icon/Check"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_avatar_38X38.png"
                    className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                    alt="Avatar Three"
                  />
                  <Column className="flex flex-col sm:h-[46px] md:h-[59px] h-[85px] items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[45px] md:w-[58px] w-[85px]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 flex items-center justify-center md:mt-[8px] md:pl-[6px] md:pr-[4px] md:py-[5px] min-w-[99%] mt-[13px] pl-[9px] pr-[7px] py-[8px] rounded-radius4 sm:mt-[6px] sm:pl-[4px] sm:pr-[3px] sm:py-[4px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_button.svg"
                          className="mr-[3px] text-center"
                          alt="Icon/Check"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_avatar_16.png"
                    className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                    alt="Avatar Four"
                  />
                  <Column className="flex flex-col sm:h-[46px] md:h-[59px] h-[85px] items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[45px] md:w-[58px] w-[85px]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 flex items-center justify-center md:mt-[8px] md:pl-[6px] md:pr-[4px] md:py-[5px] min-w-[99%] mt-[13px] pl-[9px] pr-[7px] py-[8px] rounded-radius4 sm:mt-[6px] sm:pl-[4px] sm:pr-[3px] sm:py-[4px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_button.svg"
                          className="mr-[3px] text-center"
                          alt="Icon/Check"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_avatar_3.png"
                    className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                    alt="Avatar Five"
                  />
                  <Column className="flex flex-col sm:h-[46px] md:h-[59px] h-[85px] items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[45px] md:w-[58px] w-[85px]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 flex items-center justify-center md:mt-[8px] md:pl-[6px] md:pr-[4px] md:py-[5px] min-w-[99%] mt-[13px] pl-[9px] pr-[7px] py-[8px] rounded-radius4 sm:mt-[6px] sm:pl-[4px] sm:pr-[3px] sm:py-[4px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_button.svg"
                          className="mr-[3px] text-center"
                          alt="Icon/Check"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_avatar_58X58.png"
                    className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                    alt="Avatar Six"
                  />
                  <Column className="flex flex-col sm:h-[46px] md:h-[59px] h-[85px] items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[45px] md:w-[58px] w-[85px]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 flex items-center justify-center md:mt-[8px] md:pl-[6px] md:pr-[4px] md:py-[5px] min-w-[99%] mt-[13px] pl-[9px] pr-[7px] py-[8px] rounded-radius4 sm:mt-[6px] sm:pl-[4px] sm:pr-[3px] sm:py-[4px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_button.svg"
                          className="mr-[3px] text-center"
                          alt="Icon/Check"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_avatar_4.png"
                    className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                    alt="Avatar Seven"
                  />
                  <Column className="flex flex-col sm:h-[46px] md:h-[59px] h-[85px] items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[45px] md:w-[58px] w-[85px]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 flex items-center justify-center md:mt-[8px] md:pl-[6px] md:pr-[4px] md:py-[5px] min-w-[99%] mt-[13px] pl-[9px] pr-[7px] py-[8px] rounded-radius4 sm:mt-[6px] sm:pl-[4px] sm:pr-[3px] sm:py-[4px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_button.svg"
                          className="mr-[3px] text-center"
                          alt="Icon/Check"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[25px] p-[37px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_avatar_26.png"
                    className="sm:h-[31px] md:h-[40px] h-[58px] max-w-[100%] mt-[3px] rounded-radius18 sm:w-[30px] md:w-[39px] w-[58px]"
                    alt="Avatar Eight"
                  />
                  <Column className="flex flex-col sm:h-[46px] md:h-[59px] h-[85px] items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[45px] md:w-[58px] w-[85px]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 flex items-center justify-center md:mt-[8px] md:pl-[6px] md:pr-[4px] md:py-[5px] min-w-[99%] mt-[13px] pl-[9px] pr-[7px] py-[8px] rounded-radius4 sm:mt-[6px] sm:pl-[4px] sm:pr-[3px] sm:py-[4px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_button.svg"
                          className="mr-[3px] text-center"
                          alt="Icon/Check"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </Column>
                </Column>
              </Grid>
            </Column>
          </Column>
        </Column>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center max-w-[420px] sm:ml-[15px] md:ml-[20px] ml-[auto] mr-[auto] sm:pl-[15px] md:pl-[3px] pl-[5px] sm:pr-[15px] w-[100%]">
          <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
          <Column className="bg-gray_900 flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:ml-[147px] ml-[214px] mr-[10px] md:mr-[6px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
              <Button className="bg-light_blue_200 cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 sm:w-[25px] md:w-[33px] w-[48px]">
                1
              </Button>
              <Img
                src="images/img_avatar_48X48.png"
                className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                alt="Avatar Nine"
              />
            </Row>
            <Column className="flex flex-col font-inter justify-start md:ml-[10px] ml-[15px] md:mr-[13px] mr-[20px] sm:mt-[26px] md:mt-[33px] mt-[49px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
              <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                Who to Follow
              </Text>
              <List
                className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid min-h-[auto] sm:mt-[22px] md:mt-[29px] mt-[43px] w-[100%]"
                orientation="vertical"
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Ten"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </Column>
                  <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_adduser_1.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="AddUser"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_38X38.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Eleven"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </Column>
                  <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_adduser_1.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="AddUser One"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_1.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Twelve"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </Column>
                  <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_adduser_1.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="AddUser Two"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_2.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Thirteen"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </Column>
                  <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_adduser_1.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="AddUser Three"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_4.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Fourteen"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </Column>
                  <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_adduser_1.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="AddUser Four"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_18.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Fifteen"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </Column>
                  <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_adduser_1.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="AddUser Five"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_8.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Sixteen"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </Column>
                  <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_adduser_1.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="AddUser Six"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_27.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Seventeen"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </Column>
                  <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_adduser_1.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="AddUser Seven"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_26.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Eighteen"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </Column>
                  <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_adduser_1.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="AddUser Eight"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_25.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Nineteen"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </Column>
                  <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_adduser_1.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="AddUser Nine"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_28.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Twenty"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </Column>
                  <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_adduser_1.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="AddUser Ten"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_16.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar TwentyOne"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-bold text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </Column>
                  <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_adduser_1.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="AddUser Eleven"
                    />
                  </Button>
                </Row>
              </List>
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default MyFriendsPage;
