import { SidebarTrigger } from "@/components/ui/sidebar";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <h1 className="font-headline text-2xl font-semibold">{title}</h1>
    </header>
  );
}
