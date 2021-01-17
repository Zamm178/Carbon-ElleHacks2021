/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Onemeal from "./OnemealComponent";

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

storiesOf("Onemeal", module)
  .add("default", () => <Onemeal {...myProps} {...actions} />)
  .add("pinned", () => <Onemeal {...myProps} pinned={true} {...actions} />)
  .add("archived", () => <Onemeal {...myProps} archived={true} {...actions} />);
