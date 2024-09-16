"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { FormAddCar } from "../FormAddCar";

const ButtonAddCar = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => setOpenDialog(true)}
        >
          <DialogTitle className="text-sm">Add new car</DialogTitle>
          <PlusCircle className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogDescription asChild>
          <FormAddCar setOpenDialog={setOpenDialog} />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonAddCar;
