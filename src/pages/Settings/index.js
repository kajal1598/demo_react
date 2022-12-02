import React from "react";

import {
  Column,
  Row,
  Img,
  Button,
  Text,
  Grid,
  Input,
  Line,
  Stack,
} from "components";

const SettingsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[860px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <aside className="md:hidden sm:hidden w-[20%]">
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
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
              <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                Account Informations
              </Text>
              <Column className="flex flex-col items-center justify-start sm:mt-[34px] md:mt-[44px] mt-[64px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Img
                    src="images/img_avatar.png"
                    className="h-[128px] sm:h-[69px] md:h-[89px] max-w-[100%] rounded-radius36 w-[128px] sm:w-[68px] md:w-[88px]"
                    alt="Avatar"
                  />
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                    <Text
                      className="text-gray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Profile Picture
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]">
                      <Button className="bg-light_blue_200 cursor-pointer font-bold font-inter min-w-[48%] md:py-[14px] sm:py-[15px] py-[21px] rounded-radius29 text-[14px] text-center text-white_A700 w-[max-content]">
                        Replace
                      </Button>
                      <Button
                        className="border-2 border-gray_500_66 border-solid flex items-center justify-center md:px-[24px] md:py-[15px] min-w-[48%] px-[35px] py-[22px] rounded-radius12 sm:px-[15px] sm:py-[11px] text-center w-[max-content]"
                        leftIcon={
                          <Img
                            src="images/img_icon_bin.svg"
                            className="mr-[7px] sm:mr-[3px] md:mr-[4px] text-center"
                            alt="Icon/Bin"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-bold font-sfprodisplay text-[14px] text-red_A200">
                          Delete
                        </div>
                      </Button>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Text
                className="sm:mt-[31px] md:mt-[41px] mt-[60px] text-gray_500 w-[auto]"
                as="h4"
                variant="h4"
              >
                Basic Information
              </Text>
              <Grid className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[19px] md:mt-[24px] mt-[36px] w-[100%]">
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    name
                  </Text>
                  <Input
                    className="font-medium pb-[14px] sm:pb-[7px] md:pb-[9px] md:pl-[10px] pl-[15px] sm:pl-[7px] sm:pr-[15px] md:pr-[24px] pr-[35px] md:pt-[12px] pt-[18px] sm:pt-[9px] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="bg-white_A700 md:mt-[9px] mt-[14px] rounded-radius8 sm:mt-[7px] w-[100%]"
                    name="Group1111"
                    placeholder="Anne Carry"
                  ></Input>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    username
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="bg-white_A700 flex md:mt-[9px] md:pb-[9px] md:pt-[13px] md:px-[10px] mt-[14px] pb-[14px] pt-[19px] px-[15px] rounded-radius8 sm:mt-[7px] sm:pb-[7px] sm:pt-[15px] sm:px-[7px] w-[100%]"
                    name="Group1110"
                    placeholder="annecarry"
                    suffix={
                      <Img
                        src="images/img_icon_checkcircle.svg"
                        className="ml-[35px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="Icon/Check-Circle"
                      />
                    }
                  ></Input>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Email
                  </Text>
                  <Input
                    className="font-medium pb-[14px] sm:pb-[7px] md:pb-[9px] md:pl-[10px] pl-[15px] sm:pl-[7px] sm:pr-[15px] md:pr-[24px] pr-[35px] md:pt-[12px] pt-[18px] sm:pt-[9px] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="bg-white_A700 md:mt-[9px] mt-[14px] rounded-radius8 sm:mt-[7px] w-[100%]"
                    name="email"
                    placeholder="anne.carry@mail.com"
                  ></Input>
                </Column>
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    birthday
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="bg-white_A700 flex md:mt-[9px] md:pb-[8px] md:pt-[12px] md:px-[10px] mt-[14px] pb-[13px] pt-[18px] px-[15px] rounded-radius8 sm:mt-[7px] sm:pb-[6px] sm:pt-[15px] sm:px-[7px] w-[100%]"
                    name="month"
                    placeholder="January 25, 1991"
                    suffix={
                      <Img
                        src="images/img_button_28X28.svg"
                        className="ml-[35px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="Icon/Arrow-Down"
                      />
                    }
                  ></Input>
                </Column>
              </Grid>
              <Line className="bg-gray_500_6c h-[1px] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[22px] md:mt-[29px] mt-[43px] w-[100%]">
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Country
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="bg-white_A700 flex md:mt-[9px] md:px-[10px] md:py-[11px] mt-[14px] px-[15px] py-[16px] rounded-radius8 sm:mt-[7px] sm:px-[7px] sm:py-[15px] w-[100%]"
                    name="Group1106"
                    placeholder="United States"
                    suffix={
                      <Img
                        src="images/img_button_28X28.svg"
                        className="ml-[35px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="Icon/Arrow-Down"
                      />
                    }
                  ></Input>
                </Column>
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    state
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="bg-white_A700 flex md:mt-[9px] md:px-[10px] md:py-[11px] mt-[14px] px-[15px] py-[16px] rounded-radius8 sm:mt-[7px] sm:px-[7px] sm:py-[15px] w-[100%]"
                    name="Group1105"
                    placeholder="California"
                    suffix={
                      <Img
                        src="images/img_button_28X28.svg"
                        className="ml-[35px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="Icon/Arrow-Down"
                      />
                    }
                  ></Input>
                </Column>
              </Row>
              <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  City
                </Text>
                <Input
                  className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                  wrapClassName="bg-white_A700 flex md:mt-[9px] md:px-[10px] md:py-[11px] mt-[14px] px-[15px] py-[16px] rounded-radius8 sm:mt-[7px] sm:px-[7px] sm:py-[15px] w-[100%]"
                  name="Group1107"
                  placeholder="San Francisco"
                  suffix={
                    <Img
                      src="images/img_button_28X28.svg"
                      className="ml-[35px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                      alt="Icon/Arrow-Down"
                    />
                  }
                ></Input>
              </Column>
              <Button className="bg-green_400 cursor-pointer font-bold min-w-[29%] sm:mt-[34px] md:mt-[44px] mt-[64px] md:py-[14px] sm:py-[15px] py-[21px] rounded-radius29 text-[14px] text-center text-white_A700 w-[max-content]">
                Save Changes
              </Button>
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[515px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] md:pl-[3px] pl-[5px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[1%]"></div>
            <Column className="bg-gray_900 flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[98%]">
              <Stack className="h-[48px] sm:ml-[159px] md:ml-[205px] ml-[299px] sm:mt-[2px] md:mt-[3px] mt-[5px] relative w-[28%]">
                <Img
                  src="images/img_group1150.png"
                  className="absolute h-[48px] max-w-[100%] right-[0] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                  alt="Image"
                />
                <Column className="absolute bg-light_blue_200 flex flex-col sm:h-[26px] md:h-[34px] h-[48px] items-center justify-start left-[0] px-[13px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    1
                  </Text>
                </Column>
                <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center justify-between w-[100%]">
                  <Button className="bg-light_blue_200 cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 sm:w-[25px] md:w-[33px] w-[48px]">
                    1
                  </Button>
                  <Img
                    src="images/img_avatar_48X48.png"
                    className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                    alt="Avatar One"
                  />
                </Row>
              </Stack>
              <Column className="flex flex-col justify-start sm:mb-[153px] md:mb-[198px] mb-[288px] md:ml-[3px] ml-[5px] md:mr-[140px] mr-[204px] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                  Settings
                </Text>
                <Column className="flex flex-col font-sfprodisplay justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                    <Button className="bg-white_A700 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                      <Img
                        src="images/img_buttonicon_5.svg"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="ButtonIcon"
                      />
                    </Button>
                    <Text
                      className="md:ml-[10px] ml-[15px] sm:ml-[7px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      My Account
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                    <Button className="border-2 border-gray_500_66 border-solid flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                      <Img
                        src="images/img_buttonicon_6.svg"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="ButtonIcon One"
                      />
                    </Button>
                    <Text
                      className="md:ml-[10px] ml-[15px] sm:ml-[7px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Notifications
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                    <Button className="border-2 border-gray_500_66 border-solid flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                      <Img
                        src="images/img_buttonicon_7.svg"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="ButtonIcon Two"
                      />
                    </Button>
                    <Text
                      className="md:ml-[10px] ml-[15px] sm:ml-[7px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Activity History
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                    <Button className="border-2 border-gray_500_66 border-solid flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                      <Img
                        src="images/img_buttonicon_8.svg"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="ButtonIcon Three"
                      />
                    </Button>
                    <Text
                      className="md:ml-[10px] ml-[15px] sm:ml-[7px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Billing and Payment
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Button className="border-2 border-gray_500_66 border-solid flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                      <Img
                        src="images/img_buttonicon_9.svg"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="ButtonIcon Four"
                      />
                    </Button>
                    <Text
                      className="md:ml-[10px] ml-[15px] sm:ml-[7px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Security & Privacy
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                    <Button className="border-2 border-gray_500_66 border-solid flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                      <Img
                        src="images/img_buttonicon_10.svg"
                        className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                        alt="ButtonIcon Five"
                      />
                    </Button>
                    <Text
                      className="md:ml-[10px] ml-[15px] sm:ml-[7px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Help
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default SettingsPage;
