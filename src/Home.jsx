import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

export default function Home({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function getProfile() {
      console.log("getProfile()");
      setLoading(true);
      const { user } = session;
      console.log(user.email);
      console.log(user.id);
      console.log(user.username);
      console.log(supabase.auth);

      let { data: users, error } = await supabase
        .from("users")
        .select("username");

      if (error) {
        console.warn(error);
        console.log("error aari hai bhaiya");
      } else if (users) {
        console.log("users:->", users);
        setUsername(users.username);
      }

      setLoading(false);
    }

    getProfile();
  }, [session]);

  async function updateProfile(event) {
    event.preventDefault();

    setLoading(true);
    const { user } = session;
    // setUsername(username);
    console.log("username:", username);

    const updates = {
      user_id: user.id,
      email: user.email,
      username,
      /* updated_at: new Date(),*/
    };

    let { error } = await supabase.from("users").upsert(updates);

    if (error) {
      alert(error.message);
    }
    /* 
    else {
      console.log("setAvatarUrl(avatarUrl);");
    }
    */
    setLoading(false);
    // setSubmitted(true);
  }

  return (
    <div>
      <form onSubmit={updateProfile} className="form-widget">
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={session.user.email} disabled />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            required
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* 
      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="url"
          value={website || ""}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
 */}
        <div>
          <button
            className="button block primary"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
        </div>

        <div>
          <button
            className="button block"
            type="button"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </button>
        </div>
      </form>
    </div>
  );
}
