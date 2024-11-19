import {
  HTMLAttributes,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
} from "react";

type SelectInputProps = {
  elementTitle: HTMLAttributes<HTMLSelectElement>["title"];
  elementValue: HTMLAttributes<HTMLSelectElement>["defaultValue"];
  identifier: HTMLAttributes<HTMLSelectElement>["id"];
  labelText: LabelHTMLAttributes<HTMLLabelElement>["slot"];
  onValueChange: HTMLAttributes<HTMLSelectElement>["onChange"];
  primaryOptionValue: OptionHTMLAttributes<HTMLOptionElement>["value"];
  primaryOptionLabel: OptionHTMLAttributes<HTMLOptionElement>["slot"];
  secondaryOptionValue: OptionHTMLAttributes<HTMLOptionElement>["value"];
  secondaryOptionLabel: OptionHTMLAttributes<HTMLOptionElement>["slot"];
  styling?: HTMLAttributes<HTMLSelectElement>["className"];
};

const styles = {
  container: "mb-0 w-full",
  label: "block font-semibold mb-1",
  select: "w-full border rounded-md resize-none outline-none cursor-pointer",
};

const SelectInput = ({
  elementTitle,
  elementValue,
  identifier,
  labelText,
  onValueChange,
  primaryOptionLabel,
  primaryOptionValue,
  secondaryOptionLabel,
  secondaryOptionValue,
  styling,
}: SelectInputProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={identifier}>
        {labelText}
      </label>
      <select
        id={identifier}
        title={elementTitle}
        value={elementValue}
        onChange={onValueChange}
        className={`${styles.select} ${styling} bg-gray-900 border-gray-600 text-gray-300`}
      >
        <option value={primaryOptionValue}>{primaryOptionLabel}</option>
        <option value={secondaryOptionValue}>{secondaryOptionLabel}</option>
      </select>
    </div>
  );
};

export default SelectInput;
