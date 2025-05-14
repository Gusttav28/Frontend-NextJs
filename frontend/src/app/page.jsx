import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";
export const dynamic = "force-dynamic"

function HomePage() {
  return(
    <div className="container mx-auto">
      <h1> Task app</h1>
      <div className="flex gapx-10">
      <FormTask/>
      <ListTask/> 
      </div>
    </div>
  )
}

export default HomePage