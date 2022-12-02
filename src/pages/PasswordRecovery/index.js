import React from "react";

import { Stack, Column, Text, Button, Row, Img, Input } from "components";

const PasswordRecoveryPage = () => {
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
              Remember your password?
            </Text>
            <Button className="bg-indigo_A200 cursor-pointer font-bold sm:mt-[15px] md:mt-[20px] mt-[30px] md:py-[14px] sm:py-[15px] py-[21px] rounded-radius29 text-[14px] text-center text-white_A700 w-[100%]">
              Lognin
            </Button>
          </Column>
        </Column>
        <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[655px] sm:pl-[15px] sm:pr-[15px] right-[0] w-[100%]">
          <div className="bg-white_A700_7e h-[128px] sm:h-[69px] md:h-[89px] sm:my-[238px] md:my-[308px] my-[448px] rounded-radius2 w-[1%]"></div>
          <Column className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[61px] p-[90px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[98%]">
            <Column className="flex flex-col justify-start sm:mb-[249px] md:mb-[322px] mb-[468px] md:ml-[24px] ml-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
              <Img
                src="images/img_standardcollec.svg"
                className="sm:h-[22px] md:h-[29px] h-[41px] max-w-[100%] sm:w-[21px] md:w-[28px] w-[41px]"
                alt="StandardCollec"
              />
              <Column className="flex flex-col justify-start sm:mt-[34px] md:mt-[44px] mt-[65px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  Password Recovery
                </Text>
                <Text
                  className="font-medium mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_500 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Enter your email to recover your password
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[33px] md:mt-[43px] mt-[63px] w-[100%]">
                <Text
                  className="font-bold text-gray_900 tracking-ls1 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Email
                </Text>
                <Input
                  className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                  wrapClassName="border border-gray_500_6c border-solid flex md:mt-[9px] md:pb-[9px] md:pt-[12px] md:px-[10px] mt-[14px] pb-[14px] pt-[18px] px-[15px] rounded-radius8 sm:mt-[7px] sm:pb-[7px] sm:pt-[9px] sm:px-[7px] w-[100%]"
                  type="email"
                  name="email"
                  placeholder="anne.carry@mail.com"
                  suffix={
                    <Img
                      src="images/img_icon_checkcircle.svg"
                      className="ml-[35px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                      alt="Icon/Check-Circle"
                    />
                  }
                ></Input>
              </Column>
              <Button className="bg-indigo_A200 cursor-pointer font-bold sm:mt-[10px] md:mt-[13px] mt-[20px] md:py-[15px] sm:py-[15px] py-[22px] rounded-radius29 text-[14px] text-center text-white_A700 w-[100%]">
                Send Email
              </Button>
            </Column>
          </Column>
        </Row>
      </Stack>
    </>
  );
};

export default PasswordRecoveryPage;
