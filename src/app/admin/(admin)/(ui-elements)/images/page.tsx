import { Metadata } from "next";
import React from "react";
import PageBreadcrumb from "@/app/components/common/PageBreadCrumb";
import ComponentCard from "@/app/components/common/ComponentCard";
import ResponsiveImage from "@/app/components/ui/images/ResponsiveImage";
import TwoColumnImageGrid from "@/app/components/ui/images/TwoColumnImageGrid";
import ThreeColumnImageGrid from "@/app/components/ui/images/ThreeColumnImageGrid";

export const metadata: Metadata = {
  title: "Next.js Images | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Images page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

export default function Images() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Images" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Responsive image">
          <ResponsiveImage />
        </ComponentCard>
        <ComponentCard title="Image in 2 Grid">
          <TwoColumnImageGrid />
        </ComponentCard>
        <ComponentCard title="Image in 3 Grid">
          <ThreeColumnImageGrid />
        </ComponentCard>
      </div>
    </div>
  );
}
