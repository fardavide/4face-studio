/**
 * An {Error} that will the thrown when a {string} is not defined in {strings.js}
 * @param name name of the requested {string}
 * @return {Error}
 * @constructor
 */
export const StringNotDefinedError = (name) =>
    new Error(`String '${name}' is not defined in 'strings.js'`);

/**
 * An {Error} that will the thrown when a translation for {string} is not defined in {strings.js}
 * @param name name of the requested {string}
 * @param lang requested translation
 * @return {Error}
 * @constructor
 */
export const TranslationNotDefinedError = (name, lang) =>
    new Error(`${lang} translation for '${name}' is not defined in 'strings.js'` );