import React, { MouseEventHandler } from "react";
import {
  FormControl,
  Input,
  FormLabel,
  Flex,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import { main as properties } from "../resources/main.properties";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addData } from "../store/formSlice";
import { Console } from "console";

interface valueProps {
  cardHolderName: string;
  cardNumber: string;
  expiryMM: string;
  expiryYY: string;
  cvv: string;
}

const FormSchema = Yup.object().shape({
  cardHolderName: Yup.string().required("Can't be blank"),
  cardNumber: Yup.string().required("Can't be blank"),
  expiryMM: Yup.string().required("Can't be blank"),
  expiryYY: Yup.string().required("Can't be blank"),
  cvv: Yup.string().required("Can't be blank"),
});

const CardForm = () => {
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, errors, values } = useFormik<valueProps>({
    initialValues: {
      cardHolderName: "",
      cardNumber: "",
      expiryMM: "",
      expiryYY: "",
      cvv: "",
    },
    onSubmit(values, formikHelpers) {
      console.log({ errors });
    },
    validationSchema: FormSchema,
    validate(values) {
      console.log({ errors });
      dispatch(
        addData({
          type: "form",
          data: values,
        })
      );
    },
  });

  const customHandleChange = (event: React.ChangeEvent<any>) => {
    console.log({ values });
    handleChange(event);
  };

  return (
    <form
      style={{
        width: "25vw",
      }}
      onSubmit={handleSubmit}
    >
      <FormControl mt="1rem">
        <FormLabel
          fontSize="0.8rem"
          letterSpacing="2px"
          color="hsl(278, 68%, 11%)"
          fontWeight="bold"
        >
          {properties.labels.cardHolder}
        </FormLabel>
        <Input
          name="cardHolderName"
          id="cardHolderName"
          _placeholder={{
            color: "hsl(270, 3%, 87%)",
          }}
          fontWeight="500"
          type="text"
          placeholder={properties.placeholders.cardHolder}
          onChange={customHandleChange}
          _focus={{
            outline: "none !important",
            boxShadow: "none !important",
            borderColor: "hsl(278, 94%, 30%)",
          }}
          borderColor={
            errors.cardHolderName ? "hsl(0, 100%, 66%)" : "hsl(270, 3%, 87%)"
          }
        />
        <Text
          as="span"
          fontWeight="500"
          fontSize="0.7rem"
          color="hsl(0, 100%, 66%)"
        >
          {errors.cardHolderName ? errors.cardHolderName : ""}
        </Text>
      </FormControl>
      <FormControl mt="1rem">
        <FormLabel
          fontSize="0.8rem"
          letterSpacing="2px"
          color="hsl(278, 68%, 11%)"
          fontWeight="bold"
        >
          {properties.labels.cardNumber}
        </FormLabel>
        <Input
          name="cardNumber"
          id="cardNumber"
          _placeholder={{
            color: "hsl(270, 3%, 87%)",
          }}
          fontWeight="500"
          type="text"
          placeholder={properties.placeholders.cardNumber}
          onChange={customHandleChange}
          _focus={{
            outline: "none !important",
            boxShadow: "none !important",
            borderColor: "hsl(278, 94%, 30%)",
          }}
          borderColor={
            errors.cardNumber ? "hsl(0, 100%, 66%)" : "hsl(270, 3%, 87%)"
          }
        />
        <Text
          as="span"
          fontWeight="500"
          fontSize="0.7rem"
          color="hsl(0, 100%, 66%)"
        >
          {errors.cardNumber ? errors.cardNumber : ""}
        </Text>
      </FormControl>
      <Flex mt="1rem">
        <Box>
          <FormControl>
            <FormLabel
              fontSize="0.8rem"
              letterSpacing="2px"
              color="hsl(278, 68%, 11%)"
              fontWeight="bold"
            >
              {properties.labels.expDate}
            </FormLabel>
            <Flex>
              <Input
                name="expiryMM"
                id="expiryMM"
                _placeholder={{
                  color: "hsl(270, 3%, 87%)",
                }}
                fontWeight="500"
                w="5rem"
                placeholder={properties.placeholders.mm}
                onChange={customHandleChange}
                _focus={{
                  outline: "none !important",
                  boxShadow: "none !important",
                  borderColor: "hsl(278, 94%, 30%)",
                }}
                borderColor={
                  errors.expiryMM ? "hsl(0, 100%, 66%)" : "hsl(270, 3%, 87%)"
                }
              />
              <Input
                name="expiryYY"
                id="expiryYY"
                _placeholder={{
                  color: "hsl(270, 3%, 87%)",
                }}
                fontWeight="500"
                ml="1rem"
                w="5rem"
                placeholder={properties.placeholders.yy}
                onChange={customHandleChange}
                _focus={{
                  outline: "none !important",
                  boxShadow: "none !important",
                  borderColor: "hsl(278, 94%, 30%)",
                }}
                borderColor={
                  errors.expiryYY ? "hsl(0, 100%, 66%)" : "hsl(270, 3%, 87%)"
                }
              />
            </Flex>
            <Text
              as="span"
              fontWeight="500"
              fontSize="0.7rem"
              color="hsl(0, 100%, 66%)"
            >
              {errors.cardNumber ? errors.cardNumber : ""}
            </Text>
          </FormControl>
        </Box>
        <Box ml="1rem">
          <FormControl>
            <FormLabel
              fontSize="0.8rem"
              letterSpacing="2px"
              color="hsl(278, 68%, 11%)"
              fontWeight="bold"
            >
              {properties.labels.cvc}
            </FormLabel>
            <Input
              name="cvv"
              id="cvv"
              _placeholder={{
                color: "hsl(270, 3%, 87%)",
              }}
              fontWeight="500"
              placeholder={properties.placeholders.cvc}
              onChange={customHandleChange}
              _focus={{
                outline: "none !important",
                boxShadow: "none !important",
                borderColor: "hsl(278, 94%, 30%)",
              }}
              borderColor={
                errors.cvv ? "hsl(0, 100%, 66%)" : "hsl(270, 3%, 87%)"
              }
            />
            <Text
              as="span"
              fontWeight="500"
              fontSize="0.7rem"
              color="hsl(0, 100%, 66%)"
            >
              {errors.cvv ? errors.cvv : ""}
            </Text>
          </FormControl>
        </Box>
      </Flex>
      <Button
        width="100%"
        color="#fff"
        bgColor="hsl(278, 68%, 11%)"
        _hover={{
          bgColor: "hsl(278, 94%, 30%)",
        }}
        mt="2rem"
        type="submit"
      >
        {properties.button.confirm}
      </Button>
    </form>
  );
};

export default CardForm;
