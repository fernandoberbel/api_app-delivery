import { Router } from "express";

const router = Router();

// router.post("/users/login", (req, res) => {
//   const { email, password } = req.body;

//   if (email == "fernando@email.com" && password == "123") {
//     res.status(200).json({
//       id_user: 123,
//       email: "fernando@email.com",
//       name: "Fernando",
//     });
//   } else {
//     res.status(401).json({
//       error: "E-mail ou senha invalida",
//     });
//   }
// });

// router.post("/users", (req, res) => {
//   const {
//     name,
//     email,
//     password,
//     address,
//     complement,
//     district,
//     city,
//     state,
//     zip,
//   } = req.body;

//   res.status(201).json({
//     id_user: 123,
//     name,
//     email,
//     password,
//     address,
//     complement,
//     district,
//     city,
//     state,
//     zip,
//   });
// });

// router.get("/restaurants", (req, res) => {
//   const busca = req.query.busca;

//   res.json({
//     menssagem: "Nenhum restaurantge encontrado com o termo:" + busca,
//   });

//   // res.status(200).json([
//   //   { restaurante: 1, nome: "Burguer King" },
//   //   { restaurante: 2, nome: "Mc Donanlds" },
//   // ]);
// });

// router.get("/categories", (req, res) => {
//   res.status(200).json([
//     { id_categories: 1, categoria: "Burguers" },
//     { id_categories: 2, categoria: "Pizzas" },
//     { id_categories: 3, categoria: "Fritas" },
//   ]);
// });

export default router;
