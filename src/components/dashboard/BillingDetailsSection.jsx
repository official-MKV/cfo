// components/BillingDetailsSection.jsx
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const PaymentStatus = ({ status }) => {
  if (status === "Paid") {
    return (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
        Paid
      </Badge>
    );
  } else {
    return (
      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
        Pending
      </Badge>
    );
  }
};

const BillingItem = ({ milestone }) => {
  const { title, payment } = milestone;

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-start gap-3">
        <Checkbox
          id={`billing-${milestone.id}`}
          checked={payment.status === "Paid"}
        />
        <label
          htmlFor={`billing-${milestone.id}`}
          className="text-sm font-medium cursor-pointer"
        >
          {title}
        </label>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm">${payment.amount}</span>
        <PaymentStatus status={payment.status} />
      </div>
    </div>
  );
};

const BillingDetailsSection = ({ milestones }) => {
  return (
    <div className="border border-primary/40 rounded-lg p-5">
      <h3 className="text-lg font-semibold mb-4 text-primary">
        Billing Details
      </h3>
      <div className="space-y-1">
        {milestones.map((milestone) => (
          <BillingItem key={milestone.id} milestone={milestone} />
        ))}
      </div>
    </div>
  );
};

export default BillingDetailsSection;
