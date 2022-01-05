import { PremadeMaskType } from '../types/components/Input';

const maskCurrency: PremadeMaskType = {
  type: 'money',
  options: {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: '$ ',
    suffixUnit: '',
  },
};

const noPrefixCurrency = {
  ...maskCurrency,
  options: {
    unit: '',
  },
};

const maskDNI: PremadeMaskType = {
  type: 'money',
  options: {
    precision: 0,
    separator: '',
    delimiter: '.',
    unit: '',
    suffixUnit: '',
  },
  maxLength: 10,
};

const maskDNITramite: PremadeMaskType = {
  type: 'only-numbers',
  options: {},
  maxLength: 20,
};

const maskInteger: PremadeMaskType = {
  type: 'money',
  options: {
    precision: 0,
    separator: '',
    delimiter: '.',
    unit: '',
    suffixUnit: '',
  },
};

const maskFloat: PremadeMaskType = {
  type: 'money',
  options: {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: '',
    suffixUnit: '',
  },
};

const maskTINNumber: PremadeMaskType = {
  type: 'money',
  options: {
    precision: 0,
    separator: '',
    delimiter: '',
    unit: '',
    suffixUnit: '',
  },
  maxLength: 9,
};

const InputMasks = {
  date: {
    DD_MM_YYYY: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    MM_YYYY: [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  },
  number: {
    CURRENCY: maskCurrency,
    CURRENCY_WITHOUT_PREFIX: noPrefixCurrency,
    DNI: maskDNI,
    DNI_TRAMITE: maskDNITramite,
    FLOAT: maskFloat,
    INTERGER: maskInteger,
    TIN: maskTINNumber,
  },
};

export default InputMasks;
