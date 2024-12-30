import "@/styles/patientDetails.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

function PatientDetails() {
  const navigate = useNavigate();
  const signOutHandler = () => {
    navigate("/");
  };
  const submitHandler = () => {
    navigate("/AnalysisPage");
  };
  return (
    <>
      <div className="logout-button">
        <Button className="login-button w-full" onClick={signOutHandler}>
          <strong>Logout</strong>
        </Button>
      </div>
      <div className="container">
        <Card className="w-[800px]">
          <CardHeader>
            <CardTitle className="main-head">Enter Patient Details</CardTitle>
            <CardDescription className="sec-head">
              Please Enter as Mentioned in the report.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className=" formdiv">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">
                    <strong>Name:</strong>
                  </Label>
                  <Input id="name" placeholder="Name of the Patient" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="age">
                    <strong>Age:</strong>
                  </Label>
                  <Input id="age" placeholder="Age of the Patient" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">
                    <strong>Gender:</strong>
                  </Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select the Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        className="selected-item-gender"
                        value="light"
                      >
                        <strong>Male</strong>
                      </SelectItem>
                      <SelectItem className="selected-item-gender" value="dark">
                        <strong>Female</strong>
                      </SelectItem>
                      <SelectItem
                        className="selected-item-gender"
                        value="system"
                      >
                        <strong>Others</strong>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">
                    <strong>Early remarks:</strong>
                  </Label>
                  <Textarea placeholder="Enter your remarks here." />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button onClick={submitHandler}>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default PatientDetails;
