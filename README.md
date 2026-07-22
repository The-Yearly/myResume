# myResume

> 🚀 A free and open-source resume builder and hosting platform that lets anyone create, customize, and share beautiful resumes online.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Overview

**myResume** is a modern resume builder that allows users to create, personalize, and host professional resumes for free.

Unlike traditional resume builders, myResume offers **component-level customization**, allowing users to modify the appearance of individual sections while keeping their resume responsive and professional.

The platform also includes a **community section** where users can browse publicly shared resumes for inspiration and discover new design ideas.

---

## 🌟 Features

- 📄 Create professional resumes with a clean interface
- 🎨 Customize individual resume components
- 🌈 Multiple resume themes and styles
- ☁️ Free online resume hosting
- 🔗 Share resumes with a unique public URL
- 👥 Discover resumes created by the community
- 🔒 Secure authentication and user accounts
- ⚡ Fast, responsive UI built with Next.js
- 📱 Mobile-friendly design

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL
- Prisma ORM

---

## 📂 Project Structure

```
myResume/
│
├── frontend/        # Next.js application
├── backend/         # Express API
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- npm or pnpm

---

### Clone the repository

```bash
git clone https://github.com/The-Yearly/myResume.git

cd myResume
```

---

### Install dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd backend
npm install
```

---

### Configure Environment Variables

Create a `.env` file inside the backend.

Example:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/myresume
JWT_SECRET=your_secret
IMAGE_KIT=example@gmail.com
```

---

### Run Prisma

```bash
npx prisma generate

npx prisma migrate dev
```

---

### Start the backend

```bash
npm run dev
```

---

### Start the frontend

```bash
npm run dev
```

The application will now be running locally.


## 🎯 Roadmap

- [ ] Resume templates
- [ ] PDF export
- [ ] Drag-and-drop sections
- [ ] AI-assisted resume suggestions
- [ ] Resume analytics
- [ ] Theme marketplace
- [ ] Markdown support

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "Add amazing feature"
```

4. Push

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future development.
