import {Box, Button, chakra, Grid, GridItem, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {GetConfig} from "../../../shared/config/configStore";
import {ContractConfig} from "../config/ContractConfig";
import ContractTextComponent from "./components/ContractTextComponent";

const ContractPage = ({config}) : JSX.Element => {
  const configs = GetConfig<ContractConfig>("contract.json", config);
  const text = GetConfig<string>("contract-text.txt", config);

  return (
    <Box
      textAlign="center"
      height="100%"
      flexDir="column"
      alignItems="center"
      display="flex"
    >
      <chakra.h2
        fontSize={{base: "2em"}}
        mt="10px"
      >
        {configs.contractSignHeader}
      </chakra.h2>
      <Text
        fontSize={{base: "1.25em"}}
        mx={{base: "50px", md: "none"}}
      >
        {configs.contractSignMessage}
      </Text>
      <ContractTextComponent
        text={text}
      />
      <chakra.form
        method="POST"
        action={configs.signConfirmURL}
      >
        <Button
          mb={{base: "40px", md: "20px"}}
          colorScheme="blue"
          size="md"
          py="5px"
          type="submit"
        >
          {configs.contractSignButtonText}
        </Button>
      </chakra.form>
    </Box>
  );
};

export default ContractPage;