import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardPage from "../cards/pages/CardPage";
import FAV_CARDS from "../cards/pages/FAV_CARDS";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";

import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import ROUTES from "./routesModel";
import EditCardPage from "../cards/pages/EditCardPage";
import AddNewCard from "../cards/pages/AddNewCard";
import ProfilePage from "../cards/pages/ProfilePage";
import HomePage from "../cards/pages/HomePage";
import MyCards from "../cards/pages/MyCards";
export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardPage />} />
      <Route path={ROUTES.CARDS} element={<CardPage />} />
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path="favcards" element={<FAV_CARDS />} />
      <Route path="mycards" element={<MyCards />} />
      <Route path="addNewCard" element={<AddNewCard />} />
      <Route path="profilePage" element={<ProfilePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
