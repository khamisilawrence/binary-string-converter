import { LabelHTMLAttributes, TextareaHTMLAttributes } from "react";

type TextareaInputProps = {
  elementValue: TextareaHTMLAttributes<HTMLTextAreaElement>["value"];
  identifier: TextareaHTMLAttributes<HTMLTextAreaElement>["id"];
  isReadOnly: TextareaHTMLAttributes<HTMLTextAreaElement>["readOnly"];
  labelText: LabelHTMLAttributes<HTMLLabelElement>["slot"];
  maxCharLength?: TextareaHTMLAttributes<HTMLTextAreaElement>["maxLength"];
  numberOfRows: TextareaHTMLAttributes<HTMLTextAreaElement>["rows"];
  onValueChange?: TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"];
  placeholderText: TextareaHTMLAttributes<HTMLTextAreaElement>["placeholder"];
  styling?: TextareaHTMLAttributes<HTMLTextAreaElement>["className"];
};

const styles = {
  container: "mb-1",
  label: "block font-semibold mb-2",
  textarea: "w-full border rounded-md text-slate-950 resize-none outline-none",
};

const TextareaInput = ({
  elementValue,
  identifier,
  isReadOnly,
  labelText,
  maxCharLength,
  numberOfRows,
  onValueChange,
  placeholderText,
  styling,
}: TextareaInputProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={identifier}>
        {labelText}
      </label>
      <textarea
        id={identifier}
        value={elementValue}
        readOnly={isReadOnly}
        onChange={onValueChange}
        maxLength={maxCharLength}
        rows={numberOfRows}
        placeholder={placeholderText}
        className={`${styles.textarea} ${styling}`}
      />
    </div>
  );
};

export default TextareaInput;
