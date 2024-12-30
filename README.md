# Coally Task Manager Frontend 🚀

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TanStack Query](https://img.shields.io/badge/TanStack-Query_v5-red)
![NextAuth](https://img.shields.io/badge/NextAuth-5.0-green)

A modern and efficient task management application built as a technical test for **Coally**. This project showcases the implementation of a responsive and user-friendly interface using cutting-edge web technologies.

---

## 🔗 Live Demo

[**Check out the live demo here**](https://coally-task-manager.vercel.app/) - Deployed on Vercel.

---

## 🔧 Technology Stack

- **Next.js 14**: Leverages the App Router for simplified routing, server components, and improved performance.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **TanStack Query**: Powerful asynchronous state management for data fetching and caching.
- **NextAuth.js**: Complete authentication solution integrated with Next.js.
- **Axios**: Promise-based HTTP client for API requests.
- **Lucide Icons & FontAwesome**: Modern icon libraries for enhanced UI.
- **TypeScript**: Type-safe development for better developer experience.

---

## 📂 Project Structure

```plaintext
src/
├── app/                    # App Router directory
│   ├── auth/              # Authentication routes
│   │   └── login/         # Login page
│   └── tasks/             # Tasks management routes
├── components/            # Reusable components
│   ├── auth/             # Authentication components
│   ├── tasks/            # Task-related components
│   └── ui/               # Common UI components
├── config/               # Configuration files
│   └── auth/            # Authentication configuration
├── constants/            # Application constants
├── contexts/             # React contexts
├── hooks/               # Custom hooks
│   └── tasks/          # Task-related hooks
├── services/            # API services
│   └── task.service.ts # Task API service
└── types/               # TypeScript type definitions
```

---

## ✨ Key Features

### Authentication

- Secure login system using NextAuth.js.
- Protected routes and API endpoints.
- Session persistence.
- Automatic token management.

### Task Management

- Create, read, update, and delete tasks.
- Toggle task completion status.
- Separate views for pending and completed tasks.
- Form validation.
- Error handling and loading states.

### Modern UI/UX

- Clean and intuitive interface.
- Dark theme design.
- Animated loading states.
- Toast notifications for actions.
- Responsive layout for all devices.

---

## 🚀 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/julioale21/coally-task-manager-frontend.git
cd coally-task-manager-frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env` file o rename .env.example to .env and add the following:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

4. **Run the development server:**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application in action.

---

## 💡 Why These Technologies?

### Next.js 14

- **App Router**: Simplified routing and layouts.
- **Server Components**: Improved performance with reduced client-side JavaScript.
- **Built-in Optimizations**: Image handling and dynamic imports.
- **Excellent TypeScript Support**: For a better developer experience.
- **Built-in API Routes**: Simplified backend integration.

### TailwindCSS

- **Utility-first Approach**: For rapid development.
- **Highly Customizable**: Design system that adapts to your needs.
- **Responsive Utilities**: Built-in responsive design tools.
- **Minimal CSS Bundle**: Optimized production builds.

### TanStack Query

- **Data Synchronization**: Automatic background updates and cache management.
- **Optimistic Updates**: Real-time updates with UI responsiveness.
- **Server State Management**: Simplified handling of external data sources.

### NextAuth.js

- **Secure Authentication**: Multiple providers supported out of the box.
- **Session Management**: Simplified token handling.
- **Easy Integration**: Works seamlessly with Next.js.
- **TypeScript Support**: For type-safe authentication.

---

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:

- **Desktop computers** (1024px and above).
- **Tablets** (768px to 1023px).
- **Mobile devices** (320px to 767px).

---

## 🔄 State Management

### TanStack Query

- **Server State Management**: Handles server data efficiently.
- **Cache Handling**: Reduces redundant API calls.
- **Optimistic Updates**: Improves user experience.
- **Real-time Synchronization**: Keeps data fresh.

### React Context

- **Authentication State**: Handles user session.

### NextAuth.js

- **Session Management**: Simplifies authentication.
- **Token Handling**: Automatic updates and storage.

---

## 🔔 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## 🔗 Connect with Me

I am Julio Romero, a full-stack web and mobile Flutter developer with over 6 years of experience. Currently, I work for Moonshot Partners, building a mobile application for Digitel Venezuela using Flutter.

- **[LinkedIn](https://www.linkedin.com)**
- **[GitHub](https://github.com/julioale21)**
