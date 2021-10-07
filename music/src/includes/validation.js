import {
  Form as VeeForm, Field as VeeFieeld, defineRule, ErrorMessage, configure,
} from 'vee-validate';
import {
  required, min, max, alpha_spaces as alphaSpaces, email, min_value as minValue,
  max_value as maxValue, confirmed, not_one_of as excluded,

} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('veeForm', VeeForm);
    app.component('veeField', VeeFieeld);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('email', email);
    defineRule('min_value', minValue);
    defineRule('max_value', maxValue);
    defineRule('password_mismatch', confirmed);
    defineRule('country_excluded', excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `the field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field}is too long.`,
          alphaSpaces: `The field ${ctx.field}may only contain alphabetical characters and spaces.`,
          email: `The field ${ctx.field}must be a vaild email.`,
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is too high.`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}`,
          country_excluded: `Due to restrictions, we do not accept users from this location ${ctx.field}.`,
          password_mismatch: 'The passwords dont match.',
          tos: 'You must accept the terms of service',
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
