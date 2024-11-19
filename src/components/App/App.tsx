"use client";

// Imports: Internal Dependencies
import React, { useState } from "react";

// Imports: Utilities
import { binaryToString, stringToBinary } from "@/utils";

// Imports: Types
import { ConversionType } from "@/types";

// Imports: Assets
import { CheckIcon, CopyIcon } from "@/assets";

// Imports: Constants
import {
  buttonTextContent,
  headerTextContent,
  labelTextContent,
  placeholderTextContent,
  selectTextContent,
} from "@/constants";

// Imports: Hooks
import { useMediaQuery } from "@/hooks";

// Imports: Components
import Header from "../Header/Header";
import TextareaInput from "../TextareaInput/TextareaInput";
import SelectInput from "../SelectInput/SelectInput";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";

// Destructuring
const { convert, copy } = buttonTextContent;
const { inputLabel, outputLabel } = labelTextContent;
const { inputPlaceholder, outputPlaceholder } = placeholderTextContent;
const { options, selectHeader } = selectTextContent;

// Styles
const styles = {
  button: {
    text: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-[7px] rounded-md max-lg:w-full",
    icon: "bg-transparent hover:bg-sky-200 absolute bottom-4 right-2 border border-blue-600 rounded-md p-1",
    copied: "border-blue-400",
  },
};

const App = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [conversionType, setConversionType] =
    useState<ConversionType>("stringToBinary");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const belowMediumScreens = useMediaQuery("(max-width: 768px)");

  const copyButtonStyles = belowMediumScreens
    ? styles.button.text
    : styles.button.icon;

  const copyButtonStylesCopiedState = isCopied ? styles.button.copied : "";

  const outputCopied =
    isCopied === true && belowMediumScreens ? (
      copy.caption.copyTrue
    ) : (
      <CheckIcon />
    );
  const outputNotCopied =
    isCopied === false && belowMediumScreens ? (
      copy.caption.copyFalse
    ) : (
      <CopyIcon />
    );

  const copyButtonCaption = isCopied ? outputCopied : outputNotCopied;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleConversionTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setConversionType(e.target.value as ConversionType);
  };

  const handleConvert = () => {
    if (conversionType === "stringToBinary") {
      setOutput(stringToBinary(input));
    } else {
      setOutput(binaryToString(input));
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(output)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <Header>{headerTextContent}</Header>
      <main className="py-4 px-8">
        <section id="inputSection" className="">
          <TextareaInput
            identifier="input"
            labelText={inputLabel}
            elementValue={input}
            isReadOnly={false}
            numberOfRows={4}
            onValueChange={handleInputChange}
            placeholderText={inputPlaceholder}
            maxCharLength={280}
            styling="p-2"
          />
          <div className="flex max-lg:flex-col max-lg:gap-y-2 items-end justify-start gap-x-4 mb-4">
            <SelectInput
              identifier="selectConversionType"
              labelText={selectHeader}
              elementTitle="Select"
              elementValue={conversionType}
              onValueChange={handleConversionTypeChange}
              primaryOptionLabel={options.primary.caption}
              primaryOptionValue={options.primary.value}
              secondaryOptionLabel={options.secondary.caption}
              secondaryOptionValue={options.secondary.value}
              styling="p-2"
            />
            <Button
              identifier={convert.id}
              onClick={handleConvert}
              styling={styles.button.text}
              testId={convert.testid}
            >
              {convert.caption}
            </Button>
          </div>
        </section>
        <section className="outputSection relative">
          <TextareaInput
            identifier="output"
            labelText={outputLabel}
            elementValue={output}
            isReadOnly={true}
            numberOfRows={6}
            placeholderText={outputPlaceholder}
            styling="p-2"
          />
          <Button
            identifier={copy.id}
            onClick={handleCopy}
            disabled={isCopied}
            styling={`${copyButtonStyles} ${copyButtonStylesCopiedState}`}
            testId={copy.testid}
          >
            {copyButtonCaption}
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
