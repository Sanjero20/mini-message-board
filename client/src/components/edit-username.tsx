import { FormEvent, useEffect, useState } from "react";
import { UserCog, X } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useUsername from "@/stores/user";

function EditUsername() {
  const [tempName, setTempName] = useState("");
  const [open, setOpen] = useState(false);
  const { username, setUsername } = useUsername();

  useEffect(() => {
    setTempName(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const cancelNameChange = () => {};

  const saveNameChange = (e: FormEvent) => {
    e.preventDefault();
    setUsername(tempName);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <DialogTrigger asChild className="sm:absolute sm:right-0">
        <Button variant="outline" size="icon">
          <UserCog />
        </Button>
      </DialogTrigger>

      {/* Main */}
      <DialogContent className="sm:max-w-[425px]">
        {/* Close Icon */}
        <DialogClose
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          onClick={cancelNameChange}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <DialogHeader>
          <DialogTitle>Edit Username</DialogTitle>
        </DialogHeader>

        <form
          className="flex items-center"
          onSubmit={(e) => saveNameChange(e)}
          id="username"
        >
          <Input
            id="name"
            className=""
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            autoComplete="off"
            placeholder="Username"
          />
        </form>

        <DialogFooter className="flex">
          <Button type="submit" form="username">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditUsername;
