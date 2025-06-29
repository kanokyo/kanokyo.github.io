import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

const CursorTracker = () => {
  return (
    <div>
      <Switch id="CursorTracking" />
    </div>
  );
};

export default CursorTracker;
