import React from "react";

import { Column, Row, Img, Button, Text, Grid, Stack, List } from "components";

const SearchResultsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-inter items-center justify-end mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[990px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <aside className="md:hidden sm:hidden w-[17%]">
              <div className="">
                <Column className="bg-indigo_A200 flex flex-col items-center justify-start sm:p-[15px] md:p-[30px] p-[45px] w-[100%]">
                  <Img
                    src="images/img_standardcollec_48X48.svg"
                    className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:w-[25px] md:w-[33px] w-[48px]"
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
            <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[13px] sm:p-[6px] md:p-[8px] rounded-radius12 w-[100%]">
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[7px] sm:mx-[0] sm:pr-[3px] md:pr-[4px] pr-[7px] sm:py-[3px] md:py-[4px] py-[7px] sm:w-[100%] w-[84%]">
                    <Img
                      src="images/img_iconsearch_18X18.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="IconSearch"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[10px] ml-[15px] sm:ml-[7px] text-gray_900"
                      as="h5"
                      variant="h5"
                    >
                      Nass
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                    <Text
                      className="font-bold font-inter sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_500 tracking-ls1 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Filters
                    </Text>
                    <Button className="bg-red_A200 cursor-pointer font-bold font-sfprodisplay sm:h-[15px] md:h-[20px] h-[28px] md:ml-[11px] ml-[17px] sm:ml-[9px] rounded-radius884 text-[10.32px] text-center text-white_A700 sm:w-[14px] md:w-[19px] w-[28px]">
                      1
                    </Button>
                  </Row>
                </Row>
                <Column className="flex flex-col justify-start sm:mt-[35px] md:mt-[45px] mt-[66px] w-[100%]">
                  <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                    People
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                    <Grid className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Img
                            src="images/img_avatar.png"
                            className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                            alt="Avatar"
                          />
                          <Column className="flex flex-col justify-start mb-[3px] md:ml-[10px] ml-[15px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Logan Nasser
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              @louisaingram
                            </Text>
                          </Column>
                        </Row>
                        <Button
                          className="bg-indigo_A200 flex items-center justify-center md:my-[6px] md:pl-[6px] md:pr-[5px] md:py-[5px] min-w-[22%] my-[9px] pl-[9px] pr-[8px] py-[8px] rounded-radius4 sm:my-[4px] sm:p-[4px] text-center w-[max-content]"
                          leftIcon={
                            <Img
                              src="images/img_button.svg"
                              className="mr-[5px] sm:mr-[2px] md:mr-[3px] text-center"
                              alt="Icon/Check"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                            Add
                          </div>
                        </Button>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Img
                            src="images/img_avatar_3.png"
                            className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                            alt="Avatar One"
                          />
                          <Column className="flex flex-col justify-start mb-[3px] md:ml-[10px] ml-[15px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Logan Nasser
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              @louisaingram
                            </Text>
                          </Column>
                        </Row>
                        <Button
                          className="bg-indigo_A200 flex items-center justify-center md:my-[6px] md:pl-[6px] md:pr-[5px] md:py-[5px] min-w-[22%] my-[9px] pl-[9px] pr-[8px] py-[8px] rounded-radius4 sm:my-[4px] sm:p-[4px] text-center w-[max-content]"
                          leftIcon={
                            <Img
                              src="images/img_button.svg"
                              className="mr-[5px] sm:mr-[2px] md:mr-[3px] text-center"
                              alt="Icon/Check"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                            Add
                          </div>
                        </Button>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Img
                            src="images/img_avatar_9.png"
                            className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                            alt="Avatar Two"
                          />
                          <Column className="flex flex-col justify-start mb-[3px] md:ml-[10px] ml-[15px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Logan Nasser
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              @louisaingram
                            </Text>
                          </Column>
                        </Row>
                        <Button
                          className="bg-indigo_A200 flex items-center justify-center md:my-[6px] md:pl-[6px] md:pr-[5px] md:py-[5px] min-w-[22%] my-[9px] pl-[9px] pr-[8px] py-[8px] rounded-radius4 sm:my-[4px] sm:p-[4px] text-center w-[max-content]"
                          leftIcon={
                            <Img
                              src="images/img_button.svg"
                              className="mr-[5px] sm:mr-[2px] md:mr-[3px] text-center"
                              alt="Icon/Check"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                            Add
                          </div>
                        </Button>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Img
                            src="images/img_avatar_13.png"
                            className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                            alt="Avatar Three"
                          />
                          <Column className="flex flex-col justify-start mb-[3px] md:ml-[10px] ml-[15px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Logan Nasser
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              @louisaingram
                            </Text>
                          </Column>
                        </Row>
                        <Button
                          className="bg-indigo_A200 flex items-center justify-center md:my-[6px] md:pl-[6px] md:pr-[5px] md:py-[5px] min-w-[22%] my-[9px] pl-[9px] pr-[8px] py-[8px] rounded-radius4 sm:my-[4px] sm:p-[4px] text-center w-[max-content]"
                          leftIcon={
                            <Img
                              src="images/img_button.svg"
                              className="mr-[5px] sm:mr-[2px] md:mr-[3px] text-center"
                              alt="Icon/Check"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                            Add
                          </div>
                        </Button>
                      </Row>
                    </Grid>
                  </Column>
                  <Stack className="border-2 border-gray_500_6c border-solid h-[30px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:p-[3px] md:p-[4px] p-[7px] relative rounded-radius4 w-[13%]">
                    <Text
                      className="absolute font-medium h-[max-content] inset-y-[0] left-[10%] my-[auto] text-gray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      See more
                    </Text>
                    <Img
                      src="images/img_iconarrowrigh.svg"
                      className="absolute h-[14px] inset-y-[0] max-w-[100%] my-[auto] right-[10%] w-[14px] sm:w-[7px] md:w-[9px]"
                      alt="IconArrowRigh"
                    />
                  </Stack>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[34px] md:mt-[44px] mt-[64px] w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  Posts
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[22px] md:mt-[29px] mt-[43px] w-[100%]">
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 sm:w-[100%] w-[49%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                        <Img
                          src="images/img_image_6.png"
                          className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Image"
                        />
                        <Column className="flex flex-col sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[70%]">
                          <Text
                            className="font-bold mt-[2px] text-gray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Katherine Cole
                          </Text>
                          <Text
                            className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            5min ago
                          </Text>
                        </Column>
                      </Row>
                      <Img
                        src="images/img_options.svg"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Options"
                      />
                    </Row>
                    <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_image_150X290.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Image One"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                        <Text
                          className="leading-[22.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                          as="h4"
                          variant="h4"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo, and More
                        </Text>
                        <Text
                          className="font-medium sm:mt-[10px] md:mt-[13px] mt-[19px] text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
                        </Text>
                      </Column>
                      <Text
                        className="font-bold sm:mt-[35px] md:mt-[45px] mt-[66px] text-gray_500 tracking-ls1 uppercase w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Read More
                      </Text>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[22%]">
                        <Img
                          src="images/img_iconheartregu.svg"
                          className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] ml-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                          alt="IconHeartRegu"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[2px] md:ml-[3px] ml-[5px] text-gray_900"
                          as="h5"
                          variant="h5"
                        >
                          326
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[10px] md:ml-[6px] sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[21%]">
                        <Img
                          src="images/img_iconcomment.svg"
                          className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                          alt="IconComment"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_900"
                          as="h5"
                          variant="h5"
                        >
                          148
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[63px] ml-[92px] sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[25%]">
                        <Text
                          className="flex-grow font-medium sm:ml-[2px] md:ml-[3px] ml-[5px] text-gray_900"
                          as="h5"
                          variant="h5"
                        >
                          Share
                        </Text>
                        <Img
                          src="images/img_icon_share.svg"
                          className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] ml-[1px] sm:mr-[3px] md:mr-[4px] mr-[6px] w-[14px] sm:w-[7px] md:w-[9px]"
                          alt="IconShare"
                        />
                      </Row>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start mb-[124px] sm:mb-[66px] md:mb-[85px] sm:mx-[0] md:p-[15px] sm:p-[15px] p-[23px] rounded-radius12 sm:w-[100%] w-[49%]">
                    <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:my-[3px] md:my-[4px] my-[7px] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                            <Img
                              src="images/img_image_48X48.png"
                              className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                              alt="Image Two"
                            />
                            <Column className="flex flex-col sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[67%]">
                              <Text
                                className="font-bold mt-[2px] text-gray_900 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Dustin Houston
                              </Text>
                              <Text
                                className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                5min ago
                              </Text>
                            </Column>
                          </Row>
                          <Img
                            src="images/img_options.svg"
                            className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                            alt="Options One"
                          />
                        </Row>
                        <Text
                          className="font-medium sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Whether its a driving tour 😂
                        </Text>
                      </Column>
                      <Column className="flex flex-col font-sfprodisplay items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                          <Img
                            src="images/img_photo1.png"
                            className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[69%]"
                            alt="image Three"
                          />
                          <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                            <Img
                              src="images/img_photo2.png"
                              className="max-w-[100%] rounded-radius8 w-[100%]"
                              alt="image Four"
                            />
                            <Column
                              className="bg-cover bg-no-repeat flex flex-col items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] p-[13px] sm:p-[6px] md:p-[8px] rounded-radius8 w-[100%]"
                              style={{
                                backgroundImage: "url('images/img_photo4.png')",
                              }}
                            >
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:my-[4px] md:my-[5px] my-[8px] md:p-[4px] p-[7px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[97%]">
                                <Img
                                  src="images/img_iconcamera_14X14.svg"
                                  className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] ml-[1px] my-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                                  alt="IconCamera"
                                />
                                <Text
                                  className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[7px] mr-[2px] mt-[1px] text-white_A700"
                                  as="h5"
                                  variant="h5"
                                >
                                  17
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                      </Column>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_iconheartregu.svg"
                              className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] my-[2px] w-[14px] sm:w-[7px] md:w-[9px]"
                              alt="IconHeartRegu One"
                            />
                            <Text
                              className="flex-grow font-medium sm:ml-[2px] md:ml-[3px] ml-[5px] text-gray_900"
                              as="h5"
                              variant="h5"
                            >
                              326
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[46%]">
                            <Img
                              src="images/img_iconcomment.svg"
                              className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] my-[3px] w-[14px] sm:w-[7px] md:w-[9px]"
                              alt="IconComment One"
                            />
                            <Text
                              className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] my-[2px] text-gray_900"
                              as="h5"
                              variant="h5"
                            >
                              148
                            </Text>
                          </Row>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:p-[4px] p-[7px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[25%]">
                          <Text
                            className="flex-grow font-medium ml-[2px] text-gray_900"
                            as="h5"
                            variant="h5"
                          >
                            Share
                          </Text>
                          <Img
                            src="images/img_icon_share.svg"
                            className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] mx-[2px] my-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="IconShare One"
                          />
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center max-w-[420px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] md:pl-[3px] pl-[5px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
            <Column className="bg-gray_900 flex flex-col items-end ml-[10px] md:ml-[6px] sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                <Button className="bg-light_blue_200 cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 sm:w-[25px] md:w-[33px] w-[48px]">
                  1
                </Button>
                <Img
                  src="images/img_avatar_48X48.png"
                  className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                  alt="Avatar Four"
                />
              </Row>
              <Column className="flex flex-col font-inter items-center justify-start mb-[2px] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <Stack className="bg-red_A200 h-[174px] md:pt-[13px] sm:pt-[15px] pt-[20px] relative rounded-radius12 w-[100%]">
                  <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <div className="bg-green_400 sm:h-[47px] md:h-[60px] h-[87px] sm:mb-[26px] md:mb-[34px] mb-[50px] rounded-radius435 w-[19%]"></div>
                      <Img
                        src="images/img_oval_92X165.png"
                        className="max-w-[100%] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:w-[100%] w-[53%]"
                        alt="Oval One"
                      />
                    </Row>
                  </Column>
                  <div className="absolute bg-gray_900_33 sm:h-[11px] md:h-[14px] h-[19px] right-[37%] rounded-radius50 top-[12%] sm:w-[10px] md:w-[13px] w-[19px]"></div>
                  <Text
                    className="absolute left-[6%] text-white_A700 top-[0] w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Go Premium!
                  </Text>
                  <Column className="absolute bottom-[11%] flex flex-col inset-x-[0] justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[85%]">
                    <Text
                      className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] not-italic text-white_A700 w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Try premium membership and enjoy
                      <br />a full experience of our community.
                    </Text>
                    <Stack className="bg-gray_900_33 h-[30px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:p-[3px] md:p-[4px] p-[7px] relative rounded-radius12 w-[37%]">
                      <Text
                        className="absolute font-medium h-[max-content] inset-y-[0] left-[10%] my-[auto] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        See more
                      </Text>
                      <Img
                        src="images/img_iconarrowrigh_14X14.svg"
                        className="absolute md:h-[10px] h-[14px] sm:h-[8px] inset-y-[0] my-[auto] right-[10%] rounded-radius50 w-[14px] sm:w-[7px] md:w-[9px]"
                        alt="IconArrowRigh One"
                      />
                    </Stack>
                  </Column>
                </Stack>
                <Column className="flex flex-col justify-start sm:mt-[34px] md:mt-[44px] mt-[64px] pb-[1px] w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Who to Follow
                  </Text>
                  <List
                    className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid min-h-[auto] sm:mt-[22px] md:mt-[29px] mt-[43px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                      <Img
                        src="images/img_avatar_6.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Five"
                      />
                      <Column className="flex flex-col justify-start ml-[10px] md:ml-[6px] sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[64%]">
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
                      <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:ml-[21px] md:ml-[27px] ml-[40px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                        <Img
                          src="images/img_adduser_1.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="AddUser"
                        />
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                      <Img
                        src="images/img_avatar_38X38.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Six"
                      />
                      <Column className="flex flex-col justify-start ml-[10px] md:ml-[6px] sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[64%]">
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
                      <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:ml-[21px] md:ml-[27px] ml-[40px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                        <Img
                          src="images/img_adduser_1.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="AddUser One"
                        />
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                      <Img
                        src="images/img_avatar_4.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Seven"
                      />
                      <Column className="flex flex-col justify-start ml-[10px] md:ml-[6px] sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[64%]">
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
                      <Button className="bg-indigo_A200 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center sm:ml-[21px] md:ml-[27px] ml-[40px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                        <Img
                          src="images/img_adduser_1.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="AddUser Two"
                        />
                      </Button>
                    </Row>
                  </List>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                    <Text
                      className="flex-grow font-bold mt-[2px] text-gray_500 tracking-ls1 uppercase"
                      as="h6"
                      variant="h6"
                    >
                      See more
                    </Text>
                    <Img
                      src="images/img_iconarrowrigh_1.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] ml-[4px] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="IconArrowRigh Two"
                    />
                  </Row>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Friends
                  </Text>
                  <List
                    className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid min-h-[auto] sm:mt-[23px] md:mt-[30px] mt-[44px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                      <Img
                        src="images/img_avatar_17.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Eight"
                      />
                      <Text
                        className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button className="bg-white_A700_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[134px] sm:ml-[71px] md:ml-[92px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                        <Img
                          src="images/img_button.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="Button"
                        />
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                      <Img
                        src="images/img_avatar_18.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Nine"
                      />
                      <Text
                        className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button className="bg-white_A700_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[134px] sm:ml-[71px] md:ml-[92px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                        <Img
                          src="images/img_button.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="Button One"
                        />
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                      <Img
                        src="images/img_avatar_19.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Ten"
                      />
                      <Text
                        className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button className="bg-white_A700_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[134px] sm:ml-[71px] md:ml-[92px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                        <Img
                          src="images/img_button.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="Button Two"
                        />
                      </Button>
                    </Row>
                  </List>
                </Column>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default SearchResultsPage;
