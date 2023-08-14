import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const supabaseUrl = "https://jnjyfydxigascsoeaiwj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpuanlmeWR4aWdhc2Nzb2VhaXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyMTExMDIsImV4cCI6MjAwNjc4NzEwMn0.TcHSVAKJ329dG_TkC5ellsoU7lQZiAAunVBEMhNpUHw";
const supabase = createClient(supabaseUrl, supabaseKey);

function Success() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  /* useEffect allows us to run code when the user gets send to a link or when the dom renders first */

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        // value.data.user
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  return (
    <div className="App">
      <>
        <h1>You are at Success Page</h1>
      </>
    </div>
  );
}

export default Success;
