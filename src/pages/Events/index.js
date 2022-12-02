import React from "react";

import {
  Row,
  Column,
  Img,
  Button,
  Input,
  Text,
  Line,
  Grid,
  Stack,
  List,
} from "components";

const EventsPage = () => {
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
        <Column className="flex flex-col justify-end max-w-[790px] sm:ml-[34px] md:ml-[44px] ml-[auto] mr-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:pb-[15px] md:pb-[20px] pb-[30px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius12 sm:w-[100%] w-[97%]">
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
          <Text
            className="sm:mt-[31px] md:mt-[41px] mt-[60px] text-gray_900 w-[auto]"
            as="h1"
            variant="h1"
          >
            Events
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mr-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[62%]">
            <Column className="flex flex-col items-center justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
              <Text
                className="font-bold text-gray_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Anytime
              </Text>
              <Line className="bg-gray_900 h-[2px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:w-[100%] w-[87%]" />
            </Column>
            <Column className="flex flex-col items-center justify-start md:ml-[17px] ml-[25px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
              <Text
                className="font-bold text-gray_500 w-[auto]"
                as="h5"
                variant="h5"
              >
                Today
              </Text>
            </Column>
            <Column className="flex flex-col items-center justify-start md:ml-[17px] ml-[26px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
              <Text
                className="font-bold text-gray_500 w-[auto]"
                as="h5"
                variant="h5"
              >
                Tomorrow
              </Text>
            </Column>
            <Column className="flex flex-col items-center justify-start md:ml-[15px] ml-[22px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
              <Text
                className="font-bold text-gray_500 w-[auto]"
                as="h5"
                variant="h5"
              >
                This Week
              </Text>
            </Column>
            <Column className="flex flex-col items-center justify-start md:ml-[15px] ml-[22px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
              <Text
                className="font-bold text-gray_500 w-[auto]"
                as="h5"
                variant="h5"
              >
                This Month
              </Text>
            </Column>
            <Column className="flex flex-col items-center justify-start md:ml-[15px] ml-[22px] mt-[1px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
              <Text
                className="font-bold text-gray_500 w-[auto]"
                as="h5"
                variant="h5"
              >
                Select
              </Text>
            </Column>
          </Row>
          <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
            <Grid className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[29px] rounded-radius12 w-[100%]">
                <Column className="flex flex-col justify-start my-[1px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_image_180X320.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Image"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                      <Button className="border-2 border-gray_500_33 border-solid cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius1516 sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 sm:w-[25px] md:w-[33px] w-[48px]">
                        10
                      </Button>
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                        <Text
                          className="font-bold text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Monday
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          December, 2019
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_options.svg"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Options"
                    />
                  </Row>
                  <Column className="flex flex-col justify-start ml-[1px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Fashion Meetup
                    </Text>
                    <Text
                      className="font-medium mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Starts at 9:00am in Los Angeles
                    </Text>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                    <Button
                      className="bg-green_400 flex items-center justify-center md:pl-[6px] md:pr-[3px] md:py-[5px] min-w-[32%] pl-[9px] pr-[5px] py-[8px] rounded-radius4 sm:pl-[4px] sm:pr-[2px] sm:py-[4px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_button.svg"
                          className="mr-[3px] text-center"
                          alt="Icon/Check"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Interested
                      </div>
                    </Button>
                    <Stack className="font-sfprodisplay h-[28px] relative w-[24%]">
                      <Stack className="absolute h-[28px] left-[0] sm:w-[100%] w-[69%]">
                        <Img
                          src="images/img_avatar.png"
                          className="absolute h-[28px] left-[0] max-w-[100%] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Avatar"
                        />
                        <Img
                          src="images/img_avatar.png"
                          className="absolute h-[28px] max-w-[100%] right-[0] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Avatar One"
                        />
                      </Stack>
                      <Button className="absolute bg-gray_900 cursor-pointer font-bold sm:h-[15px] md:h-[20px] h-[28px] right-[0] rounded-radius884 text-[10.32px] text-center text-white_A700 sm:w-[14px] md:w-[19px] w-[28px]">
                        +9
                      </Button>
                    </Stack>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[29px] rounded-radius12 w-[100%]">
                <Column className="flex flex-col justify-start my-[1px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_image_13.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Image One"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] pb-[3px] sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                      <Button className="border-2 border-gray_500_6c border-solid cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius1516 sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 sm:w-[25px] md:w-[33px] w-[48px]">
                        10
                      </Button>
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                        <Text
                          className="font-bold text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Wednesday
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-gray_500 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          December, 2019
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_options.svg"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Options One"
                    />
                  </Row>
                  <Text
                    className="font-inter leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_900 w-[100%]"
                    as="h3"
                    variant="h3"
                  >
                    2019 DUB Show at Los Angeles Auto Show
                  </Text>
                  <Text
                    className="font-medium font-sfprodisplay ml-[1px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Starts at 9:00am in Los Angeles
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start justify-between sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                    <Button
                      className="border-2 border-gray_500_33 border-solid flex items-center justify-center md:pl-[6px] md:pr-[3px] md:py-[5px] min-w-[32%] pl-[9px] pr-[5px] py-[8px] rounded-radius4 sm:pl-[4px] sm:pr-[2px] sm:py-[4px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_icon_check.svg"
                          className="mr-[3px] text-center"
                          alt="Icon/Check"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-gray_900">
                        Interested
                      </div>
                    </Button>
                    <Stack className="font-sfprodisplay h-[28px] mt-[2px] relative w-[24%]">
                      <Stack className="absolute h-[28px] left-[0] sm:w-[100%] w-[69%]">
                        <Img
                          src="images/img_avatar.png"
                          className="absolute h-[28px] left-[0] max-w-[100%] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Avatar One"
                        />
                        <Img
                          src="images/img_avatar.png"
                          className="absolute h-[28px] max-w-[100%] right-[0] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Avatar One One"
                        />
                      </Stack>
                      <Button className="absolute bg-gray_900 cursor-pointer font-bold sm:h-[15px] md:h-[20px] h-[28px] right-[0] rounded-radius884 text-[10.32px] text-center text-white_A700 sm:w-[14px] md:w-[19px] w-[28px]">
                        +9
                      </Button>
                    </Stack>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[29px] rounded-radius12 w-[100%]">
                <Column className="flex flex-col items-center justify-start my-[1px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_image_14.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Image Two"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                      <Button className="border-2 border-gray_500_33 border-solid cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius1516 sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 sm:w-[25px] md:w-[33px] w-[48px]">
                        10
                      </Button>
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                        <Text
                          className="font-bold text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Monday
                        </Text>
                        <Text
                          className="font-normal sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_500 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          December, 2019
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_options.svg"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Options Two"
                    />
                  </Row>
                  <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Fashion Meetup
                    </Text>
                    <Text
                      className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Starts at 9:00am in Los Angeles
                    </Text>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                    <Button
                      className="bg-green_400 flex items-center justify-center md:pl-[6px] md:pr-[3px] md:py-[3px] min-w-[32%] pl-[9px] pr-[5px] py-[5px] rounded-radius4 sm:pl-[4px] sm:pr-[2px] sm:py-[2px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_button.svg"
                          className="mr-[3px] text-center"
                          alt="Icon/Check"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Interested
                      </div>
                    </Button>
                    <Stack className="font-sfprodisplay h-[28px] relative w-[24%]">
                      <Stack className="absolute h-[28px] left-[0] sm:w-[100%] w-[69%]">
                        <Img
                          src="images/img_avatar.png"
                          className="absolute h-[28px] left-[0] max-w-[100%] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Avatar Two"
                        />
                        <Img
                          src="images/img_avatar.png"
                          className="absolute h-[28px] max-w-[100%] right-[0] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Avatar One Two"
                        />
                      </Stack>
                      <Button className="absolute bg-gray_900 cursor-pointer font-bold sm:h-[15px] md:h-[20px] h-[28px] right-[0] rounded-radius884 text-[10.32px] text-center text-white_A700 sm:w-[14px] md:w-[19px] w-[28px]">
                        +9
                      </Button>
                    </Stack>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[29px] rounded-radius12 w-[100%]">
                <Column className="flex flex-col items-center justify-start my-[1px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_image_15.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Image Three"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                      <Button className="border-2 border-gray_500_33 border-solid cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius1516 sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 sm:w-[25px] md:w-[33px] w-[48px]">
                        10
                      </Button>
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                        <Text
                          className="font-bold text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Monday
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          December, 2019
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_options.svg"
                      className="sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[38px]"
                      alt="Options Three"
                    />
                  </Row>
                  <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Fashion Meetup
                    </Text>
                    <Text
                      className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Starts at 9:00am in Los Angeles
                    </Text>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                    <Button
                      className="bg-green_400 flex items-center justify-center md:pl-[6px] md:pr-[3px] md:py-[3px] min-w-[32%] pl-[9px] pr-[5px] py-[5px] rounded-radius4 sm:pl-[4px] sm:pr-[2px] sm:py-[2px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_button.svg"
                          className="mr-[3px] text-center"
                          alt="Icon/Check"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                        Interested
                      </div>
                    </Button>
                    <Stack className="font-sfprodisplay h-[28px] relative w-[24%]">
                      <Stack className="absolute h-[28px] left-[0] sm:w-[100%] w-[69%]">
                        <Img
                          src="images/img_avatar.png"
                          className="absolute h-[28px] left-[0] max-w-[100%] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Avatar Three"
                        />
                        <Img
                          src="images/img_avatar.png"
                          className="absolute h-[28px] max-w-[100%] right-[0] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="Avatar One Three"
                        />
                      </Stack>
                      <Button className="absolute bg-gray_900 cursor-pointer font-bold sm:h-[15px] md:h-[20px] h-[28px] right-[0] rounded-radius884 text-[10.32px] text-center text-white_A700 sm:w-[14px] md:w-[19px] w-[28px]">
                        +9
                      </Button>
                    </Stack>
                  </Row>
                </Column>
              </Column>
            </Grid>
          </Column>
        </Column>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center justify-between max-w-[355px] sm:ml-[34px] md:ml-[44px] ml-[auto] mr-[auto] sm:pl-[15px] pl-[1px] sm:pr-[15px] w-[100%]">
          <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
          <Column className="bg-gray_900 flex flex-col items-end sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[96%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
              <Button className="bg-light_blue_200 cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 sm:w-[25px] md:w-[33px] w-[48px]">
                1
              </Button>
              <Img
                src="images/img_avatar_48X48.png"
                className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                alt="Avatar Four"
              />
            </Row>
            <Column className="flex flex-col font-inter justify-start sm:mb-[23px] md:mb-[30px] mb-[45px] sm:mt-[27px] md:mt-[35px] mt-[51px] sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[97%]">
              <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                My Next Events
              </Text>
              <List
                className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]"
                orientation="vertical"
              >
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Img
                      src="images/img_image_140X250.png"
                      className="max-w-[100%] rounded-radius8 w-[100%]"
                      alt="Image Four"
                    />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Column className="flex flex-col sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[84%]">
                        <Text
                          className="font-bold text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Dua Lipa Live Concert
                        </Text>
                        <Text
                          className="font-normal mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          December 12, 2019
                        </Text>
                      </Column>
                      <Button className="bg-white_A700_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[12px] sm:ml-[6px] md:ml-[8px] sm:my-[4px] md:my-[6px] my-[9px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                        <Img
                          src="images/img_button.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="Checkbutton"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Img
                      src="images/img_image_16.png"
                      className="max-w-[100%] rounded-radius8 w-[100%]"
                      alt="Image Five"
                    />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Column className="flex flex-col sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[84%]">
                        <Text
                          className="font-bold text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Dua Lipa Live Concert
                        </Text>
                        <Text
                          className="font-normal mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          December 12, 2019
                        </Text>
                      </Column>
                      <Button className="bg-white_A700_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[12px] sm:ml-[6px] md:ml-[8px] sm:my-[4px] md:my-[6px] my-[9px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                        <Img
                          src="images/img_button.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="Checkbutton One"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Img
                      src="images/img_image_17.png"
                      className="max-w-[100%] rounded-radius8 w-[100%]"
                      alt="Image Six"
                    />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Column className="flex flex-col sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[84%]">
                        <Text
                          className="font-bold text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Dua Lipa Live Concert
                        </Text>
                        <Text
                          className="font-normal mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          December 12, 2019
                        </Text>
                      </Column>
                      <Button className="bg-white_A700_33 flex sm:h-[15px] md:h-[20px] h-[28px] items-center justify-center ml-[12px] sm:ml-[6px] md:ml-[8px] sm:my-[4px] md:my-[6px] my-[9px] sm:px-[3px] md:px-[4px] px-[7px] rounded-radius8 sm:w-[14px] md:w-[19px] w-[28px]">
                        <Img
                          src="images/img_button.svg"
                          className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                          alt="Checkbutton Two"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </List>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
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
                  alt="IconArrowRigh"
                />
              </Row>
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default EventsPage;
