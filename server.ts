import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", (req, res) => {
    const { name, email, details } = req.body;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: "E-mail inválido." });
    }

    if (!name || !details) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    // Here you would integrate with a real email sending service like Resend, Sendgrid or nodemailer
    // For this example, we mock a successful submission.
    console.log(`[Email System Mock] Sending email to edusts82@gmail.com...`);
    console.log(`[Email System Mock] From: ${name} <${email}>`);
    console.log(`[Email System Mock] Message: ${details}`);
    console.log(`[Email System Mock] Email sent successfully!`);

    return res.status(200).json({ success: true, message: "E-mail enviado com sucesso!" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // For Express 4.x
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
