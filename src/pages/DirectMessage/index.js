import React from "react";

import {
  Column,
  Row,
  Img,
  Button,
  Input,
  Text,
  Line,
  List,
  Stack,
} from "components";

const DirectMessagePage = () => {
  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-sfprodisplay items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[600px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <aside className="md:hidden sm:hidden w-[28%]">
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
            <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="bg-white_A700 flex md:pl-[13px] md:pr-[24px] md:py-[14px] pl-[20px] pr-[35px] py-[21px] rounded-radius12 sm:mx-[0] sm:p-[15px] sm:w-[100%] w-[82%]"
                    name="Search"
                    placeholder="Search in social…"
                    prefix={
                      <Img
                        src="images/img_icon_search.svg"
                        className="mr-[15px] sm:mr-[7px] md:mr-[10px] my-[auto]"
                        alt="Icon/Search"
                      />
                    }
                  ></Input>
                  <Button className="bg-green_400 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                    <Img
                      src="images/img_icon_comment_1.svg"
                      className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                      alt="ButtonIcon"
                    />
                  </Button>
                </Row>
                <Column className="flex flex-col font-inter justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] w-[100%]">
                  <Text className="text-gray_900 w-[auto]" as="h1" variant="h1">
                    Inbox
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] py-[1px] sm:w-[100%] w-[84%]">
                    <Column className="flex flex-col items-center justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Direct Messages
                      </Text>
                      <Line className="bg-gray_900 h-[2px] sm:mt-[3px] md:mt-[4px] mt-[6px] w-[100%]" />
                    </Column>
                    <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[20px] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                      <Text
                        className="font-bold text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Group Chat
                      </Text>
                    </Column>
                    <Column className="flex flex-col items-center justify-start md:ml-[15px] ml-[23px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                      <Text
                        className="font-bold text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Archived
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col font-inter items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                <List
                  className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] sm:w-[100%] w-[90%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                      <Stack className="h-[48px] relative w-[25%]">
                        <Img
                          src="images/img_avatar_28X28.png"
                          className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Avatar"
                        />
                        <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] pl-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[25%]">
                      <Text
                        className="font-inter font-normal mr-[1px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        3:03pm
                      </Text>
                      <Button className="bg-red_A200 cursor-pointer font-bold font-sfprodisplay min-w-[21%] mt-[2px] py-[3px] rounded-radius6 text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[max-content]">
                        1
                      </Button>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                      <Stack className="h-[48px] relative w-[25%]">
                        <Img
                          src="images/img_image_11.png"
                          className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Avatar One"
                        />
                        <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] pl-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[25%]">
                      <Text
                        className="font-inter font-normal mr-[1px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        3:03pm
                      </Text>
                      <Button className="bg-red_A200 cursor-pointer font-bold font-sfprodisplay min-w-[21%] mt-[2px] py-[3px] rounded-radius6 text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[max-content]">
                        1
                      </Button>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                      <Stack className="h-[48px] relative w-[25%]">
                        <Img
                          src="images/img_image_9.png"
                          className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Avatar Two"
                        />
                        <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] pl-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[25%]">
                      <Text
                        className="font-inter font-normal mr-[1px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        3:03pm
                      </Text>
                      <Button className="bg-red_A200 cursor-pointer font-bold font-sfprodisplay min-w-[21%] mt-[2px] py-[3px] rounded-radius6 text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[max-content]">
                        1
                      </Button>
                    </Column>
                  </Row>
                </List>
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] md:p-[13px] sm:p-[15px] p-[20px] rounded-radius12 w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                      <Stack className="h-[48px] relative w-[25%]">
                        <Img
                          src="images/img_avatar_21.png"
                          className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Avatar Three"
                        />
                        <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[25%]">
                      <Text
                        className="font-normal sm:mb-[10px] md:mb-[13px] mb-[19px] mt-[4px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Yesterday
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <List
                  className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:w-[100%] w-[90%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                      <Stack className="h-[48px] relative w-[25%]">
                        <Img
                          src="images/img_avatar_14.png"
                          className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Avatar Four"
                        />
                        <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[25%]">
                      <Text
                        className="font-normal sm:mb-[10px] md:mb-[13px] mb-[19px] mt-[4px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Yesterday
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                      <Stack className="h-[48px] relative w-[25%]">
                        <Img
                          src="images/img_avatar_24.png"
                          className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Avatar Five"
                        />
                        <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[25%]">
                      <Text
                        className="font-normal sm:mb-[12px] md:mb-[16px] mb-[24px] mt-[3px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Oct 26
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                      <Stack className="h-[48px] relative w-[25%]">
                        <Img
                          src="images/img_avatar_22.png"
                          className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Avatar Six"
                        />
                        <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] pl-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[25%]">
                      <Text
                        className="font-inter font-normal mr-[1px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Oct 26
                      </Text>
                      <Button className="bg-red_A200 cursor-pointer font-bold font-sfprodisplay min-w-[21%] sm:mt-[3px] md:mt-[4px] mt-[6px] py-[3px] rounded-radius6 text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[max-content]">
                        1
                      </Button>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                      <Stack className="h-[48px] relative w-[25%]">
                        <Img
                          src="images/img_image_8.png"
                          className="absolute h-[48px] left-[0] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                          alt="Avatar Seven"
                        />
                        <Stack className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 h-[12px] sm:h-[7px] md:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] sm:h-[6px] md:h-[7px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px] sm:w-[5px] md:w-[6px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="flex flex-col justify-start mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Column className="flex flex-col items-end justify-start mt-[3px] sm:mx-[0] pl-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[25%]">
                      <Text
                        className="font-inter font-normal mr-[1px] not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Oct 26
                      </Text>
                      <Button className="bg-red_A200 cursor-pointer font-bold font-sfprodisplay min-w-[21%] sm:mt-[3px] md:mt-[4px] mt-[6px] py-[3px] rounded-radius6 text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[max-content]">
                        1
                      </Button>
                    </Column>
                  </Row>
                </List>
              </Column>
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[795px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="bg-gray_500_48 h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[1%]"></div>
            <Column className="bg-white_A700 flex flex-col items-end sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[99%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                <Button className="bg-light_blue_200 cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 sm:w-[25px] md:w-[33px] w-[48px]">
                  1
                </Button>
                <Img
                  src="images/img_avatar_48X48.png"
                  className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                  alt="Avatar Eight"
                />
              </Row>
              <Column className="flex flex-col font-inter justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[58px] sm:pb-[15px] md:pb-[28px] pb-[42px] sm:pl-[15px] md:pl-[28px] pl-[42px] relative rounded-radius16 sm:w-[30px] md:w-[39px] w-[58px]"
                      style={{
                        backgroundImage: "url('images/img_avatar.png')",
                      }}
                    >
                      <Img
                        src="images/img_status.svg"
                        className="absolute h-[15px] max-w-[100%] md:w-[10px] w-[15px] sm:w-[7px]"
                        alt="Status"
                      />
                    </Stack>
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                      <Text
                        className="text-gray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="font-medium mt-[12px] sm:mt-[6px] md:mt-[8px] text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Online
                      </Text>
                    </Column>
                  </Row>
                  <Img
                    src="images/img_iconadduser.svg"
                    className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:ml-[135px] md:ml-[174px] ml-[254px] sm:w-[17px] md:w-[22px] w-[32px]"
                    alt="IconAddUser"
                  />
                  <Img
                    src="images/img_iconphone.svg"
                    className="sm:h-[14px] md:h-[18px] h-[25px] max-w-[100%] sm:ml-[21px] md:ml-[27px] ml-[40px] sm:w-[13px] md:w-[17px] w-[25px]"
                    alt="IconPhone"
                  />
                  <Img
                    src="images/img_video.svg"
                    className="sm:h-[14px] md:h-[18px] h-[25px] max-w-[100%] sm:ml-[21px] md:ml-[27px] ml-[40px] sm:w-[13px] md:w-[17px] w-[25px]"
                    alt="IconVideoCame"
                  />
                  <Img
                    src="images/img_icon_eye.svg"
                    className="sm:h-[14px] md:h-[18px] h-[25px] max-w-[100%] sm:ml-[21px] md:ml-[27px] ml-[40px] sm:w-[13px] md:w-[17px] w-[25px]"
                    alt="IconOptions"
                  />
                </Row>
                <Column className="flex flex-col justify-start sm:mt-[37px] md:mt-[48px] mt-[70px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Img
                        src="images/img_avatar_48X48.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Nine"
                      />
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Text
                            className="font-bold mt-[1px] text-gray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Anne Carry
                          </Text>
                          <Text
                            className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            4min
                          </Text>
                        </Row>
                        <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[4px] md:mt-[6px] mt-[9px] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius12 w-[100%]">
                          <Button className="bg-light_blue_200_33 flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center px-[10px] sm:px-[5px] md:px-[6px] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]">
                            <Img
                              src="images/img_buttonicon_1.svg"
                              className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="ButtonIcon One"
                            />
                          </Button>
                          <Line className="bg-gray_500_7e h-[4px] md:my-[11px] my-[17px] sm:my-[9px] rounded-radius2 sm:w-[100%] w-[68%]" />
                          <Text
                            className="font-normal not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            0:06
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <List
                    className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] sm:mt-[26px] md:mt-[33px] mt-[49px] sm:w-[100%] w-[84%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pb-[3px] pr-[3px] w-[100%]">
                      <Img
                        src="images/img_avatar.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Ten"
                      />
                      <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
                          <Text
                            className="font-bold mb-[1px] text-gray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            4min
                          </Text>
                        </Row>
                        <Text
                          className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Yes, I saw his post yesterday
                        </Text>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pb-[3px] pr-[3px] w-[100%]">
                      <Img
                        src="images/img_avatar_48X48.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Eleven"
                      />
                      <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
                          <Text
                            className="font-bold mb-[1px] text-gray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            4min
                          </Text>
                        </Row>
                        <Text
                          className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Yes, I saw his post yesterday
                        </Text>
                      </Column>
                    </Row>
                  </List>
                  <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Img
                        src="images/img_avatar.png"
                        className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                        alt="Avatar Twelve"
                      />
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[57%]">
                          <Text
                            className="font-bold mt-[1px] text-gray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Anne Carry
                          </Text>
                          <Text
                            className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            4min
                          </Text>
                        </Row>
                        <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[4px] md:mt-[6px] mt-[9px] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius12 w-[100%]">
                          <Button className="bg-light_blue_200_33 flex sm:h-[21px] md:h-[27px] h-[38px] items-center justify-center px-[10px] sm:px-[5px] md:px-[6px] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]">
                            <Img
                              src="images/img_buttonicon_1.svg"
                              className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                              alt="ButtonIcon Two"
                            />
                          </Button>
                          <Line className="bg-gray_500_7e h-[4px] md:my-[11px] my-[17px] sm:my-[9px] rounded-radius2 sm:w-[100%] w-[68%]" />
                          <Text
                            className="font-normal not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            0:06
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[26px] md:mt-[33px] mt-[49px] sm:mx-[0] pb-[3px] pr-[3px] sm:px-[0] sm:w-[100%] w-[84%]">
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Thirteen"
                    />
                    <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[72%]">
                        <Text
                          className="font-bold mb-[1px] text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marriet Miles
                        </Text>
                        <Text
                          className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] not-italic text-gray_500 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          4min
                        </Text>
                      </Row>
                      <Text
                        className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Yes, I saw his post yesterday
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                    <Img
                      src="images/img_avatar.png"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Avatar Fourteen"
                    />
                    <Img
                      src="images/img_group1.svg"
                      className="max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[37%]"
                      alt="GroupOne"
                    />
                  </Row>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[23px] md:mt-[30px] mt-[45px] w-[100%]">
                  <Button className="bg-indigo_A200 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                    <Img
                      src="images/img_buttonicon_48X48.svg"
                      className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                      alt="ButtonIcon Three"
                    />
                  </Button>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="bg-gray_100 flex md:pb-[13px] md:pt-[15px] md:px-[13px] pb-[19px] pt-[23px] px-[20px] rounded-radius12 sm:mx-[0] sm:p-[15px] sm:w-[100%] w-[91%]"
                    name="Field"
                    placeholder="Start typing…"
                    suffix={
                      <Img
                        src="images/img_icon_emoji_14X14.svg"
                        className="ml-[35px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="Icon/Emoji"
                      />
                    }
                  ></Input>
                </Row>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default DirectMessagePage;
