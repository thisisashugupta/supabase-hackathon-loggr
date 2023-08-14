import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

// Create a single supabase client for interacting with your database

const supabaseUrl = "https://jnjyfydxigascsoeaiwj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpuanlmeWR4aWdhc2Nzb2VhaXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyMTExMDIsImV4cCI6MjAwNjc4NzEwMn0.TcHSVAKJ329dG_TkC5ellsoU7lQZiAAunVBEMhNpUHw";
const supabase = createClient(supabaseUrl, supabaseKey);

// Login Component
const Login = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      // forward to success URL
      navigate("/success");
    } else {
      // forward to localhost:3000
      navigate("/");
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["google", "discord"]}
        />
      </header>
    </div>
  );
};

export default Login;
/**
 * import React, { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

const supabaseUrl = "https://jnjyfydxigascsoeaiwj.supabase.co";
const supabaseKey = "YOUR_SUPABASE_KEY";
const supabase = createClient(supabaseUrl, supabaseKey);

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authStateChanged = async (event) => {
      if (event !== "SIGNED_OUT") {
        navigate("/success");
      } else {
        navigate("/");
      }
    };

    const unsubscribe = supabase.auth.onAuthStateChange(authStateChanged);

    // Cleanup the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="App">
      <header className="App-header">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["google", "discord"]}
        />
      </header>
    </div>
  );
};

export default Login;

 
*/
