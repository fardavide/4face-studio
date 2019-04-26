/**
 * A class defining a set of colours.
 *
 * @param primary first main color color
 * @param secondary second main color color
 * @param tertiary third main color color
 * @param background color for the background
 * @param onBackground color elements drawn on background
 * @param surface color of surfaces
 * @param onSurface color of elements drawn on surface
 *
 *
 * @author Davide Giuseppe Farella
 */
class Palette {
  constructor( primary, secondary, tertiary, background, onBackground, surface, onSurface ) {
    this.primary = primary;
    this.secondary = secondary;
    this.tertiary = tertiary;
    this.background = background;
    this.onBackground = onBackground;
    this.surface = surface;
    this.onSurface = onSurface
  }
}

/**
 * A set of named palettes
 * @type {Object} of {Palette}s
 */
const palettes = {
  vividLight: new Palette(
    '#00A3ED',
    '#3BC08E',
    '#7BFAC4',
    '#FDFDFD',
    '#444444',
    '#FFFFFF',
    '#666666'
  ),
  vividDark: new Palette(
    '#00A3ED',
    '#3BC08E',
    '#7BFAC4',
    '#272727',
    '#EEEEEE',
    '#444444',
    '#FDFDFD'
  )
};

/**
 * Colors for our App.
 * @type {Palette}
 *
 * @author Davide Giuseppe Farella
 */
export const color = palettes.vividLight;