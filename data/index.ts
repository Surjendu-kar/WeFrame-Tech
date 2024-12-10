import TableIcon from "@/public/SimilarProducts/tableImg.webp";

interface NavItem {
  id: number;
  name: string;
  selected: boolean;
}

export const navItems: NavItem[] = [
  { id: 1, name: "ART DE LA TABLE", selected: true },
  { id: 2, name: "MOBILIER", selected: false },
  { id: 3, name: "NAPPAGE", selected: false },
  { id: 4, name: "MATÉRIEL DE SALLE", selected: false },
  { id: 5, name: "CUISINE", selected: false },
  { id: 6, name: "BARBECUE", selected: false },
  { id: 7, name: "TENTE", selected: false },
  { id: 8, name: "CHAUFFAGE", selected: false },
  { id: 9, name: "PODIUM - PISTE DE DANSE", selected: false },
  { id: 10, name: "SON ET LUMIÈRE", selected: false },
  { id: 11, name: "PACKS", selected: false },
  { id: 12, name: "CONSOMMABLES", selected: false },
];

export const suggestions = [
  {
    text: "fourchettes",
    icon: "rotate", // RotateRightIcon
  },
  {
    text: "fourchette grande",
    icon: "search", // SearchIcon
  },
  {
    text: "fourchette Piranha",
    icon: "search", // SearchIcon
  },
  {
    text: "fourchette",
    icon: "search", // SearchIcon
  },
  {
    text: "Fourchettes",
    subText: "ART DE LA TABLE > FOURCHETTES",
    icon: "grid", // GridViewIcon
  },
  {
    text: "Fourchette",
    icon: "tag", // LocalOfferIcon
  },
  {
    text: "Sport addict",
    icon: "tag", // LocalOfferIcon
  },
];

export const products = [
  {
    id: 1,
    name: "Produit Simple",
    category: "ART DE LA TABLE",
    price: 7,
    unit: "20 pièces",
    image: TableIcon,
  },
  {
    id: 2,
    name: "Produit Gamme",
    category: "ART DE LA TABLE",
    price: 2.2,
    unit: "20 pièces",
    image: TableIcon,
  },
  {
    id: 3,
    name: "Jewel Grand Couteau",
    category: "ART DE LA TABLE",
    price: 7,
    unit: "20 pièces",
    image: TableIcon,
  },
  {
    id: 4,
    name: "Piranha Fourchette à Zakouski",
    category: "ART DE LA TABLE",
    price: 2.2,
    unit: "20 pièces",
    image: TableIcon,
  },
];
