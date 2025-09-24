# Next.js Project Setup and Basics

This repository contains the full implementation of **alx-project-0x02-setup**, a learning exercise that walks through setting up a Next.js application with TypeScript and Tailwind CSS, and incrementally building reusable components, routing, and API integrations.

---

## 📁 Repository Structure

alx-project-0x02-setup/
│
├─ alx-project-0x02/
│ ├─ components/
│ │ ├─ common/
│ │ │ ├─ Button.tsx
│ │ │ ├─ Card.tsx
│ │ │ ├─ PostCard.tsx
│ │ │ ├─ PostModal.tsx
│ │ │ └─ UserCard.tsx
│ │ └─ layout/
│ │ └─ Header.tsx
│ ├─ interfaces/
│ │ └─ index.ts
│ ├─ pages/
│ │ ├─ index.tsx
│ │ ├─ home.tsx
│ │ ├─ about.tsx
│ │ ├─ posts.tsx
│ │ └─ users.tsx
│ ├─ public/
│ │ └─ assets/images/
│ └─ README.md
└─ README.md

---

## 🏁 Project Goals

1. **Initial Setup**

   - Create a GitHub repository named **`alx-project-0x02-setup`**.
   - Initialize with a `README.md` explaining the project purpose.

2. **Next.js + TypeScript + Tailwind**

   - Scaffold a Next.js project (`alx-project-2`) using `npx create-next-app@latest`.
   - Enable TypeScript, ESLint, and Tailwind CSS.

3. **Routing**

   - Create pages: `home.tsx` and `about.tsx`.
   - Add navigation links in a reusable `Header.tsx`.

4. **Reusable Components**

   - **Card**: Accepts `title` and `content` props.
   - **Button**: Supports multiple sizes (`small`, `medium`, `large`) and shapes (`rounded-sm`, `rounded-md`, `rounded-full`).
   - **PostModal**: Collects user input and updates content dynamically.
   - **PostCard**: Fetches and displays a list of posts from an external API.
   - **UserCard**: Fetches and displays user data.

5. **Layout & Navigation**

   - A global `Header` component used across `home`, `about`, and `posts` pages for seamless navigation.

6. **API Integration**
   - Posts fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).
   - Users fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).

---

## 🚀 Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/<your-username>/alx-project-0x02-setup.git
   cd alx-project-0x02-setup/alx-project-0x02
   ```

## Install Dependencies

npm intall

## Run the Development Server

Npm run dev

## Key Files

pages/index.tsx – Landing page with a welcome message.

components/layout/Header.tsx – Global navigation bar.

components/common/Card.tsx – Reusable card component.

components/common/Button.tsx – Configurable button component.

components/common/PostModal.tsx – Modal for adding posts.

components/common/PostCard.tsx – Displays posts from API.

components/common/UserCard.tsx – Displays user info from API.

interfaces/index.ts – TypeScript interfaces for props.

## Notes

Built with Next.js 13+, TypeScript, and Tailwind CSS.

Demonstrates component reusability, API fetching, and the Pages Router.

Designed as part of the ALX Frontend Program to practice modern web development.

Author: Ohazulike Stanley
Repository: alx-project-0x02-setup
