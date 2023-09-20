import { UserCog } from "lucide-react";
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

function EditUsername() {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <UserCog />
        </Button>
      </DialogTrigger>

      {/* Main */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Username</DialogTitle>
        </DialogHeader>

        <div className="flex items-center">
          <Input
            id="name"
            className=""
            autoComplete="off"
            placeholder="Username"
          />
        </div>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditUsername;
