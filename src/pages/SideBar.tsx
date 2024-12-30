import "@/styles/SideBar.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SideBar() {
  return (
    <div className="container">
      <Card
        className="w-[350px] h-screen"
        style={{ height: "calc(90vh - 50px)" }}
      >
        <CardHeader>
          <CardTitle>DiagnoSYS Portal</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  <strong>Name: </strong>
                </Label>
                //return Patient Name
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="age">
                  <strong>Age: </strong>
                </Label>
                //return Patient Age
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  <strong>Gender: </strong>
                </Label>
                //return Patient Gender
              </div>
            </div>
          </form>
        </CardContent>
        <div className="bottom-align">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Framework</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>
      <CardFooter className="flex-row justify-between">
        <div className="bottom-align">
          <Button variant="outline">Cancel</Button>
        </div>
        <Button>Deploy</Button>
      </CardFooter>
    </div>
  );
}

export default SideBar;
