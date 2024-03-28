import { getData } from "@/actions/todoActions";
import { ModeToggle } from "@/components/ThemeToggle";
import Todos from "@/components/Todos";
import { cn } from "@/lib/utils";

export default async function Home() {
  const data = await getData();
  return (
    <div className="px-4 flex flex-col py-2">
      <ModeToggle className="mx-auto mb-8" />
      <h1
        className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-wrap pb-6 sm:pb-20 mx-auto text-center "
        )}
      >
        Todo app with Drizzle,<br /> Neon, NextJs
      </h1>
      <Todos todos={data} />
    </div>
  );
}
