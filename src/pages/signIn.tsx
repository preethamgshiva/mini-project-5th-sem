import "@/styles/signIn.css";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signInHandler = () => {
    navigate("/patient-details");
  };

  const isButtonDisabled = !userid || !password;

  return (
    <>
      <div className="container-signin">
        <div className="login-box">
          <h1 className="text-3xl font-bold tracking-tighter ">
            DiagnoSYS Portal
          </h1>
          <form className="space-y-4">
            <div className="username-input">
              <Label htmlFor="string">
                <strong>User ID:</strong>
              </Label>
              <Input
                id="username"
                type="string"
                value={userid}
                onChange={(e) => setUserid(e.target.value)}
                placeholder="Enter ID"
                required
              />
            </div>
            <div className="password-input">
              <Label htmlFor="string">
                <strong>Password:</strong>
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
              />
            </div>
          </form>
          <div className="submit-button">
            <Button
              type="submit"
              className="login-button w-full"
              disabled={isButtonDisabled}
              onClick={signInHandler}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
