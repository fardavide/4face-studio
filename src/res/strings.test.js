import expect from "expect";
import string, { strings } from "./strings";
import {
  StringNotDefinedError,
  TranslationNotDefinedError
} from "../errors/errors";

it("get string with explicit lang", () => {
  expect(string("test", "it")).toStrictEqual("italian");
  expect(string("test", "en")).toStrictEqual("english");
});

it("get string with implicit lang", () => {
  expect(string("test")).toStrictEqual("english");
});

it("get string from nested objects", () => {
  expect(string("test.nested")).toStrictEqual("nested en");
});

it("get string thrown right error if string is not defined", () => {
  expect(() => string("test.notFound")).toThrow(
    StringNotDefinedError("test.notFound")
  );
});

it("get string thrown right error if translation is not defined", () => {
  expect(() => string("test.noItTranslation", "it")).toThrow(
    TranslationNotDefinedError("test.noItTranslation", "it")
  );
});

it("get string by object field with implicit lang", () => {
  expect(string(strings.test)).toStrictEqual("english");
});

it("get string by object field thrown right error if string is not defined", () => {
  expect(() => string(strings.test.notFound)).toThrow(
    StringNotDefinedError(strings.test.notFound)
  );
});
