import React from "react";

function Signup() {
    return (
      <div>
        <h1>SignUp</h1>
        <form>
        <div>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }