import { Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import CardForm from "../components/CardForm";
import CardsComponent from "../components/CardsComponent";
import Page from "../components/layouts/Page";

const Home: NextPage = () => {
  return (
    <>
      <Page title="Frontend Mentor Challenge">
        <Grid templateColumns="60vw 1fr">
          <GridItem>
            <CardsComponent />
          </GridItem>
          <GridItem
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <CardForm />
          </GridItem>
        </Grid>
      </Page>
    </>
  );
};

export default Home;
