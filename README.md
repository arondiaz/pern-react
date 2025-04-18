# Aplicación de Administración de productos (Stack PERN)

Este es un proyecto full-stack desarrollado con el stack **PERN** (PostgreSQL, Express, React, Node.js) que permite a los usuarios gestionar una lista de productos almacenados en una base de datos PostgreSQL.

## ✨ Funcionalidades

- Ver todos los productos
- Agregar nuevos productos
- Editar nombre, disponibilidad y precio de un producto
- Eliminar productos
- La interfaz se actualiza en tiempo real tras cada acción

## 🧱 Tecnologías utilizadas

- **Frontend**: React + TypeScript
- **Backend**: Node.js + Express
- **Base de datos**: PostgreSQL
- **ORM**: Sequelize
- **API DOCS**: Swagger
- **TEST**: Jest

## 🚀 Instalación

### 1. Clona el repositorio:

    git clone https://github.com/arondiaz/pern-react

### 2. Instala las dependencias del Backend:

    cd rest_api
    npm install

### 3. Configura la base de datos PostgreSQL y las variables de entorno (por ejemplo, en .env):

    DATABASE_URL= "postgresql://...."

    PORT= 4444

    FRONTEND_URL=http://localhost:5173


### 4. Inicia el servidor

    npm run dev    

### !! Documentación de endpoints con Swagger en : http://localhost:4444/docs/




### 5. Instala las dependencias del Frontend:

    cd frontend/

    npm install

### 6. Configura el archivo .env.local:

    VITE_API_URL=http://localhost:4444

### 7. Inicia el frontend:

    npm run dev