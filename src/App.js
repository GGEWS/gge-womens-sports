import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  const [staffLoginOpen, setStaffLoginOpen] = useState(false);
  const [staffLoggedIn, setStaffLoggedIn] = useState(false);
  const [staffTab, setStaffTab] = useState("Athlete Database");
  const [selectedAthlete, setSelectedAthlete] = useState(null);

  const [newAthlete, setNewAthlete] = useState({
    name: "",
    position: "",
    height: "",
    weight: "",
    grad: "",
    school: "",
    state: "",
    about: "",
    hudl: "",
    youtube: "",
    instagram: "",
    speed: 80,
    footballIQ: 80,
    athleticism: 80,
    leadership: 80,
    production: 80,
    headshot: "",
  });

  const [athletes, setAthletes] = useState([
    {
      name: "Jordan Miles",
      position: "WR",
      height: "5'8",
      weight: "150",
      grad: "2026",
      school: "Westlake High School",
      state: "PA",
      about: "Explosive receiver with strong hands and great field awareness.",
      hudl: "https://hudl.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      speed: 92,
      footballIQ: 88,
      athleticism: 90,
      leadership: 86,
      production: 91,
      headshot: "",
    },
    {
      name: "Taylor Brooks",
      position: "RB",
      height: "5'6",
      weight: "145",
      grad: "2026",
      school: "Northview Academy",
      state: "NJ",
      about: "High-motor athlete with strong balance and elite acceleration.",
      hudl: "https://hudl.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      speed: 95,
      footballIQ: 89,
      athleticism: 94,
      leadership: 90,
      production: 93,
      headshot: "",
    },
  ]);

  const box = {
    border: "1px solid #222",
    borderRadius: "16px",
    padding: "24px",
    background: "#080808",
  };

  const input = {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "black",
    color: "white",
    border: "1px solid #333",
    boxSizing: "border-box",
  };

  const whiteButton = {
    marginTop: "14px",
    background: "white",
    color: "black",
    border: "none",
    padding: "12px 18px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const outlineButton = {
    marginTop: "14px",
    background: "transparent",
    color: "white",
    border: "1px solid #555",
    padding: "12px 18px",
    borderRadius: "8px",
    cursor: "pointer",
  };

  function navStyle(tab) {
    return {
      cursor: "pointer",
      borderBottom: page === tab ? "2px solid white" : "none",
      paddingBottom: "6px",
    };
  }

  function calculateScore(a) {
    return Math.round(
      a.speed * 0.25 +
        a.footballIQ * 0.2 +
        a.athleticism * 0.25 +
        a.leadership * 0.15 +
        a.production * 0.15
    );
  }

  function getStars(score) {
    if (score >= 95) return "★★★★★";
    if (score >= 90) return "★★★★";
    if (score >= 85) return "★★★";
    if (score >= 80) return "★★";
    return "★";
  }

  const rankedAthletes = [...athletes]
    .map((a) => ({
      ...a,
      score: calculateScore(a),
      stars: getStars(calculateScore(a)),
    }))
    .sort((a, b) => b.score - a.score)
    .map((a, i) => ({ ...a, rank: `#${i + 1}` }));

  function updateAthlete(field, value) {
    setNewAthlete({ ...newAthlete, [field]: value });
  }

  function registerAthlete() {
    setAthletes([...athletes, newAthlete]);
    setNewAthlete({
      name: "",
      position: "",
      height: "",
      weight: "",
      grad: "",
      school: "",
      state: "",
      about: "",
      hudl: "",
      youtube: "",
      instagram: "",
      speed: 80,
      footballIQ: 80,
      athleticism: 80,
      leadership: 80,
      production: 80,
      headshot: "",
    });
    alert("Athlete profile created!");
  }

  function uploadHeadshot(e) {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setNewAthlete({ ...newAthlete, headshot: url });
  }

  return (
    <div
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 40px",
          borderBottom: "1px solid #222",
          background: "#050505",
        }}
      >
        <img src="/logo.png" alt="GGE Logo" style={{ height: "70px" }} />

        <div style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
          <span onClick={() => setPage("home")} style={navStyle("home")}>
            Home
          </span>
          <span onClick={() => setPage("portal")} style={navStyle("portal")}>
            Athlete Portal
          </span>
          <span
            onClick={() => setPage("rankings")}
            style={navStyle("rankings")}
          >
            Rankings
          </span>
          <span onClick={() => setPage("events")} style={navStyle("events")}>
            Events
          </span>
          <span onClick={() => setPage("coach")} style={navStyle("coach")}>
            Coach Portal
          </span>
          <span onClick={() => setPage("contact")} style={navStyle("contact")}>
            Contact
          </span>
        </div>

        <button onClick={() => setStaffLoginOpen(true)} style={outlineButton}>
          Staff Login
        </button>
      </div>

      {/* HOME */}
      {page === "home" && (
        <>
          <div
            style={{
              padding: "80px 40px",
              display: "grid",
              gridTemplateColumns: "1.1fr .9fr",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "52px",
                  fontWeight: "900",
                  lineHeight: "1.05",
                }}
              >
                SCOUTING. DEVELOPMENT.
                <br />
                OPPORTUNITY.
                <br />
                <span style={{ color: "#aaa" }}>BUILT FOR GREATNESS.</span>
              </h1>

              <p
                style={{
                  color: "#aaa",
                  fontSize: "18px",
                  lineHeight: "1.6",
                  maxWidth: "600px",
                }}
              >
                GGE Women’s Sports is a modern athlete development and scouting
                intelligence platform built for girls flag football and women’s
                sports.
              </p>

              <button onClick={() => setPage("portal")} style={whiteButton}>
                Join as an Athlete
              </button>
              <button
                onClick={() => setPage("rankings")}
                style={{ ...outlineButton, marginLeft: "12px" }}
              >
                View Rankings
              </button>
            </div>

            <img
              src="/athlete.jpg"
              alt="Athlete"
              style={{
                height: "420px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "18px",
                border: "1px solid #222",
              }}
            />
          </div>

          <div
            style={{
              padding: "20px 40px 60px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {[
              "Athlete Registration",
              "Highlight Videos",
              "AI Rankings",
              "Coach Access",
            ].map((item) => (
              <div key={item} style={box}>
                <h3>{item}</h3>
                <p style={{ color: "#aaa" }}>
                  Built to help athletes get discovered, evaluated, and
                  connected with opportunity.
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ATHLETE PORTAL */}
      {page === "portal" && (
        <div style={{ padding: "60px 40px" }}>
          <h1>Athlete Portal</h1>
          <p style={{ color: "#aaa" }}>
            Create your recruiting profile, upload a headshot, add highlight
            links, and enter evaluation scores.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <div style={box}>
              <h3>Create Athlete Profile</h3>

              <input
                placeholder="Full Name"
                value={newAthlete.name}
                onChange={(e) => updateAthlete("name", e.target.value)}
                style={input}
              />
              <input
                placeholder="Position"
                value={newAthlete.position}
                onChange={(e) => updateAthlete("position", e.target.value)}
                style={input}
              />
              <input
                placeholder="Height"
                value={newAthlete.height}
                onChange={(e) => updateAthlete("height", e.target.value)}
                style={input}
              />
              <input
                placeholder="Weight"
                value={newAthlete.weight}
                onChange={(e) => updateAthlete("weight", e.target.value)}
                style={input}
              />
              <input
                placeholder="Graduation Year"
                value={newAthlete.grad}
                onChange={(e) => updateAthlete("grad", e.target.value)}
                style={input}
              />
              <input
                placeholder="School"
                value={newAthlete.school}
                onChange={(e) => updateAthlete("school", e.target.value)}
                style={input}
              />
              <input
                placeholder="State"
                value={newAthlete.state}
                onChange={(e) => updateAthlete("state", e.target.value)}
                style={input}
              />

              <label
                style={{ display: "block", marginTop: "14px", color: "#aaa" }}
              >
                Upload Headshot
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={uploadHeadshot}
                style={{ marginTop: "8px" }}
              />

              <textarea
                placeholder="About Me"
                value={newAthlete.about}
                onChange={(e) => updateAthlete("about", e.target.value)}
                style={{ ...input, height: "90px" }}
              />

              <h3 style={{ marginTop: "20px" }}>Highlight Links</h3>
              <input
                placeholder="Hudl Link"
                value={newAthlete.hudl}
                onChange={(e) => updateAthlete("hudl", e.target.value)}
                style={input}
              />
              <input
                placeholder="YouTube Link"
                value={newAthlete.youtube}
                onChange={(e) => updateAthlete("youtube", e.target.value)}
                style={input}
              />
              <input
                placeholder="Instagram Link"
                value={newAthlete.instagram}
                onChange={(e) => updateAthlete("instagram", e.target.value)}
                style={input}
              />

              <button onClick={registerAthlete} style={whiteButton}>
                Create Profile
              </button>
            </div>

            <div style={box}>
              <h3>AI Ranking Calculator</h3>

              {[
                "speed",
                "footballIQ",
                "athleticism",
                "leadership",
                "production",
              ].map((field) => (
                <div key={field} style={{ marginTop: "14px" }}>
                  <label style={{ color: "#aaa" }}>
                    {field}: {newAthlete[field]}
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={newAthlete[field]}
                    onChange={(e) =>
                      updateAthlete(field, Number(e.target.value))
                    }
                    style={{ width: "100%" }}
                  />
                </div>
              ))}

              <h1>{calculateScore(newAthlete)}</h1>
              <p style={{ color: "#aaa" }}>Projected GGE Score</p>
              <h2>{getStars(calculateScore(newAthlete))}</h2>

              {newAthlete.headshot && (
                <img
                  src={newAthlete.headshot}
                  alt="Preview"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginTop: "20px",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* PUBLIC RANKINGS */}
      {page === "rankings" && (
        <div style={{ padding: "60px 40px" }}>
          <h1>GGE Top Rankings</h1>
          <p style={{ color: "#aaa" }}>
            Public athlete rankings powered by the GGE evaluation score.
          </p>

          <div style={box}>
            {rankedAthletes.map((a) => (
              <div
                key={a.name}
                onClick={() => setSelectedAthlete(a)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 2fr 1fr 1fr 1fr",
                  padding: "14px 0",
                  borderBottom: "1px solid #222",
                  cursor: "pointer",
                }}
              >
                <span>{a.rank}</span>
                <span>{a.name}</span>
                <span>{a.position}</span>
                <span>{a.stars}</span>
                <span>{a.score}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* COACH PORTAL */}
      {page === "coach" && (
        <div style={{ padding: "60px 40px" }}>
          <h1>College Coach Portal</h1>
          <p style={{ color: "#aaa" }}>
            Search athletes, review profiles, and evaluate recruiting fits.
          </p>

          <div style={box}>
            {rankedAthletes.map((a) => (
              <div
                key={a.name}
                onClick={() => setSelectedAthlete(a)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                  padding: "14px 0",
                  borderBottom: "1px solid #222",
                  cursor: "pointer",
                }}
              >
                <span>{a.name}</span>
                <span>{a.position}</span>
                <span>{a.grad}</span>
                <span>{a.state}</span>
                <span>{a.score}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* EVENTS */}
      {page === "events" && (
        <div style={{ padding: "60px 40px" }}>
          <h1>Events</h1>
          {[
            "GGE Summer Showcase",
            "Elite 100 Camp",
            "Skills & Drills Combine",
          ].map((event) => (
            <div
              key={event}
              style={{
                ...box,
                marginTop: "16px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{event}</span>
              <button style={whiteButton}>Register</button>
            </div>
          ))}
        </div>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <div style={{ padding: "60px 40px" }}>
          <h1>Contact GGE</h1>
          <input
            placeholder="Full Name"
            style={{ ...input, maxWidth: "500px" }}
          />
          <input placeholder="Email" style={{ ...input, maxWidth: "500px" }} />
          <textarea
            placeholder="Message"
            style={{ ...input, maxWidth: "500px", height: "120px" }}
          />
          <button style={whiteButton}>Send Message</button>
        </div>
      )}

      {/* ATHLETE PROFILE MODAL */}
      {selectedAthlete && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.85)",
            padding: "60px",
            zIndex: 999,
          }}
        >
          <button
            onClick={() => setSelectedAthlete(null)}
            style={outlineButton}
          >
            Close
          </button>

          <div style={{ ...box, marginTop: "20px" }}>
            <h1>{selectedAthlete.name}</h1>
            <p style={{ color: "#aaa" }}>
              {selectedAthlete.position} • Class of {selectedAthlete.grad} •{" "}
              {selectedAthlete.school}
            </p>

            {selectedAthlete.headshot && (
              <img
                src={selectedAthlete.headshot}
                alt="Headshot"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            )}

            <h2>GGE Score: {selectedAthlete.score}</h2>
            <h2>{selectedAthlete.stars}</h2>

            <p style={{ color: "#aaa" }}>{selectedAthlete.about}</p>

            <h3>Highlight Links</h3>
            <p>
              <a
                href={selectedAthlete.hudl}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                Hudl
              </a>
            </p>
            <p>
              <a
                href={selectedAthlete.youtube}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                YouTube
              </a>
            </p>
            <p>
              <a
                href={selectedAthlete.instagram}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      )}

      {/* STAFF LOGIN */}
      {staffLoginOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div style={{ ...box, width: "360px", position: "relative" }}>
            <button
              onClick={() => setStaffLoginOpen(false)}
              style={{
                position: "absolute",
                top: "12px",
                right: "14px",
                background: "transparent",
                color: "white",
                border: "none",
                fontSize: "22px",
              }}
            >
              ×
            </button>
            <h2>Staff Login</h2>
            <input placeholder="Staff Email" style={input} />
            <input placeholder="Password" type="password" style={input} />
            <button
              onClick={() => {
                setStaffLoginOpen(false);
                setStaffLoggedIn(true);
                setPage("staff");
              }}
              style={whiteButton}
            >
              Login
            </button>
          </div>
        </div>
      )}

      {/* STAFF DASHBOARD */}
      {page === "staff" && staffLoggedIn && (
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr" }}>
          <div
            style={{
              borderRight: "1px solid #222",
              padding: "24px",
              background: "#050505",
            }}
          >
            <h2>GGE Staff</h2>

            {[
              "Athlete Database",
              "AI Rankings",
              "Draft Board",
              "Scout Reports",
              "Events",
              "Applications",
            ].map((tab) => (
              <div
                key={tab}
                onClick={() => setStaffTab(tab)}
                style={{
                  padding: "12px",
                  color: staffTab === tab ? "white" : "#aaa",
                  background: staffTab === tab ? "#111" : "transparent",
                  cursor: "pointer",
                }}
              >
                {tab}
              </div>
            ))}

            <button
              onClick={() => {
                setStaffLoggedIn(false);
                setPage("home");
              }}
              style={outlineButton}
            >
              Logout
            </button>
          </div>

          <div style={{ padding: "40px" }}>
            <h1>{staffTab}</h1>

            <div style={box}>
              {rankedAthletes.map((a) => (
                <div
                  key={a.name}
                  onClick={() => setSelectedAthlete(a)}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 2fr 1fr 1fr 1fr",
                    padding: "14px 0",
                    borderBottom: "1px solid #222",
                    cursor: "pointer",
                  }}
                >
                  <span>{a.rank}</span>
                  <span>{a.name}</span>
                  <span>{a.position}</span>
                  <span>{a.stars}</span>
                  <span>{a.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
