/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import MenuRecipes from "./MenuRecipesComponent";

export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};

storiesOf("MenuRecipes", module)
  .add("default", () => <MenuRecipes {...myProps} {...actions} />)
  .add("pinned", () => <MenuRecipes {...myProps} pinned={true} {...actions} />)
  .add("archived", () => (
    <MenuRecipes {...myProps} archived={true} {...actions} />
  ));
