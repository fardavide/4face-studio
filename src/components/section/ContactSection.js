/* eslint-disable default-case */
import React from "react";
import { useCheckbox, useTextListener, useTimeout } from "../../hooks";
import {
  Box,
  CheckBox,
  Form,
  FormField,
  ResponsiveContext,
  TextArea
} from "grommet";

import { CaptionText } from "../typography";
import PrimaryButton from "../widget/PrimaryButton";
import { SectionBody } from "./SectionBody";
import { SectionHeader } from "./SectionHeader";

import { Checkmark, Close, Send } from "grommet-icons";

import email from "../../res/images/email.svg";
import color from "../../res/colors";
import string, { strings } from "../../res/strings";

/**
 * A {React.Component} for Contact Section
 * @param props
 *
 * @author Davide Giuseppe Farella
 */
export const ContactSection = props => {
  /** A state for the form */
  const [formState, setFormState] = useTimeout(
    FormState.idle && FormState.pending,
    3000
  );

  /**
   * Whether the Markdown preview should be visible
   * @type boolean
   */
  const [
    isMarkdownPreviewVisible,
    toggleMarkdownPreviewVisibility
  ] = useCheckbox(false);

  /**
   * The text inside the message Field
   * @type string
   */
  const [messageText, updateMessageText] = useTextListener("");

  /**
   * @return {string} horizontal pad of the Form
   * @param size {string} screen size
   */
  const horizontalPad = size => {
    switch (size) {
      case "large":
        return "25%";
      case "medium":
        return "20%";
      case "small":
        return "10%";
    }
  };

  /**
   * The style of the {SubmitButton} regarding {formState}
   * @return {{icon: *, label: string, colors: {border, background, text: string}}|{icon: *, label: string, colors: {border, background, text}}}
   */
  const submitButtonStyle = () => {
    switch (formState) {
      case FormState.idle:
        return {
          colors: {
            background: color.surface,
            border: color.primary,
            text: color.onSurface
          },
          icon: <Send />,
          label: string(strings.action.send)
        };

      case FormState.pending:
        return {
          colors: {
            background: color.warning,
            border: color.background,
            text: "white"
          },
          icon: <Box />,
          label: string(strings.message.sending)
        };

      case FormState.sent:
        return {
          colors: {
            background: color.success,
            border: color.background,
            text: "white"
          },
          icon: <Checkmark color="white" />,
          label: string(strings.message.completed)
        };

      case FormState.error:
        return {
          colors: {
            background: color.error,
            border: color.background,
            text: "white"
          },
          icon: <Close color="white" />,
          label: string(strings.message.error)
        };
    }
  };

  /**
   * @return {React.Component} for the Submit button.
   * @constructor
   */
  const SubmitButton = () => {
    const style = submitButtonStyle();
    return (
      <Box fill="horizontal">
        <PrimaryButton
          type="submit"
          style={{
            background: style.colors.background,
            color: style.colors.text
          }}
          color={style.colors.border}
          label={style.label}
          icon={style.icon}
          margin="medium"
        />
      </Box>
    );
  };

  /**
   * Send the email from the Form
   * @param data {*} Form data
   */
  const sendEmail = data => {
    //const path = "/public/mail/contact_me.php";
    const path = "/public/mail/contact_me.php"; // TODO change path in production
    const config = {
      method: "POST",
      body: JSON.stringify(data.value)
    };
    fetch(path, config)
      .then(response => response.json())
      .then(json => console.log(json)) // TODO
      .catch(error => {
        console.log(error);
        setFormState(FormState.error);
      });
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box>
          <SectionHeader image={email} title={string(strings.contact.title)} />
          <SectionBody>
            <Box pad={{ horizontal: horizontalPad(size) }}>
              <Form onSubmit={sendEmail}>
                <FormField
                  name="name"
                  label={string(strings.contact.form.name)}
                  placeholder={string(strings.contact.form.name.hint)}
                  required={true}
                  validate={validateName}
                />
                <FormField
                  name="email"
                  label={string(strings.contact.form.email)}
                  placeholder={string(strings.contact.form.email.hint)}
                  required={true}
                  validate={validateEmail}
                />
                <FormField
                  name="phone"
                  label={string(strings.contact.form.phone)}
                  placeholder={string(strings.contact.form.phone.hint)}
                />
                <FormField
                  name="message"
                  label={string(strings.contact.form.message)}
                  placeholder={string(strings.contact.form.message.hint)}
                  required={true}
                  validate={validateMessage}
                  onChange={updateMessageText}
                  as={TextArea}
                />
                <Box margin="small">
                  <CheckBox
                    checked={isMarkdownPreviewVisible}
                    label={string(strings.action.useMarkdown)}
                    onChange={toggleMarkdownPreviewVisibility}
                  />
                </Box>
                {isMarkdownPreviewVisible && (
                  <Box background={color.surface} pad="small">
                    <CaptionText alignSelf="start" textAlign="start">
                      {messageText}
                    </CaptionText>
                  </Box>
                )}
                <SubmitButton />
              </Form>
            </Box>
          </SectionBody>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

/**
 * An enum from the state of the form, across the email sending
 * @type { { idle: number, pending: number, error: number, sent: number } }
 */
const FormState = Object.freeze({ idle: 0, pending: 1, sent: 2, error: 3 });

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
