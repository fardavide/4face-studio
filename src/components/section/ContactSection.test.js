import expect from "expect";
import { validateName, validateEmail } from "./ContactSection";
import string from "../../res/strings";

const form = undefined;

it("validate with undefined name", () => {
  const name = undefined;
  expect(validateName(name, form)).toStrictEqual(
    string("contact.form.name.error.empty")
  );
});

it("validate with empty name", () => {
  const name = "";
  expect(validateName(name, form)).toStrictEqual(
    string("contact.form.name.error.empty")
  );
});

it("validate with single name", () => {
  const name = "muffy";
  expect(validateName(name, form)).toStrictEqual(
    string("contact.form.name.error.fullName")
  );
});

it("validate with short name", () => {
  const name = "Muffy Wa";
  expect(validateName(name, form)).toStrictEqual(
    string("contact.form.name.error.short")
  );
});

it("validate with correct name", () => {
  const name = "Muffy Baruffi";
  expect(validateName(name, form)).toBeFalsy();
});

it("validate with badFormat email", () => {
  const email1 = "fardavide@gmail.c";
  const email2 = "fardavide@.c";
  const email3 = "@gmail.c";
  const email4 = "fardavidegmail.com";
  const email5 = "fardavide@gmailcom";

  const expected = string("contact.form.email.error.badFormat");

  expect(validateEmail(email1, form)).toStrictEqual( expected );
  expect(validateEmail(email2, form)).toStrictEqual( expected );
  expect(validateEmail(email3, form)).toStrictEqual( expected );
  expect(validateEmail(email4, form)).toStrictEqual( expected );
  expect(validateEmail(email5, form)).toStrictEqual( expected );
});

it("validate with correct email", () => {
  const email = "fardavide@gmail.com";
  expect(validateEmail(email, form)).toBeFalsy();
});
