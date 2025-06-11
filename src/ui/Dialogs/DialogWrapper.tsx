import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";

export function DialogWrapper({
  trigger,
  title,
  description,
  content,
  footer,
}: {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <Dialog modal={true}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => {
          // Prevent dialog from closing when interacting with browser autocomplete
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {content}
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
