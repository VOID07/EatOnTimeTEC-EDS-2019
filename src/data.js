import React from "react";
import Assessment from "material-ui/svg-icons/action/assessment";
import GridOn from "material-ui/svg-icons/image/grid-on";
import PermIdentity from "material-ui/svg-icons/action/perm-identity";
import Web from "material-ui/svg-icons/av/web";
import { cyan600, pink600, purple600 } from "material-ui/styles/colors";
import ExpandLess from "material-ui/svg-icons/navigation/expand-less";
import ExpandMore from "material-ui/svg-icons/navigation/expand-more";
import ChevronRight from "material-ui/svg-icons/navigation/chevron-right";

import Firebase from "./components/Firebase/firebase";

const data = {
  menus: [
    { text: "DashBoard", icon: <Assessment />, link: "/dashboard" },
    { text: "Editar/Añadir Platillos", icon: <Web />, link: "/form" },
    { text: "Menú", icon: <GridOn />, link: "/table" },
    { text: "Tiempo", icon: <Web />, link: "/tiempo" },
    { text: "Points", icon: <Web />, link: "/points" },
    { text: "Recomendaciones", icon: <Web />, link: "/recomendar" },
    { text: "Dinero en descuentos", icon: <Web />, link: "/descuentos" },
    { text: "Comentarios", icon: <GridOn />, link: "/satisfaccion" },
    { text: "Login Page", icon: <PermIdentity />, link: "/login" }
  ],
  tablePage: {
    items: [
      { id: 1, name: "Rice & Beans", price: "$150.00", category: "Carne" },
      { id: 2, name: "Patacones", price: "$250.00", category: "Ensalada" },
      {
        id: 3,
        name: "Gallos de Salchichón",
        price: "$350.00",
        category: "Carne"
      },
      { id: 4, name: "Fresco sorpresa", price: "$170.00", category: "Pasta" },
      {
        id: 5,
        name: "Protrínas mixtas",
        price: "$450.00",
        category: "Desconocido"
      },
      { id: 6, name: "Ensalada César", price: "$200.00", category: "Ensalada" }
    ]
  },
  satisfaccion: {
    promedio: [{ valor: 4.1 }]
  },
  feedback: {
    comentarios: [
      { id: 1, text: "Excelente servicio" },
      { id: 2, text: "Buena comida" },
      { id: 3, text: "Han bajado las filas bastante" }
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {
        id: 1,
        title: "Orden 1",
        text: "2 Gallos de salchichón"
      },
      { id: 2, title: "Orden 2", text: "3 órdenes de patacones" },
      {
        id: 3,
        title: "Apple iPhone 6",
        text: "1 ensalada, 1 fresco"
      }
    ],
    dinero: [{ valor: "1000000" }],
    monthlySales: [
      { name: "Jan", uv: 3700 },
      { name: "Feb", uv: 3000 },
      { name: "Mar", uv: 2000 },
      { name: "Apr", uv: 2780 },
      { name: "May", uv: 2000 },
      { name: "Jun", uv: 1800 },
      { name: "Jul", uv: 2600 },
      { name: "Aug", uv: 2900 },
      { name: "Sep", uv: 3500 },
      { name: "Oct", uv: 3000 },
      { name: "Nov", uv: 2400 },
      { name: "Dec", uv: 2780 }
    ],
    newOrders: [
      { pv: 2400 },
      { pv: 1398 },
      { pv: 9800 },
      { pv: 3908 },
      { pv: 4800 },
      { pv: 3490 },
      { pv: 4300 }
    ],
    browserUsage: [
      { name: "Chrome", value: 800, color: cyan600, icon: <ExpandMore /> },
      { name: "Firefox", value: 300, color: pink600, icon: <ChevronRight /> },
      { name: "Safari", value: 300, color: purple600, icon: <ExpandLess /> }
    ]
  }
};

export default data;
