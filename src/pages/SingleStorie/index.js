import React from "react";

import {
  Row,
  Column,
  Img,
  Button,
  Stack,
  Line,
  Input,
  Text,
  List,
} from "components";

const SingleStoriePage = () => {
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
        <Stack className="h-[1024px] max-w-[1274px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <Stack className="absolute h-[1024px] w-[100%]">
            <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pl-[2px] md:pl-[3px] pl-[5px] w-[100%]">
              <Line className="bg-white_A700_66 h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[5px]" />
              <div className="bg-gray_900 h-[1024px] sm:h-[546px] md:h-[705px] ml-[10px] sm:ml-[5px] md:ml-[6px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[99%]"></div>
            </Row>
            <Column className="absolute bottom-[4%] flex flex-col items-center justify-start left-[15%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                  <div className="bg-white_A700 sm:h-[3px] md:h-[4px] h-[5px] rounded-radius2 w-[32%]"></div>
                  <div className="bg-white_A700_66 sm:h-[3px] md:h-[4px] h-[5px] md:ml-[10px] ml-[15px] sm:ml-[7px] rounded-radius2 w-[32%]"></div>
                  <div className="bg-white_A700_66 sm:h-[3px] md:h-[4px] h-[5px] md:ml-[10px] ml-[15px] sm:ml-[7px] rounded-radius2 w-[32%]"></div>
                </Row>
                <Column className="bg-gray_900_6c border-2 border-gray_500_6c border-solid flex flex-col items-center justify-start sm:mt-[406px] md:mt-[525px] mt-[763px] sm:p-[4px] md:p-[6px] p-[9px] rounded-radius4 w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                      <Input
                        className="font-medium sm:pl-[3px] md:pl-[4px] pl-[6px] sm:pr-[15px] md:pr-[24px] pr-[35px] sm:py-[3px] md:py-[4px] py-[7px] text-[14px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                        wrapClassName="bg-gray_900 sm:mx-[0] sm:w-[100%] w-[95%]"
                        name="FrameSeven"
                        placeholder="Write a comment…"
                      ></Input>
                      <Img
                        src="images/img_iconsend_20X20.svg"
                        className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="IconSend"
                      />
                    </Row>
                    <Img
                      src="images/img_iconemoji_20X20.svg"
                      className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="IconEmoji"
                    />
                  </Row>
                </Column>
              </Column>
            </Column>
          </Stack>
          <Column className="absolute flex flex-col font-sfprodisplay justify-start left-[9%] sm:mx-[0] sm:px-[0] top-[4%] sm:w-[100%] w-[55%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
              <Button
                className="bg-white_A700_33 flex items-center justify-center md:pl-[13px] md:pr-[15px] md:py-[15px] min-w-[17%] pl-[20px] pr-[23px] py-[22px] rounded-radius12 sm:p-[15px] text-center w-[max-content]"
                leftIcon={
                  <Img
                    src="images/img_icon_arrowleft.svg"
                    className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                    alt="Icon/Arrow-Left"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-bold text-[14px] text-white_A700">
                  Back
                </div>
              </Button>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between md:ml-[264px] ml-[385px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                <Text
                  className="flex-grow font-medium text-white_A700"
                  as="h5"
                  variant="h5"
                >
                  Sara Scholz
                </Text>
                <Img
                  src="images/img_avatar.png"
                  className="flex-shrink-0 sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                  alt="Avatar"
                />
              </Row>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
              <Button className="border-2 border-solid border-white_A700_33 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center md:px-[11px] sm:px-[15px] px-[16px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                <Img
                  src="images/img_leftbuttton.svg"
                  className="flex items-center justify-center"
                  alt="LeftButtton"
                />
              </Button>
              <Img
                src="images/img_image_768X540.png"
                className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[78%]"
                alt="Image"
              />
              <Button className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center outline outline-[1px] outline-white_A700_33 md:px-[11px] sm:px-[15px] px-[16px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                <Img
                  src="images/img_arrowright.svg"
                  className="flex items-center justify-center"
                  alt="arrowright"
                />
              </Button>
            </Row>
          </Column>
          <Column className="absolute bg-white_A700 flex flex-col font-sfprodisplay justify-end sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[32%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:ml-[147px] ml-[214px] mr-[10px] md:mr-[6px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
              <Button className="bg-light_blue_200 cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 sm:w-[25px] md:w-[33px] w-[48px]">
                1
              </Button>
              <Img
                src="images/img_avatar_48X48.png"
                className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                alt="Avatar One"
              />
            </Row>
            <Column className="flex flex-col font-inter justify-start md:ml-[10px] ml-[15px] md:mr-[13px] mr-[20px] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
              <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                Next Stories
              </Text>
              <List
                className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid min-h-[auto] sm:mt-[23px] md:mt-[30px] mt-[44px] w-[100%]"
                orientation="vertical"
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <Img
                    src="images/img_avatar.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Two"
                  />
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    MadeInAmerica
                  </Text>
                  <Button className="bg-indigo_A200_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[124px] sm:ml-[66px] md:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_button_28X28.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="Button"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <Img
                    src="images/img_avatar_4.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Three"
                  />
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    MadeInAmerica
                  </Text>
                  <Button className="bg-indigo_A200_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[124px] sm:ml-[66px] md:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_button_28X28.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="Button One"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <Img
                    src="images/img_avatar_6.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Four"
                  />
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    MadeInAmerica
                  </Text>
                  <Button className="bg-indigo_A200_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[124px] sm:ml-[66px] md:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_button_28X28.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="Button Two"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <Img
                    src="images/img_avatar_38X38.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Five"
                  />
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    MadeInAmerica
                  </Text>
                  <Button className="bg-indigo_A200_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[124px] sm:ml-[66px] md:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_button_28X28.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="Button Three"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <Img
                    src="images/img_avatar_7.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Six"
                  />
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    MadeInAmerica
                  </Text>
                  <Button className="bg-indigo_A200_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[124px] sm:ml-[66px] md:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_button_28X28.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="Button Four"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <Img
                    src="images/img_avatar_8.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Seven"
                  />
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    MadeInAmerica
                  </Text>
                  <Button className="bg-indigo_A200_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[124px] sm:ml-[66px] md:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_button_28X28.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="Button Five"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <Img
                    src="images/img_avatar_9.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Eight"
                  />
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    MadeInAmerica
                  </Text>
                  <Button className="bg-indigo_A200_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[124px] sm:ml-[66px] md:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_button_28X28.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="Button Six"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <Img
                    src="images/img_avatar_1.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Nine"
                  />
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    MadeInAmerica
                  </Text>
                  <Button className="bg-indigo_A200_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[124px] sm:ml-[66px] md:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_button_28X28.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="Button Seven"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <Img
                    src="images/img_avatar_10.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Ten"
                  />
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    MadeInAmerica
                  </Text>
                  <Button className="bg-indigo_A200_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[124px] sm:ml-[66px] md:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_button_28X28.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="Button Eight"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <Img
                    src="images/img_avatar_11.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Eleven"
                  />
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    MadeInAmerica
                  </Text>
                  <Button className="bg-indigo_A200_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[124px] sm:ml-[66px] md:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_button_28X28.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="Button Nine"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <Img
                    src="images/img_avatar_12.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Twelve"
                  />
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    MadeInAmerica
                  </Text>
                  <Button className="bg-indigo_A200_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[124px] sm:ml-[66px] md:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_button_28X28.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="Button Ten"
                    />
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <Img
                    src="images/img_avatar_13.png"
                    className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                    alt="Avatar Thirteen"
                  />
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    MadeInAmerica
                  </Text>
                  <Button className="bg-indigo_A200_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[124px] sm:ml-[66px] md:ml-[85px] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                    <Img
                      src="images/img_button_28X28.svg"
                      className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                      alt="Button Eleven"
                    />
                  </Button>
                </Row>
              </List>
            </Column>
          </Column>
        </Stack>
      </Row>
    </>
  );
};

export default SingleStoriePage;
