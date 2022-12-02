import React from "react";

import {
  Stack,
  Row,
  Line,
  Column,
  Button,
  Img,
  Text,
  List,
  Input,
} from "components";

const SinglePhotoPage = () => {
  return (
    <>
      <Stack className="bg-blue_A700 font-sfprodisplay h-[1024px] mx-[auto] relative w-[100%]">
        <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1280px] sm:pl-[15px] md:pl-[3px] pl-[5px] sm:pr-[15px] right-[0] w-[100%]">
          <Line className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[5px]" />
          <div className="bg-gray_900 h-[1024px] sm:h-[546px] md:h-[705px] ml-[10px] sm:ml-[5px] md:ml-[6px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[99%]"></div>
        </Row>
        <Column className="absolute flex flex-col items-center justify-start left-[17%] max-w-[696px] sm:pl-[15px] sm:pr-[15px] top-[4%] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
            <Button
              className="bg-white_A700_33 flex items-center justify-center md:pl-[13px] md:pr-[15px] md:py-[15px] min-w-[16%] pl-[20px] pr-[23px] py-[22px] rounded-radius12 sm:p-[15px] text-center w-[max-content]"
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
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
              <Text
                className="flex-grow font-medium text-white_A700"
                as="h5"
                variant="h5"
              >
                Edward Ford
              </Text>
              <Img
                src="images/img_avatar.png"
                className="flex-shrink-0 sm:h-[21px] md:h-[27px] h-[38px] max-w-[100%] rounded-radius12 sm:w-[20px] md:w-[26px] w-[38px]"
                alt="Avatar"
              />
            </Row>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[144px] sm:mt-[76px] md:mt-[99px] w-[100%]">
            <Button className="border-2 border-solid border-white_A700_33 flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center md:px-[11px] sm:px-[15px] px-[16px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]">
              <Img
                src="images/img_leftbuttton.svg"
                className="flex items-center justify-center"
                alt="LeftButtton"
              />
            </Button>
            <Img
              src="images/img_photo4.png"
              className="max-w-[100%] rounded-radius8 sm:w-[100%] w-[74%]"
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
        <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[450px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <div className="bg-gray_500_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[2%]"></div>
          <Column className="bg-white_A700 flex flex-col items-end sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
              <Button className="bg-light_blue_200 cursor-pointer font-bold sm:h-[26px] md:h-[34px] h-[48px] rounded-radius12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 sm:w-[25px] md:w-[33px] w-[48px]">
                1
              </Button>
              <Img
                src="images/img_avatar_48X48.png"
                className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] rounded-radius12 sm:w-[25px] md:w-[33px] w-[48px]"
                alt="Avatar One"
              />
            </Row>
            <Column className="flex flex-col font-inter items-center justify-start sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  Comments (148)
                </Text>
                <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                  <List
                    className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="flex flex-col items-center justify-start my-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                            <Img
                              src="images/img_avatar_28X28.png"
                              className="flex-shrink-0 sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                              alt="Avatar Two"
                            />
                            <Text
                              className="flex-grow font-medium mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900"
                              as="h5"
                              variant="h5"
                            >
                              Billy Green
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            20min ago
                          </Text>
                        </Row>
                        <Text
                          className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          Awesome Edward, remeber that five tips for low cost
                          holidays I sent you?
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                          <Img
                            src="images/img_iconheartfill.svg"
                            className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="IconHeartFill"
                          />
                          <Img
                            src="images/img_iconcomment_14X14.svg"
                            className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="IconComment"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start my-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                            <Img
                              src="images/img_avatar_31.png"
                              className="flex-shrink-0 sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                              alt="Avatar Three"
                            />
                            <Text
                              className="flex-grow font-medium mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900"
                              as="h5"
                              variant="h5"
                            >
                              Billy Green
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            20min ago
                          </Text>
                        </Row>
                        <Text
                          className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          Awesome Edward, remeber that five tips for low cost{" "}
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                          <Img
                            src="images/img_iconheartregu_14X14.svg"
                            className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="IconHeartRegu"
                          />
                          <Img
                            src="images/img_iconcomment_14X14.svg"
                            className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="IconComment One"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start my-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                            <Img
                              src="images/img_image_10.png"
                              className="flex-shrink-0 sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                              alt="Avatar Four"
                            />
                            <Text
                              className="flex-grow font-medium mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900"
                              as="h5"
                              variant="h5"
                            >
                              Billy Green
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            20min ago
                          </Text>
                        </Row>
                        <Text
                          className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          Awesome Edward, remeber that five tips for low cost
                          holidays I sent you?
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                          <Img
                            src="images/img_iconheartfill.svg"
                            className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="IconHeartFill One"
                          />
                          <Img
                            src="images/img_iconcomment_14X14.svg"
                            className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="IconComment Two"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start my-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                            <Img
                              src="images/img_avatar_15.png"
                              className="flex-shrink-0 sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                              alt="Avatar Five"
                            />
                            <Text
                              className="flex-grow font-medium mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900"
                              as="h5"
                              variant="h5"
                            >
                              Billy Green
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            20min ago
                          </Text>
                        </Row>
                        <Text
                          className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-gray_500 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          Awesome Edward, remeber that five tips for low cost{" "}
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                          <Img
                            src="images/img_iconheartregu_14X14.svg"
                            className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="IconHeartRegu One"
                          />
                          <Img
                            src="images/img_iconcomment_14X14.svg"
                            className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[14px] sm:w-[7px] md:w-[9px]"
                            alt="IconComment Three"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </List>
                  <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                          <Img
                            src="images/img_image_11.png"
                            className="flex-shrink-0 sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] rounded-radius10 sm:w-[14px] md:w-[19px] w-[28px]"
                            alt="Avatar Six"
                          />
                          <Text
                            className="flex-grow font-medium mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900"
                            as="h5"
                            variant="h5"
                          >
                            Billy Green
                          </Text>
                        </Row>
                        <Text
                          className="font-normal mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          20min ago
                        </Text>
                      </Row>
                      <Text
                        className="font-normal md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Awesome Edward, remeber that five tips for low cost
                        holidays I sent you?
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Row className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[43px] md:mt-[56px] mt-[82px] sm:p-[2px] md:p-[3px] p-[5px] rounded-radius4 w-[100%]">
                <Input
                  className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                  wrapClassName="bg-gray_100 flex md:pl-[6px] md:pr-[4px] md:py-[7px] pl-[10px] pr-[6px] py-[11px] sm:mx-[0] sm:pl-[5px] sm:pr-[3px] sm:py-[5px] sm:w-[100%] w-[87%]"
                  name="FrameEight"
                  placeholder="Write a comment…"
                  suffix={
                    <Img
                      src="images/img_icon_emoji_14X14.svg"
                      className="ml-[35px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                      alt="Icon/Emoji"
                    />
                  }
                ></Input>
                <Img
                  src="images/img_iconsend.svg"
                  className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] w-[14px] sm:w-[7px] md:w-[9px]"
                  alt="IconSend"
                />
              </Row>
            </Column>
          </Column>
        </Row>
        <aside className="absolute md:hidden sm:hidden w-[12%]">
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
      </Stack>
    </>
  );
};

export default SinglePhotoPage;
