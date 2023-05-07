import { Container, Grid } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Us"
        subtitle="Connecting Businesses through Professional Business Cards"
      />
      <Grid container spacing={1}>
        <Grid
          item
          xs={10}
          md={8}
          alignSelf="center"
          sx={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
          }}
        >
          At our website, we believe that a great first impression is essential
          to building a successful business relationship. That's why we've
          created a platform where businesses of all sizes can create and
          customize their own professional business cards, and connect with
          other businesses in their industry. Our user-friendly platform allows
          you to easily create and edit your business card, with a range of
          customization options to make it uniquely yours. You can choose from a
          variety of designs and templates, and add your own logo and branding
          elements to make your card stand out. In addition to creating your own
          cards, our website also features a directory of popular business
          cards, where you can browse and search for cards that catch your eye.
          You can also view cards from other businesses in your industry, and
          connect with them directly through our platform. We're committed to
          providing the highest quality products and services to our customers,
          and we're constantly striving to improve and innovate our platform.
          Whether you're a small business owner or a large corporation, we're
          here to help you make the best possible first impression with your
          professional business card.
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
