import React, { useState } from "react";
import { Form, FormField } from "grommet";
import PrimaryButton from "../widget/PrimaryButton";

import email from "../../res/images/email.svg";
import string from "../../res/strings";

// Qua siamo in /src/components/section/ContactSection.js, ma presumo che in prod saremo in /public/index.js, corretto?
const ContactSection = props => {
  const [formState, setFormState] = useState(null);

  const submitButtonStyle = () => {
    if (!formState) return { color: "blue", label: "submit" };
    if (formState === "pending") return { color: "grey", label: "sending" };
    if (formState === "completed") return { color: "green", label: "sent" };
    if (formState === "error") return { color: "grey", label: "error" };
  };

  const SubmitButton = () => {
    const style = submitButtonStyle();
    return <PrimaryButton color={style.color} label={style.label} />;
  };

  /** TODO: come ottenere name, mail, phoneNumber e message? Presumo siamo passati dal Form.action, ma come passarli al php?
   * @param phoneNumber TODO: è opzionale, bisogna gestire ciò in qualche modo prima di mandarlo al php?
   */
  const sendEmail = ({ name, email, phoneNumber, message }) => {
    fetch(/* TODO: presumo qua dobbiamo chiamare il php, localizzato in /public/mail/contact_me.php, come fare? 
    P.S. sfogliando la repo alla path indicata è possibile visualizzare il file */)
      .then(response =>
        setFormState(/* TODO: qua dobbiamo parsare la risposta: presumo non sia un grosso problema, ma come testo lo
        script in locale, calcolando che ora sto usando `npm start` e non conosco altre soluzioni */)
      )
      .catch(error => setFormState(/* TODO: handle error, not a big deal */));
  };

  /* Schemetizzato eliminando i parametri non necessari al nostro scopo */
  return (
    <Form action={sendEmail}>
      <FormField name="name" required={true} validate={validateName} />
      <FormField name="email" required={true} validate={validateEmail} />
      <FormField name="phone" />
      <FormField name="message" required={true} validate={validateMessage} />
      <SubmitButton />
    </Form>
  );
};

/* FINE DEL SAMPLE */

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
