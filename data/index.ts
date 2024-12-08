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
