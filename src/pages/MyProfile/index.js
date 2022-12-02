import React from "react";

import { Column, Row, Img, Button, Input, Text, List, Stack } from "components";

const MyProfilePage = () => {
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
              <Column className="bg-gray_100 flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                <List
                  className="gap-[0] grid min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 sm:w-[100%] w-[47%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
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
                            The Best Fashion Instagrams of the Week: Céline
                            Dion, Lizzo, and More
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_500 w-[100%]"
                            as="h5"
                            variant="h5"
                          >
                            If you are looking for a break from the cold, take a
                            cue from Lizzo: This week, the singer headed to
                            Disneyland in warm and sunny California.
                          </Text>
                        </Column>
                        <Text
                          className="font-bold mt-[12px] sm:mt-[6px] md:mt-[8px] text-gray_500 tracking-ls1 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Read More
                        </Text>
                      </Column>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[23%]">
                          <Img
                            src="images/img_iconheartregu.svg"
                            className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] my-[2px] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="IconHeartRegu"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[2px] md:ml-[3px] ml-[5px] my-[1px] text-gray_900"
                            as="h5"
                            variant="h5"
                          >
                            326
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[10px] md:ml-[6px] sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[22%]">
                          <Img
                            src="images/img_iconcomment.svg"
                            className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] my-[3px] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="IconComment"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] my-[2px] text-gray_900"
                            as="h5"
                            variant="h5"
                          >
                            148
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[52px] ml-[77px] sm:mx-[0] md:p-[4px] p-[7px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[26%]">
                          <Text
                            className="flex-grow font-medium mb-[1px] ml-[2px] text-gray_900"
                            as="h5"
                            variant="h5"
                          >
                            Share
                          </Text>
                          <Img
                            src="images/img_icon_share.svg"
                            className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] mx-[2px] my-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="IconShare"
                          />
                        </Row>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col font-sfprodisplay items-center justify-end sm:mb-[15px] md:mb-[20px] mb-[30px] sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 sm:w-[100%] w-[50%]">
                      <Column className="flex flex-col justify-start mt-[3px] sm:px-[0] w-[100%]">
                        <Text
                          className="text-gray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Photos
                        </Text>
                        <Column className="flex flex-col font-inter justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                          <Column className="flex flex-col sm:h-[171px] md:h-[221px] h-[320px] items-center justify-start rounded-radius12 w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between rounded-radius12 w-[100%]">
                              <Img
                                src="images/img_5.png"
                                className="h-[100px] sm:h-[54px] md:h-[69px] max-w-[100%] rounded-radius12 w-[100px] sm:w-[53px] md:w-[68px]"
                                alt="Image Two"
                              />
                              <Img
                                src="images/img_image_221X221.png"
                                className="h-[100px] sm:h-[54px] md:h-[69px] max-w-[100%] rounded-radius12 w-[100px] sm:w-[53px] md:w-[68px]"
                                alt="Image Three"
                              />
                              <Img
                                src="images/img_image_19.png"
                                className="h-[100px] sm:h-[54px] md:h-[69px] max-w-[100%] rounded-radius12 w-[100px] sm:w-[53px] md:w-[68px]"
                                alt="Image Four"
                              />
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] rounded-radius12 w-[100%]">
                              <Img
                                src="images/img_photo4.png"
                                className="h-[100px] sm:h-[54px] md:h-[69px] max-w-[100%] rounded-radius12 w-[100px] sm:w-[53px] md:w-[68px]"
                                alt="Image Five"
                              />
                              <Img
                                src="images/img_image_20.png"
                                className="h-[100px] sm:h-[54px] md:h-[69px] max-w-[100%] rounded-radius12 w-[100px] sm:w-[53px] md:w-[68px]"
                                alt="Image Six"
                              />
                              <Img
                                src="images/img_photo1.png"
                                className="h-[100px] sm:h-[54px] md:h-[69px] max-w-[100%] rounded-radius12 w-[100px] sm:w-[53px] md:w-[68px]"
                                alt="Image Seven"
                              />
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] rounded-radius12 w-[100%]">
                              <Img
                                src="images/img_image_21.png"
                                className="h-[100px] sm:h-[54px] md:h-[69px] max-w-[100%] rounded-radius12 w-[100px] sm:w-[53px] md:w-[68px]"
                                alt="Image Eight"
                              />
                              <Img
                                src="images/img_image_22.png"
                                className="h-[100px] sm:h-[54px] md:h-[69px] max-w-[100%] rounded-radius12 w-[100px] sm:w-[53px] md:w-[68px]"
                                alt="Image Nine"
                              />
                              <Img
                                src="images/img_image_23.png"
                                className="h-[100px] sm:h-[54px] md:h-[69px] max-w-[100%] rounded-radius12 w-[100px] sm:w-[53px] md:w-[68px]"
                                alt="Image Ten"
                              />
                            </Row>
                          </Column>
                          <Stack className="border-2 border-gray_500_6c border-solid h-[30px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:p-[3px] md:p-[4px] p-[7px] relative rounded-radius4 w-[31%]">
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
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 sm:w-[100%] w-[47%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                          <Img
                            src="images/img_image_6.png"
                            className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                            alt="Image One"
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
                          alt="Options One"
                        />
                      </Row>
                      <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_cardmobile_3.png"
                          className="max-w-[100%] rounded-radius8 w-[100%]"
                          alt="Image One One"
                        />
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                          <Text
                            className="leading-[22.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                            as="h4"
                            variant="h4"
                          >
                            The Best Fashion Instagrams of the Week: Céline
                            Dion, Lizzo, and More
                          </Text>
                          <Text
                            className="font-medium leading-[20.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_500 w-[100%]"
                            as="h5"
                            variant="h5"
                          >
                            If you are looking for a break from the cold, take a
                            cue from Lizzo: This week, the singer headed to
                            Disneyland in warm and sunny California.
                          </Text>
                        </Column>
                        <Text
                          className="font-bold sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_500 tracking-ls1 uppercase w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Read More
                        </Text>
                      </Column>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[23%]">
                          <Img
                            src="images/img_iconheartregu.svg"
                            className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] ml-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
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
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[10px] md:ml-[6px] sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[22%]">
                          <Img
                            src="images/img_iconcomment.svg"
                            className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="IconComment One"
                          />
                          <Text
                            className="flex-grow font-medium sm:ml-[3px] md:ml-[4px] ml-[6px] text-gray_900"
                            as="h5"
                            variant="h5"
                          >
                            148
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[52px] ml-[77px] sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[26%]">
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
                            alt="IconShare One"
                          />
                        </Row>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col font-sfprodisplay items-center justify-end md:mb-[119px] mb-[173px] sm:mb-[92px] sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 sm:w-[100%] w-[50%]">
                      <Column className="flex flex-col justify-start mt-[3px] sm:px-[0] w-[100%]">
                        <Text
                          className="text-gray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Videos
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                          <Column
                            className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] rounded-radius8 sm:w-[100%] w-[38%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group1098.png')",
                            }}
                          >
                            <Stack className="bg-gray_900_7e h-[69px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]">
                              <Img
                                src="images/img_playbutton.svg"
                                className="absolute h-[38px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                                alt="PlayButton"
                              />
                            </Stack>
                          </Column>
                          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                            <Text
                              className="font-bold leading-[20.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                              as="h5"
                              variant="h5"
                            >
                              Tropical Fresh Tourism Is Back In Full Swing In{" "}
                            </Text>
                            <Text
                              className="font-normal mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              2 days ago
                            </Text>
                          </Column>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                          <Column
                            className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] rounded-radius8 sm:w-[100%] w-[38%]"
                            style={{
                              backgroundImage: "url('images/img_image_15.png')",
                            }}
                          >
                            <Stack className="bg-gray_900_7e h-[69px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]">
                              <Img
                                src="images/img_playbutton.svg"
                                className="absolute h-[38px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                                alt="PlayButton One"
                              />
                            </Stack>
                          </Column>
                          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                            <Text
                              className="font-bold leading-[20.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                              as="h5"
                              variant="h5"
                            >
                              How Timberland created the visual campaign of the{" "}
                            </Text>
                            <Text
                              className="font-normal mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              2 days ago
                            </Text>
                          </Column>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                          <Column
                            className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] rounded-radius8 sm:w-[100%] w-[38%]"
                            style={{
                              backgroundImage: "url('images/img_image_18.png')",
                            }}
                          >
                            <Stack className="bg-gray_900_7e h-[69px] md:p-[10px] p-[15px] sm:p-[7px] relative rounded-radius8 w-[100%]">
                              <Img
                                src="images/img_playbutton.svg"
                                className="absolute h-[38px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                                alt="PlayButton Two"
                              />
                            </Stack>
                          </Column>
                          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                            <Text
                              className="font-bold font-inter leading-[20.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                              as="h5"
                              variant="h5"
                            >
                              Take your mobile photography to the next{" "}
                            </Text>
                            <Text
                              className="font-normal font-sfprodisplay mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              2 days ago
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </List>
              </Column>
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center justify-between max-w-[382px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] pl-[1px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
            <Column className="bg-gray_900 flex flex-col items-end sm:mx-[0] sm:p-[15px] md:p-[26px] p-[38px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                <Button className="bg-light_blue_200 cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 sm:w-[25px] md:w-[33px] w-[48px]">
                  1
                </Button>
                <Img
                  src="images/img_avatar_48X48.png"
                  className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                  alt="Avatar"
                />
              </Row>
              <Column className="flex flex-col font-inter items-center justify-start sm:mb-[22px] md:mb-[28px] mb-[42px] sm:mt-[45px] md:mt-[58px] mt-[85px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                  <Img
                    src="images/img_avatar.png"
                    className="h-[108px] sm:h-[58px] md:h-[75px] max-w-[100%] rounded-radius36 w-[108px] sm:w-[57px] md:w-[74px]"
                    alt="Avatar One"
                  />
                  <Text
                    className="mt-[10px] sm:mt-[5px] md:mt-[6px] text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Edward Ford
                  </Text>
                  <Text
                    className="font-normal mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    @edwardford
                  </Text>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[41%]">
                    <Text
                      className="my-[1px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      518
                    </Text>
                    <Text
                      className="sm:ml-[2px] md:ml-[3px] ml-[5px] my-[1px] text-gray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Posts
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:ml-[17px] ml-[25px] sm:mx-[0] pb-[2px] pr-[2px] sm:px-[0] sm:w-[100%] w-[47%]">
                    <Text
                      className="mt-[3px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      22k
                    </Text>
                    <Text
                      className="mb-[1px] ml-[3px] text-gray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Friends
                    </Text>
                  </Row>
                </Row>
                <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Button className="bg-green_400 cursor-pointer font-bold min-w-[77%] md:py-[15px] sm:py-[15px] py-[22px] rounded-radius29 text-[14px] text-center text-white_A700 w-[max-content]">
                      Edit Profile
                    </Button>
                    <Button className="border-2 border-gray_500_33 border-solid flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                      <Img
                        src="images/img_buttonicon_4.svg"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="ButtonIcon"
                      />
                    </Button>
                  </Row>
                  <Column className="flex flex-col justify-start sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                    <Text
                      className="font-bold text-white_A700 tracking-ls1 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      About
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-white_A700_cc w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Travel, Adventure & Lifestyle
                      <br />
                      Photographer & Digital Influencer
                      <br />
                      Nikon Ambassador
                      <br />
                      {`Let's Work:`}
                      <br />
                      ed.ford@mail.com
                    </Text>
                  </Column>
                  <Column className="flex flex-col font-sfprodisplay justify-start sm:mt-[32px] md:mt-[41px] mt-[61px] w-[100%]">
                    <Text
                      className="text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Friends
                    </Text>
                    <List
                      className="md:gap-[10px] gap-[15px] sm:gap-[7px] grid min-h-[auto] sm:mt-[11px] md:mt-[15px] mt-[22px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Img
                          src="images/img_avatar_45X45.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar Two"
                        />
                        <Img
                          src="images/img_avatar_29.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar One"
                        />
                        <Img
                          src="images/img_avatar_5.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar Two"
                        />
                        <Img
                          src="images/img_avatar_30.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar Three"
                        />
                        <Img
                          src="images/img_avatar_19.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar Four"
                        />
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Img
                          src="images/img_avatar_26.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar Three"
                        />
                        <Img
                          src="images/img_avatar_18.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar One One"
                        />
                        <Img
                          src="images/img_avatar_27.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar Two One"
                        />
                        <Img
                          src="images/img_avatar_17.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar Three One"
                        />
                        <Img
                          src="images/img_avatar_3.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar Four One"
                        />
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Img
                          src="images/img_avatar_4.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar Four"
                        />
                        <Img
                          src="images/img_avatar_6.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar One Two"
                        />
                        <Img
                          src="images/img_avatar_10.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar Two Two"
                        />
                        <Img
                          src="images/img_avatar_1.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar Three Two"
                        />
                        <Img
                          src="images/img_avatar_16.png"
                          className="sm:h-[24px] md:h-[31px] h-[45px] max-w-[100%] rounded-radius14 sm:w-[23px] md:w-[30px] w-[45px]"
                          alt="Avatar Four Two"
                        />
                      </Row>
                    </List>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default MyProfilePage;
