import React from "react";

import { Stack, Column, Text, Button, Row, Img, Input } from "components";

const SignupPage = () => {
  return (
    <>
      <Stack className="bg-gray_100 font-inter h-[1024px] mx-[auto] relative w-[100%]">
        <Column
          className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-center left-[0] max-w-[830px] sm:p-[15px] md:p-[209px] p-[305px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
          style={{ backgroundImage: "url('images/img_left.png')" }}
        >
          <Column className="flex flex-col items-center justify-start my-[130px] sm:my-[69px] md:my-[89px] sm:px-[0] w-[100%]">
            <Text className="text-white_A700 w-[auto]" as="h1" variant="h1">
              Hello!
            </Text>
            <Text
              className="font-medium mt-[14px] sm:mt-[7px] md:mt-[9px] text-white_A700 w-[auto]"
              as="h5"
              variant="h5"
            >
              Already have an account?
            </Text>
            <Button className="bg-indigo_A200 cursor-pointer font-bold sm:mt-[15px] md:mt-[20px] mt-[30px] md:py-[14px] sm:py-[15px] py-[21px] rounded-radius29 text-[14px] text-center text-white_A700 w-[100%]">
              Login
            </Button>
          </Column>
        </Column>
        <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[655px] sm:pl-[15px] sm:pr-[15px] right-[0] w-[100%]">
          <div className="bg-white_A700_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[1%]"></div>
          <Column className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[33px] p-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[98%]">
            <Column className="flex flex-col justify-start md:ml-[52px] ml-[76px] sm:mt-[27px] md:mt-[35px] mt-[52px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
              <Img
                src="images/img_standardcollec.svg"
                className="sm:h-[22px] md:h-[29px] h-[41px] max-w-[100%] sm:w-[21px] md:w-[28px] w-[41px]"
                alt="StandardCollec"
              />
              <Column className="flex flex-col justify-start ml-[1px] sm:mt-[28px] md:mt-[36px] mt-[53px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  Create an account
                </Text>
                <Text
                  className="font-medium md:mt-[12px] mt-[18px] sm:mt-[9px] text-gray_500 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Sign up to continue{" "}
                </Text>
              </Column>
              <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] pt-[3px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    name
                  </Text>
                  <Input
                    className="font-medium pb-[14px] sm:pb-[7px] md:pb-[9px] md:pl-[10px] pl-[15px] sm:pl-[7px] sm:pr-[15px] md:pr-[24px] pr-[35px] md:pt-[12px] pt-[18px] sm:pt-[9px] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="border border-gray_500_6c border-solid md:mt-[9px] mt-[14px] rounded-radius8 sm:mt-[7px] w-[100%]"
                    name="Group1121"
                    placeholder="Anne Carry"
                  ></Input>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    email
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="border border-gray_500_6c border-solid flex md:mt-[9px] md:pb-[9px] md:pt-[12px] md:px-[10px] mt-[14px] pb-[14px] pt-[18px] px-[15px] rounded-radius8 sm:mt-[7px] sm:pb-[7px] sm:pt-[9px] sm:px-[7px] w-[100%]"
                    type="email"
                    name="email"
                    placeholder="anne.carry@mail.com"
                    suffix={
                      <Img
                        src="images/img_icon_checkcircle_18X18.svg"
                        className="ml-[35px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="Icon/Check-Circle"
                      />
                    }
                  ></Input>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Password
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="border border-gray_500_6c border-solid flex md:mt-[9px] md:pb-[9px] md:pt-[12px] md:px-[10px] mt-[14px] pb-[14px] pt-[18px] px-[15px] rounded-radius8 sm:mt-[7px] sm:pb-[7px] sm:pt-[9px] sm:px-[7px] w-[100%]"
                    type="password"
                    name="Group1119"
                    placeholder="Password@123"
                    suffix={
                      <Img
                        src="images/img_icon_eye.svg"
                        className="ml-[35px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                        alt="Icon/Eye"
                      />
                    }
                  ></Input>
                </Column>
              </Column>
              <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[100%] sm:mt-[21px] md:mt-[27px] mt-[40px] md:py-[15px] sm:py-[15px] py-[22px] rounded-radius29 text-[14px] text-center text-white_A700 w-[max-content]">
                Create an account
              </Button>
              <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[33px] sm:px-[0] w-[100%]">
                <Text
                  className="font-normal ml-[117px] sm:ml-[62px] md:ml-[80px] not-italic text-gray_500 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Or connect with socials
                </Text>
                <Column className="flex flex-col items-center justify-start sm:mt-[18px] md:mt-[23px] mt-[34px] w-[100%]">
                  <Column className="bg-indigo_600 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius29 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                      <Img
                        src="images/img_iconfacebook.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="IconFacebook"
                      />
                      <Text
                        className="flex-grow font-bold ml-[3px] text-white_A700"
                        as="h5"
                        variant="h5"
                      >
                        Connect with Facebook
                      </Text>
                    </Row>
                  </Column>
                  <Button
                    className="bg-gray_900 flex items-center justify-center md:mt-[13px] md:px-[24px] md:py-[14px] mt-[20px] px-[35px] py-[21px] rounded-radius29 sm:mt-[10px] sm:p-[15px] text-center w-[100%]"
                    leftIcon={
                      <Img
                        src="images/img_icon_apple_18X18.svg"
                        className="mr-[5px] sm:mr-[2px] md:mr-[3px] text-center"
                        alt="Icon/Apple"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-bold text-[14px] text-white_A700">
                      Connect with Apple
                    </div>
                  </Button>
                  <Button
                    className="border-2 border-gray_500_66 border-solid flex items-center justify-center md:mt-[13px] md:px-[24px] md:py-[14px] mt-[20px] px-[35px] py-[21px] rounded-radius29 sm:mt-[10px] sm:px-[15px] sm:py-[11px] text-center w-[100%]"
                    leftIcon={
                      <Img
                        src="images/img_icon_google.svg"
                        className="mr-[4px] text-center"
                        alt="Icon/Google"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-bold text-[14px] text-gray_900">
                      Connect with Google+
                    </div>
                  </Button>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Stack>
    </>
  );
};

export default SignupPage;
