import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface DropdownReturn {
  name: string;
  value: string;
}

export interface DropdownProps {
  value?: string | null;
  options: { key: string; value: string }[];
  placeholder: string;
  onChange: (args1: DropdownReturn) => void;
  icon?: IconDefinition;
  name: string;
  setShowOptions: (value: boolean) => void;
}
