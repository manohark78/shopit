# ShopIT — Full-Stack E-Commerce Application 🛒

**ShopIT** is a modern, responsive full-stack e-commerce web application built using **Spring Boot 3** for the backend REST API and **React + Vite** for the Single-Page Application (SPA) frontend.

---

## 🌟 Key Features

- **Product Lifecycle Management**: Add, view, update, and delete products with image uploading capabilities (multipart/form-data support).
- **Real-Time Search & Filtering**: Instant search by keyword and category filtering (Laptops, Mobiles, Headphones, Electronics, etc.).
- **Dynamic Shopping Cart**: Interactive cart state management with real-time stock availability checks and quantity management.
- **File-Based Database Persistence**: Uses H2 database in file mode (`./data/shopitdb`), preserving products and transactions across application restarts.
- **Responsive & Modern UI**: Styled with custom CSS, Bootstrap 5, and Bootstrap Icons. Smooth SPA routing via React Router without page reloads.

---

## 🛠️ Tech Stack

### Backend
- **Framework**: Java 17+ / Spring Boot 3.4.1
- **Persistence**: Spring Data JPA / Hibernate
- **Database**: File-Based H2 Relational Database (`jdbc:h2:file:./data/shopitdb`)
- **Utilities**: Lombok, Spring Web

### Frontend
- **Framework**: React 18+ (bundled with Vite)
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios (with centralized base URL configuration)
- **UI Components & Styling**: Bootstrap 5, Bootstrap Icons, Vanilla CSS

---

## 📁 Repository Structure

```
shopit/
├── backend/
│   └── shopit/
│       └── shopit/
│           ├── src/main/java/com/shopit/
│           │   ├── controller/      # REST API Controllers (ProductController, UserController)
│           │   ├── model/           # JPA Entities (Product, User)
│           │   ├── repository/      # Spring Data Repositories (ProductRepository, UserRepository)
│           │   └── service/         # Business Logic Layer (ProductService)
│           └── src/main/resources/
│               ├── application.properties # Server & DB Configurations
│               └── data.sql         # Seed data script
└── frontend/
    └── shopit-frontend/
        ├── src/
        │   ├── assets/              # Images and icons
        │   ├── components/          # React Components (Navbar, Home, Cart, Product, UpdateProduct, etc.)
        │   ├── Context/             # AppContext for global cart state
        │   ├── App.jsx              # Main App component & Routes
        │   └── axios.jsx            # Centralized Axios API configuration
        └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Java Development Kit (JDK)**: Version 17 or higher
- **Node.js**: Version 18 or higher & **npm**

---

### 1. Backend Setup (Spring Boot)

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend/shopit/shopit
   ```

2. Build and run the Spring Boot server using the Maven wrapper:
   - **Windows (PowerShell)**:
     ```powershell
     .\mvnw spring-boot:run
     ```
   - **Linux / macOS**:
     ```bash
     ./mvnw spring-boot:run
     ```

3. The backend server will start on `http://localhost:8080`.

#### 🗄️ Database Access (H2 Console)
- **H2 Console URL**: `http://localhost:8080/h2-console`
- **JDBC URL**: `jdbc:h2:file:./data/shopitdb`
- **Username**: `mk`
- **Password**: `mk78`
- **Database File Location**: `./backend/shopit/shopit/data/shopitdb.mv.db`

---

### 2. Frontend Setup (React + Vite)

1. Open a terminal and navigate to the frontend directory:
   ```bash
   cd frontend/shopit-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` (or the URL shown in terminal) in your browser.

---

## 📡 REST API Reference

| HTTP Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/products` | Fetch all products |
| `GET` | `/api/product/{id}` | Fetch single product details by ID |
| `GET` | `/api/product/{id}/image` | Fetch product image binary |
| `POST` | `/api/product` | Add a new product (Multipart Form: `product` JSON + `imageFile`) |
| `PUT` | `/api/product/{id}` | Update an existing product |
| `DELETE` | `/api/product/{id}` | Delete product by ID |
| `GET` | `/api/products/search?keyword={kw}` | Search products by keyword |
| `GET` | `/api/users` | Fetch list of users |
| `POST` | `/api/register` | Register a new user |
| `POST` | `/api/login` | Authenticate user credentials |

---

## 📝 License

This project is licensed under the MIT License.
