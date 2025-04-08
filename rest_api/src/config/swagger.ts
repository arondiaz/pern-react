import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.2",
    //agrupacion de endpoints, en caso de necesitar otro endpoint, como para usuarios por ejemplo.. creamos otro objeto dentro del tag
    tags: [
      {
        name: "Products",
        description: "API operations related to products",
      },
      // {
      //   name: "Usuarios",
      //   description: "API operations related to products",
      // },
    ],
    info: {
      title: "Rest API Node.js / Express / TypeScript",
      version: "1.0.0",
      description: "API Docs for Products",
    },
  },
  apis: ["./src/router.ts"],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
