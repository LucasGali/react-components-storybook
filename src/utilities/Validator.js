const regex = {
  email: new RegExp(
    '^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  ),
  password: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'),
  number: new RegExp('^[0-9]+$'),

};

export class Validators {
  static email(value, message) {
    if (!value) return false
    
    const result = regex.email.test(value)
      
    if (!result) return { error: true, message };
    
    return
  }

  static required(value, message) {
    if (!value || !value.toString().trom().length) return { error: true, message };

    return false;
  }

  static number(value, message) {
    const length = value ? value.toString().trim().length : 0;

    if (length < 0) return false
    
    const result = regex.number.test(value);

    if (!result) return { error: true, message };
    
  }
}

export const validateInput = (validators, value) => {
  if (validators && validators.length) {
    for (const [index, validator] of validators.entries()) {
      const error = validators[index].check(value, validators[index].message);
        if (error) return error;
    }
  }
  return false;
}