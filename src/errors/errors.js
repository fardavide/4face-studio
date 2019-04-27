/**
 * An {Error} that will the thrown when a {string} is not defined in {strings.js}
 * @param field {string/*} name or object of the requested {string}
 * @return {Error}
 * @constructor
 */
export const StringNotDefinedError = (field) =>
    new Error(`String '${field}' is not defined in 'strings.js'`);

/**
 * An {Error} that will the thrown when a translation for {string} is not defined in {strings.js}
 * @param field {string/*} name or object of the requested {string}
 * @param lang {string} requested translation
 * @return {Error}
 * @constructor
 */
export const TranslationNotDefinedError = (field, lang) =>
    new Error(`${lang} translation for '${field}' is not defined in 'strings.js'` );