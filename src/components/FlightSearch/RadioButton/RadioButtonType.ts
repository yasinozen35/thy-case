export type RadioButtonType = {
  name: string;
  id: string;
  value: string;
  radioText: string;
  onClick: (type: string) => void;
  checked: boolean;
};
