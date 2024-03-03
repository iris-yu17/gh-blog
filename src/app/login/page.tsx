"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

function Login() {
  const handleSubmit = () => {
    console.log("asd");
  };

  return (
    <Card className="max-w-sm" onSubmit={handleSubmit}>
      <a
        href={`https://github.com/login/oauth/authorize?scope=user:email&client_id=${process.env.CLIENT_ID}`}
      >
        test
      </a>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            // type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}

export default Login;
