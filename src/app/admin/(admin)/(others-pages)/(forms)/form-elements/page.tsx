
import { Metadata } from "next";
import React from "react";
import PageBreadcrumb from "@/app/components/common/PageBreadCrumb";
import DefaultInputs from "@/app/components/form/form-elements/DefaultInputs";
import SelectInputs from "@/app/components/form/form-elements/SelectInputs";
import TextAreaInput from "@/app/components/form/form-elements/TextAreaInput";
import InputStates from "@/app/components/form/form-elements/InputStates";
import InputGroup from "@/app/components/form/form-elements/InputGroup";
import FileInputExample from "@/app/components/form/form-elements/FileInputExample";
import CheckboxComponents from "@/app/components/form/form-elements/CheckboxComponents";
import RadioButtons from "@/app/components/form/form-elements/RadioButtons";
import ToggleSwitch from "@/app/components/form/form-elements/ToggleSwitch";
import DropzoneComponent from "@/app/components/form/form-elements/DropZone";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function FormElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="From Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
          <SelectInputs />
          <TextAreaInput />
          <InputStates />
        </div>
        <div className="space-y-6">
          <InputGroup />
          <FileInputExample />
          <CheckboxComponents />
          <RadioButtons />
          <ToggleSwitch />
          <DropzoneComponent />
        </div>
      </div>
    </div>
  );
}
