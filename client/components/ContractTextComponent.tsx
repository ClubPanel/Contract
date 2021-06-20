import {Box} from "@chakra-ui/react";
import React from "react";
import ReactMarkdown from "react-markdown";

import "../../styles/ContractTextComponent.module.scss";

const ContractTextComponent = ({text}: {text: string}) : JSX.Element => {
  return (
    <Box
      textAlign="left"
      mx="20%"
      mt="50px"
      mb="100px"
      overflowY="scroll"
      id="contract-container"
      height="100%"
      pl="5px"
      pb="5px"
      borderStyle="solid"
      borderWidth="3px"
      borderColor="#1c1a1a"
    >
      <ReactMarkdown
        children={text}
      />
    </Box>
  );
};

export default ContractTextComponent;