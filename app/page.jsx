"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#090806",
        color: "#f5e8c8",
        fontFamily: "Arial, sans-serif",
        padding: "30px 20px"
      }}
    >
      <div style={{ maxWidth: 1100, margin: "auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
            borderBottom: "1px solid #3d3018"
          }}
        >
          <div>
            <h1 style={{ margin: 0, color: "#d8b45a" }}>
              🇮🇶 مساعد AI العراقي
            </h1>
            <p style={{ color: "#aaa08d" }}>
              ذكاء يفهمك باللهجة العراقية
            </p>
          </div>

          <button
            onClick={() => setMessage("هلا بيك! شلون أساعدك؟")}
            style={{
              background: "#d8b45a",
              color: "#090806",
              border: 0,
              borderRadius: 12,
              padding: "12px 20px",
              fontWeight: "bold"
            }}
          >
            ابدأ الآن
          </button>
        </header>

        <section style={{ textAlign: "center", padding: "80px 0 50px" }}>
          <h2 style={{ fontSize: 48, color: "#fff" }}>
            الذكاء الاصطناعي
            <br />
            <span style={{ color: "#d8b45a" }}>
              بطابع عراقي 🇮🇶
            </span>
          </h2>

          <p style={{ color: "#aaa08d", fontSize: 18 }}>
            ادرس، اسأل، اختبر نفسك وخلي مساعدك الذكي وياك بكل خطوة.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 18
          }}
        >
          {[
            ["🤖", "مساعد AI"],
            ["📚", "السادس الإعدادي"],
            ["📝", "الأسئلة الوزارية"],
            ["🧠", "اختبرني"]
          ].map(([icon, title]) => (
            <button
              key={title}
              onClick={() => setMessage(`اخترت: ${title}`)}
              style={{
                textAlign: "right",
                background: "#12100c",
                color: "#fff",
                border: "1px solid #3d3018",
                borderRadius: 20,
                padding: 25,
                minHeight: 170
              }}
            >
              <div style={{ fontSize: 32 }}>{icon}</div>
              <h3>{title}</h3>
              <p style={{ color: "#aaa08d" }}>
                اضغط للدخول إلى القسم
              </p>
            </button>
          ))}
        </section>

        {message && (
          <div
            style={{
              marginTop: 30,
              padding: 20,
              background: "#17130c",
              border: "1px solid #d8b45a",
              borderRadius: 16,
              textAlign: "center"
            }}
          >
            {message}
          </div>
        )}
      </div>
    </main>
  );
    }
