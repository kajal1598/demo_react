import React from "react";

import { Row, Column, Img, Button, Input, Text, Stack, List } from "components";

const HomevOnePage = () => {
  return (
    <>
      <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start mx-[auto] w-[100%]">
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
        <Column className="flex flex-col items-center justify-end max-w-[760px] sm:ml-[34px] md:ml-[44px] ml-[auto] mr-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
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
          <Column className="bg-white_A700 flex flex-col justify-end sm:mt-[21px] md:mt-[27px] mt-[40px] sm:pl-[15px] md:pl-[20px] pl-[30px] sm:py-[15px] md:py-[20px] py-[30px] rounded-radius12 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mr-[20px] mr-[30px] mt-[4px] sm:mx-[0] sm:px-[0] rounded-radius12 sm:w-[100%] w-[96%]">
              <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                Featured Stories
              </Text>
              <Stack className="bg-gray_500_36 h-[30px] sm:p-[3px] md:p-[4px] p-[7px] relative rounded-radius12 w-[14%]">
                <Text
                  className="absolute font-medium h-[max-content] inset-y-[0] left-[10%] my-[auto] text-gray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  See more
                </Text>
                <Img
                  src="images/img_iconarrowrigh.svg"
                  className="absolute md:h-[10px] h-[14px] sm:h-[8px] inset-y-[0] my-[auto] right-[10%] rounded-radius50 w-[14px] sm:w-[7px] md:w-[9px]"
                  alt="IconArrowRigh"
                />
              </Stack>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[10px] md:ml-[6px] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] rounded-radius12 sm:w-[100%] w-[99%]">
              <Button className="bg-light_blue_200_33 flex sm:h-[24px] md:h-[31px] h-[45px] items-center justify-center my-[10px] sm:my-[5px] md:my-[6px] px-[11px] sm:px-[5px] md:px-[7px] rounded-radius12 sm:w-[23px] md:w-[30px] w-[45px]">
                <Img
                  src="images/img_adduser.svg"
                  className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                  alt="AddUser"
                />
              </Button>
              <List
                className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-7 min-h-[auto] sm:ml-[15px] md:ml-[20px] ml-[30px] sm:w-[100%] w-[80%]"
                orientation="horizontal"
              >
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-white_A700 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                      alt="Image"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-white_A700 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_54X54.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                      alt="Image One"
                    />
                  </Stack>
                </div>
                <Stack className="border-2 border-gray_500_66 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_image_1.png"
                    className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                    alt="Image Two"
                  />
                </Stack>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-white_A700 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_2.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                      alt="Image Three"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-white_A700 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_3.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                      alt="Image Four"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-white_A700 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_4.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                      alt="Image Five"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <Stack className="bg-white_A700 border-solid h-[65px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_5.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius12 sm:w-[28px] md:w-[37px] w-[54px]"
                      alt="Image Six"
                    />
                  </Stack>
                </div>
              </List>
              <div className="bg-gradient  md:ml-[13px] ml-[20px] p-[2px] relative rounded-radius12 sm:ml-[10px] w-[7%] ">
                <Stack className="bg-white_A700 border-solid h-[65px] sm:pl-[2px] md:pl-[3px] pl-[5px] sm:py-[2px] md:py-[3px] py-[5px] relative rounded-radius12">
                  <Img
                    src="images/img_image_54X44.png"
                    className="absolute h-[54px] inset-y-[0] max-w-[100%] my-[auto] rounded-radius12 sm:w-[100%] w-[88%]"
                    alt="Image Seven"
                  />
                </Stack>
              </div>
            </Row>
          </Column>
          <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
            <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                <Img
                  src="images/img_avatar.png"
                  className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                  alt="Avatar"
                />
                <Input
                  className="font-medium sm:pb-[18px] md:pb-[24px] pb-[35px] pl-[10px] sm:pl-[5px] md:pl-[6px] sm:pr-[15px] md:pr-[24px] pr-[35px] md:pt-[12px] pt-[18px] sm:pt-[9px] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                  wrapClassName="bg-white_A700 rounded-radius19 sm:mx-[0] sm:w-[100%] w-[88%]"
                  name="language"
                  placeholder="What are you thinking? "
                ></Input>
                <Img
                  src="images/img_icon_eye.svg"
                  className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                  alt="Options"
                />
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                <Button className="bg-gray_100 flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center my-[10px] sm:my-[5px] md:my-[6px] px-[10px] sm:px-[5px] md:px-[6px] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]">
                  <Img
                    src="images/img_camera.svg"
                    className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                    alt="Camera"
                  />
                </Button>
                <Button className="bg-gray_100 flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center md:ml-[10px] ml-[15px] sm:ml-[7px] my-[10px] sm:my-[5px] md:my-[6px] px-[10px] sm:px-[5px] md:px-[6px] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]">
                  <Img
                    src="images/img_video.svg"
                    className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                    alt="Video"
                  />
                </Button>
                <Button className="bg-gray_100 flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center md:ml-[10px] ml-[15px] sm:ml-[7px] my-[10px] sm:my-[5px] md:my-[6px] px-[10px] sm:px-[5px] md:px-[6px] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]">
                  <Img
                    src="images/img_plus.svg"
                    className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                    alt="Plus"
                  />
                </Button>
                <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[18%] sm:ml-[231px] md:ml-[299px] ml-[435px] md:py-[15px] sm:py-[15px] py-[22px] rounded-radius29 text-[14px] text-center text-white_A700 w-[max-content]">
                  Share
                </Button>
              </Row>
            </Column>
          </Column>
          <Column className="bg-white_A700 flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                <Img
                  src="images/img_image_48X48.png"
                  className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                  alt="Image Eight"
                />
                <Column className="flex flex-col sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[64%]">
                  <Text
                    className="font-bold mt-[2px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Dustin Housto
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
              className="font-medium sm:mt-[15px] md:mt-[19px] mt-[29px] text-gray_500 w-[auto]"
              as="h5"
              variant="h5"
            >
              Whether its a driving tour, a cruise or a bus, leaf viewing is a
              great way to spend a fall vacation 😂
            </Text>
            <Column className="flex flex-col font-sfprodisplay items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Img
                  src="images/img_photo1.png"
                  className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[50%]"
                  alt="PhotoOne"
                />
                <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Img
                      src="images/img_photo2.png"
                      className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[48%]"
                      alt="PhotoTwo"
                    />
                    <Img
                      src="images/img_photo3.png"
                      className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[48%]"
                      alt="PhotoThree"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                    <Img
                      src="images/img_photo4.png"
                      className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[48%]"
                      alt="PhotoFour"
                    />
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[36px] p-[53px] rounded-radius8 sm:w-[100%] w-[48%]"
                      style={{ backgroundImage: "url('images/img_5.png')" }}
                    >
                      <Button
                        className="bg-white_A700 flex items-center justify-center md:px-[6px] md:py-[5px] min-w-[100%] my-[4px] px-[9px] py-[8px] rounded-radius4 sm:p-[4px] text-center w-[max-content]"
                        leftIcon={
                          <Img
                            src="images/img_icon_camera.svg"
                            className="mr-[6px] sm:mr-[3px] md:mr-[4px] text-center"
                            alt="Icon/Camera"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-gray_900">
                          15
                        </div>
                      </Button>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[40px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] w-[10%] sm:w-[100%]">
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
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center md:ml-[10px] ml-[15px] sm:mx-[0] md:p-[3px] p-[5px] sm:px-[0] sm:py-[2px] sm:w-[100%] w-[9%]">
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
              <Button
                className="bg-gray_100_6c flex items-center justify-center md:ml-[331px] md:pl-[6px] md:pr-[7px] md:py-[3px] min-w-[11%] ml-[482px] pl-[10px] pr-[11px] py-[5px] rounded-radius4 sm:ml-[256px] sm:px-[5px] sm:py-[2px] text-center w-[max-content]"
                rightIcon={
                  <Img
                    src="images/img_icon_share.svg"
                    className="ml-[3px] text-center"
                    alt="Icon/Share"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-medium font-sfprodisplay text-[14px] text-gray_900">
                  Share
                </div>
              </Button>
            </Row>
          </Column>
        </Column>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center max-w-[420px] sm:ml-[15px] md:ml-[20px] ml-[auto] mr-[auto] sm:pl-[15px] md:pl-[3px] pl-[5px] sm:pr-[15px] w-[100%]">
          <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
          <Column className="bg-gray_900 flex flex-col items-end ml-[10px] md:ml-[6px] sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
              <Button className="bg-light_blue_200 cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 sm:w-[25px] md:w-[33px] w-[48px]">
                1
              </Button>
              <Img
                src="images/img_avatar_48X48.png"
                className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                alt="Avatar One"
              />
            </Row>
            <Column className="flex flex-col font-inter items-center justify-start mb-[2px] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
              <Stack className="bg-red_A200 h-[174px] md:pt-[13px] sm:pt-[15px] pt-[20px] relative rounded-radius12 w-[100%]">
                <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <div className="bg-green_400 sm:h-[47px] md:h-[60px] h-[87px] sm:mb-[26px] md:mb-[34px] mb-[50px] rounded-radius435 w-[19%]"></div>
                    <Img
                      src="images/img_oval.png"
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
              <Column className="flex flex-col justify-start sm:mt-[34px] md:mt-[44px] mt-[64px] pb-[3px] w-[100%]">
                <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                  Who to Follow
                </Text>
                <List
                  className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid min-h-[auto] sm:mt-[22px] md:mt-[29px] mt-[43px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                    <Img
                      src="images/img_avatar.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Two"
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
                        src="images/img_adduser_28X28.svg"
                        className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                        alt="AddUser One"
                      />
                    </Button>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                    <Img
                      src="images/img_avatar_38X38.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Three"
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
                        src="images/img_adduser_28X28.svg"
                        className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                        alt="AddUser Two"
                      />
                    </Button>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                    <Img
                      src="images/img_avatar_1.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Four"
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
                        src="images/img_adduser_28X28.svg"
                        className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                        alt="AddUser Three"
                      />
                    </Button>
                  </Row>
                </List>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                  <Text
                    className="flex-grow font-bold mt-[1px] text-gray_500 tracking-ls1 uppercase"
                    as="h6"
                    variant="h6"
                  >
                    See more
                  </Text>
                  <Img
                    src="images/img_iconarrowrigh_1.svg"
                    className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] w-[14px] sm:w-[7px] md:w-[9px]"
                    alt="IconArrowRigh Two"
                  />
                </Row>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] w-[100%]">
                <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                  Friends
                </Text>
                <List
                  className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid min-h-[auto] sm:mt-[23px] md:mt-[30px] mt-[44px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                    <Img
                      src="images/img_avatar_2.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Five"
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
                      src="images/img_avatar_3.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Six"
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
                      src="images/img_avatar_4.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Seven"
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
    </>
  );
};

export default HomevOnePage;
