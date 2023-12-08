import Pagination from "@/components/Pagination";
import TaskCard from "@/components/cards/TaskCard";
export default function Tasks() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg  lg:col-span-2">
          <div className="flex flex-col gap-8 pb-12">
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}
