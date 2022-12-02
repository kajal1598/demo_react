import React from "react";

import { Column, Row, Img, Button, Text, List, Stack } from "components";

const GalleryPage = () => {
  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-sfprodisplay items-center justify-end mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[575px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <aside className="md:hidden sm:hidden w-[29%]">
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
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
              <Button
                className="bg-gray_500_33 flex items-center justify-center md:pl-[13px] md:pr-[15px] md:py-[15px] min-w-[30%] pl-[20px] pr-[23px] py-[22px] rounded-radius12 sm:p-[15px] text-center w-[max-content]"
                leftIcon={
                  <Img
                    src="images/img_icon_arrowleft_18X18.svg"
                    className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                    alt="Icon/Arrow-Left"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-bold text-[14px] text-gray_500">
                  Back
                </div>
              </Button>
              <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius12 w-[100%]">
                <Column className="flex flex-col items-center justify-start my-[10px] sm:my-[5px] md:my-[6px] sm:px-[0] w-[100%]">
                  <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[108px] sm:h-[58px] md:h-[75px] max-w-[100%] rounded-radius36 w-[108px] sm:w-[57px] md:w-[74px]"
                      alt="Avatar"
                    />
                    <Text
                      className="mt-[10px] sm:mt-[5px] md:mt-[6px] text-gray_900 w-[auto]"
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
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[42%]">
                      <Text
                        className="my-[1px] text-gray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        518
                      </Text>
                      <Text
                        className="sm:ml-[4px] md:ml-[5px] ml-[8px] my-[1px] text-gray_500 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Posts
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[15px] ml-[22px] sm:mx-[0] pb-[1px] pr-[1px] sm:px-[0] sm:w-[100%] w-[48%]">
                      <Text
                        className="mt-[3px] text-gray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        22k
                      </Text>
                      <Text
                        className="mb-[2px] sm:ml-[2px] md:ml-[3px] ml-[5px] text-gray_500 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Friends
                      </Text>
                    </Row>
                  </Row>
                  <Column className="flex flex-col font-sfprodisplay justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Button
                        className="bg-green_400 flex items-center justify-center md:px-[24px] md:py-[15px] min-w-[53%] px-[35px] py-[22px] rounded-radius12 sm:p-[15px] text-center w-[max-content]"
                        leftIcon={
                          <Img
                            src="images/img_button.svg"
                            className="mr-[8px] sm:mr-[4px] md:mr-[5px] text-center"
                            alt="Icon/Check"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-bold text-[14px] text-white_A700">
                          Freinds
                        </div>
                      </Button>
                      <Img
                        src="images/img_buttonicon_2.svg"
                        className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:w-[25px] md:w-[33px] w-[48px]"
                        alt="ButtonIcon"
                      />
                      <Button className="border-2 border-gray_500_33 border-solid flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center px-[12px] sm:px-[6px] md:px-[8px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
                        <Img
                          src="images/img_buttonicon_3.svg"
                          className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                          alt="ButtonIcon One"
                        />
                      </Button>
                    </Row>
                    <Column className="flex flex-col font-inter justify-start sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                      <Text
                        className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        About
                      </Text>
                      <Text
                        className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_500 w-[100%]"
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
                        className="text-gray_900 w-[auto]"
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
                            alt="Avatar One"
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
                            alt="Avatar Two"
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
                            alt="Avatar Three"
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
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start justify-between max-w-[800px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="bg-gray_500_66 h-[128px] sm:h-[69px] md:h-[89px] sm:mb-[263px] md:mb-[339px] mb-[494px] sm:mt-[238px] md:mt-[308px] mt-[448px] rounded-radius2 w-[1%]"></div>
            <Stack className="h-[1070px] relative sm:w-[100%] w-[99%]">
              <Row className="absolute bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] top-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[39%]">
                  <Stack className="h-[25px] mt-[1px] relative sm:w-[100%] w-[44%]">
                    <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[0] top-[0] sm:w-[100%] w-[41%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Photos
                      </Text>
                    </Column>
                    <Column className="absolute flex flex-col justify-start left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Text
                        className="font-bold sm:mr-[39px] md:mr-[51px] mr-[75px] text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Posts
                      </Text>
                      <div className="bg-gray_900 h-[2px] sm:ml-[39px] md:ml-[51px] ml-[75px] sm:mt-[4px] md:mt-[6px] mt-[9px] w-[35%]"></div>
                    </Column>
                  </Stack>
                  <Column className="flex flex-col items-center justify-start md:ml-[22px] ml-[32px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                    <Text
                      className="font-bold text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Videos
                    </Text>
                  </Column>
                  <Column className="flex flex-col items-center justify-start md:ml-[17px] ml-[25px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                    <Text
                      className="font-bold text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Events
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-sfprodisplay items-center justify-center sm:mb-[474px] md:mb-[613px] mb-[891px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                  <Button className="bg-light_blue_200 cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 sm:w-[25px] md:w-[33px] w-[48px]">
                    1
                  </Button>
                  <Img
                    src="images/img_avatar_48X48.png"
                    className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                    alt="Avatar Four"
                  />
                </Row>
              </Row>
              <List
                className="absolute bottom-[0] md:gap-[11px] gap-[16px] sm:gap-[8px] grid inset-x-[0] min-h-[auto] mx-[auto] rounded-radius12 sm:w-[100%] w-[89%]"
                orientation="vertical"
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_5.png"
                    className="sm:h-[118px] md:h-[153px] h-[221px] max-w-[100%] rounded-radius12 sm:w-[117px] md:w-[152px] w-[221px]"
                    alt="Image"
                  />
                  <Img
                    src="images/img_image_221X221.png"
                    className="sm:h-[118px] md:h-[153px] h-[221px] max-w-[100%] rounded-radius12 sm:w-[117px] md:w-[152px] w-[221px]"
                    alt="Image One"
                  />
                  <Img
                    src="images/img_image_19.png"
                    className="sm:h-[118px] md:h-[153px] h-[221px] max-w-[100%] rounded-radius12 sm:w-[117px] md:w-[152px] w-[221px]"
                    alt="Image Two"
                  />
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_photo4.png"
                    className="sm:h-[118px] md:h-[153px] h-[221px] max-w-[100%] rounded-radius12 sm:w-[117px] md:w-[152px] w-[221px]"
                    alt="Image One"
                  />
                  <Img
                    src="images/img_image_20.png"
                    className="sm:h-[118px] md:h-[153px] h-[221px] max-w-[100%] rounded-radius12 sm:w-[117px] md:w-[152px] w-[221px]"
                    alt="Image One One"
                  />
                  <Img
                    src="images/img_photo1.png"
                    className="sm:h-[118px] md:h-[153px] h-[221px] max-w-[100%] rounded-radius12 sm:w-[117px] md:w-[152px] w-[221px]"
                    alt="Image Two One"
                  />
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_image_21.png"
                    className="sm:h-[118px] md:h-[153px] h-[221px] max-w-[100%] rounded-radius12 sm:w-[117px] md:w-[152px] w-[221px]"
                    alt="Image Two"
                  />
                  <Img
                    src="images/img_image_22.png"
                    className="sm:h-[118px] md:h-[153px] h-[221px] max-w-[100%] rounded-radius12 sm:w-[117px] md:w-[152px] w-[221px]"
                    alt="Image One Two"
                  />
                  <Img
                    src="images/img_image_23.png"
                    className="sm:h-[118px] md:h-[153px] h-[221px] max-w-[100%] rounded-radius12 sm:w-[117px] md:w-[152px] w-[221px]"
                    alt="Image Two Two"
                  />
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_image_768X540.png"
                    className="sm:h-[118px] md:h-[153px] h-[221px] max-w-[100%] rounded-radius12 sm:w-[117px] md:w-[152px] w-[221px]"
                    alt="Image Three"
                  />
                  <Img
                    src="images/img_photo2.png"
                    className="sm:h-[118px] md:h-[153px] h-[221px] max-w-[100%] rounded-radius12 sm:w-[117px] md:w-[152px] w-[221px]"
                    alt="Image One Three"
                  />
                  <Img
                    src="images/img_photo3.png"
                    className="sm:h-[118px] md:h-[153px] h-[221px] max-w-[100%] rounded-radius12 sm:w-[117px] md:w-[152px] w-[221px]"
                    alt="Image Two Three"
                  />
                </Row>
              </List>
            </Stack>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default GalleryPage;
