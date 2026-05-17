/**
 * RTL/LTR Utility Functions
 * Helper functions for handling right-to-left and left-to-right layouts
 */

import { useTranslation } from 'react-i18next';

/**
 * Hook to check if current language is RTL
 * @returns {boolean} true if current language is RTL
 */
export const useIsRTL = () => {
  const { i18n } = useTranslation();
  return i18n.language === 'ar';
};

/**
 * Get direction based on language code
 * @param {string} language - Language code (e.g., 'ar', 'en')
 * @returns {string} 'rtl' or 'ltr'
 */
export const getDirection = (language) => {
  return language === 'ar' ? 'rtl' : 'ltr';
};

/**
 * Get style direction property based on RTL state
 * @param {string} property - CSS property name (e.g., 'marginLeft', 'paddingRight')
 * @param {string} value - CSS value
 * @param {boolean} isRTL - Whether current direction is RTL
 * @returns {object} Style object with appropriate property
 */
export const getDirectionalStyle = (property, value, isRTL) => {
  // Map property names to their directional counterparts
  const directionMap = {
    marginLeft: isRTL ? 'marginRight' : 'marginLeft',
    marginRight: isRTL ? 'marginLeft' : 'marginRight',
    paddingLeft: isRTL ? 'paddingRight' : 'paddingLeft',
    paddingRight: isRTL ? 'paddingLeft' : 'paddingRight',
    left: isRTL ? 'right' : 'left',
    right: isRTL ? 'left' : 'right',
    textAlign: isRTL ? 'right' : 'left',
    float: isRTL ? (value === 'left' ? 'right' : 'left') : value,
    borderLeft: isRTL ? 'borderRight' : 'borderLeft',
    borderRight: isRTL ? 'borderLeft' : 'borderRight',
    borderRadius: value, // For border-radius, just return the value
  };

  const mappedProperty = directionMap[property] || property;
  return { [mappedProperty]: value };
};

/**
 * Get spacing with RTL consideration
 * @param {number|string} top
 * @param {number|string} right
 * @param {number|string} bottom
 * @param {number|string} left
 * @param {boolean} isRTL - Whether current direction is RTL
 * @returns {object} Style object with appropriate spacing
 */
export const getRTLSpacing = (top, right, bottom, left, isRTL) => {
  if (isRTL) {
    return {
      marginTop: top,
      marginRight: left,
      marginBottom: bottom,
      marginLeft: right,
    };
  }
  return {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
  };
};

/**
 * Get flexbox direction based on RTL
 * @param {boolean} isRTL - Whether current direction is RTL
 * @returns {string} 'row-reverse' for RTL, 'row' for LTR
 */
export const getFlexDirection = (isRTL) => {
  return isRTL ? 'row-reverse' : 'row';
};

/**
 * Get text alignment based on RTL
 * @param {boolean} isRTL - Whether current direction is RTL
 * @param {string} defaultAlign - Default alignment ('left', 'center', 'right')
 * @returns {string} Appropriate text alignment
 */
export const getTextAlign = (isRTL, defaultAlign = 'left') => {
  if (defaultAlign === 'left') {
    return isRTL ? 'right' : 'left';
  }
  if (defaultAlign === 'right') {
    return isRTL ? 'left' : 'right';
  }
  return defaultAlign; // 'center' or other values remain the same
};

/**
 * Get logical CSS properties based on RTL
 * @param {boolean} isRTL - Whether current direction is RTL
 * @returns {object} Object with logical property names
 */
export const getLogicalProperties = (isRTL) => {
  return {
    insetInlineStart: isRTL ? 'right' : 'left',
    insetInlineEnd: isRTL ? 'left' : 'right',
    marginInlineStart: isRTL ? 'marginRight' : 'marginLeft',
    marginInlineEnd: isRTL ? 'marginLeft' : 'marginRight',
    paddingInlineStart: isRTL ? 'paddingRight' : 'paddingLeft',
    paddingInlineEnd: isRTL ? 'paddingLeft' : 'paddingRight',
  };
};

export default {
  useIsRTL,
  getDirection,
  getDirectionalStyle,
  getRTLSpacing,
  getFlexDirection,
  getTextAlign,
  getLogicalProperties,
};
