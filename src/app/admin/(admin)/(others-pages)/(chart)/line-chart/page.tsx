
import { Metadata } from "next";
import React from "react";
import PageBreadcrumb from "@/app/components/common/PageBreadCrumb";
import ComponentCard from "@/app/components/common/ComponentCard";
import LineChartOne from "@/app/components/charts/line/LineChartOne";

export const metadata: Metadata = {
  title: "Next.js Line Chart | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Line Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
export default function LineChart() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Line Chart" />
      <div className="space-y-6">
        <ComponentCard title="Line Chart 1">
          <LineChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
