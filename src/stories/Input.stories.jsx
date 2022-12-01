import { Input } from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});

Text.args = {
  label: 'Input Text',
  type: 'text',
  name: 'input-text',
  id: 'input-text',
  placeholder: 'placeholder',
};