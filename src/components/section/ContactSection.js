import React from "react";
import { Box, Form, FormField, ResponsiveContext, TextArea } from "grommet";

import PrimaryButton from "../widget/PrimaryButton";
import { SectionContainer } from "./SectionContainer";
import { SectionHeader } from "./SectionHeader";

import { Send } from "grommet-icons";

import email from "../../res/images/email.svg";
import string from "../../res/strings";

/**
 * A {React.Component} for Contact Section
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const ContactSection = props => {
  /**
   * @return {string} horizontal pad of the Form
   * @param size {string} screen size
   */
  const horizontalPad = size => {
    if (size === "large") return "25%";
    else if (size === "medium") return "20%";
    else if (size === "small") return "10%";
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <SectionContainer>
          <SectionHeader image={email} title={string("contact.title")} />
          <Box pad={{ horizontal: horizontalPad(size) }}>
            <Form onSubmit='contact_me.php'>
              <FormField
                name="name"
                label={string("contact.form.name")}
                placeholder={string("contact.form.name.hint")}
                required={true}
                validate={validateName}
              />
              <FormField
                name="email"
                label={string("contact.form.email")}
                placeholder={string("contact.form.email.hint")}
                required={true}
                validate={validateEmail}
              />
              <FormField
                name="phone"
                label={string("contact.form.phone")}
                placeholder={string("contact.form.phone.hint")}
              />
              <FormField
                name="message"
                label={string("contact.form.message")}
                placeholder={string("contact.form.message.hint")}
                required={true}
                validate={validateMessage}
                as={TextArea}
              />
              <Box fill="horizontal">
                <PrimaryButton
                  type="submit"
                  label={string("action.send")}
                  icon={<Send />}
                  margin="medium"
                />
              </Box>
            </Form>
          </Box>
        </SectionContainer>
      )}
    </ResponsiveContext.Consumer>
  );
};

// noinspection JSUnusedLocalSymbols // form not used
/**
 * Validate the name inserted
 * @return {string} describing the error, if any
 * @param nameForm {string} the name inserted
 * @param form {*} containing all values of the form
 */
export const validateName = (nameForm, form) => {
  // Return empty error if nameForm is not defined or empty
  if (!nameForm) return string("contact.form.name.error.empty");

  // Split nameForm by space for get the inserted names singularly
  const names = nameForm.split(" ").filter(name => name);

  // Return full name error if less than 2 names has been inserted
  if (names.length < 2) return string("contact.form.name.error.fullName");

  // Return short error if one of the names inserted is shorter that 3 chars
  let shortError = null;
  names.forEach(name => {
    if (name.length < 3) shortError = string("contact.form.name.error.short");
  });
  return shortError;
};

// noinspection JSUnusedLocalSymbols // form not used
/**
 * Validate the email inserted
 * @return {string} describing the error, if any
 * @param emailForm {string} the email inserted
 * @param form {*} containing all values of the form
 */
export const validateEmail = (emailForm, form) => {
  // Return empty error if emailForm is not defined or empty
  if (!emailForm) return string("contact.form.email.error.empty");

  // Return bad format error if emailForm cannot be validated
  const regex = new RegExp(string("contact.form.email.regex"));
  if (!emailForm.match(regex))
    return string("contact.form.email.error.badFormat");
};

// noinspection JSUnusedLocalSymbols // form not used
/**
 * Validate the message inserted
 * @return {string} describing the error, if any
 * @param messageForm {string} the message inserted
 * @param form {*} containing all values of the form
 */
export const validateMessage = (messageForm, form) => {
  // Return empty error if messageForm is not defined or empty
  if (!messageForm) return string("contact.form.message.error.empty");

  // Return short error if messageForm is too short
  const charsLeft = 50 - messageForm.length;
  if (charsLeft === 1)
    return string("contact.form.message.error.short.singular");
  else if (charsLeft > 1)
    return string("contact.form.message.error.short.plural").replace(
      "%d",
      charsLeft
    );
};
