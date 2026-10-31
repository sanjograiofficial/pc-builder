import type { CPU, IntelCPU, AmdCPU } from "../types/components";

export const cpus: CPU[] = [
  {
    id: 1,
    brand: "Intel",
  },
  {
    id: 2,
    brand: "AMD",
  },
];

export const intelCpus: IntelCPU[] = [
  {
    id: "cpu-001",
    name: "Intel Core i5-12400F",
    brand: "Intel",
    socket: "LGA1700",
    cores: 6,
    threads: 12,
    tdp: 65,
    price: 120,
  },
];
export const amdCpus: AmdCPU[] = [
  {
    id: "cpu-002",
    name: "Ryzen 5 5600",
    brand: "AMD",
    socket: "AM4",
    cores: 6,
    threads: 12,
    tdp: 65,
    price: 120,
  },
];
