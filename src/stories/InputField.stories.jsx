import InputField from '../components/InputField';

export default {
  title: 'Components/InputField',
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const Text = Template.bind({});

Text.args = {
  value: '',
  label: 'Input Text',
  type: 'text',
  className: 'form-control',
  placeholder: 'placeholder',
  validators: [],
  onChange: () => {},
};