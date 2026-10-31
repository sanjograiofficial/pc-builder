interface CPU {
  id: number;
  brand: string;
}
interface IntelCPU {
  id: string;
  name: string;
  brand: string;
  socket: string;
  cores: number;
  threads: number;
  tdp: number;
  price: number;
}
interface AmdCPU {
  id: string;
  name: string;
  brand: string;
  socket: string;
  cores: number;
  threads: number;
  tdp: number;
  price: number;
}
interface GPU {
  id: string;
  name: string;
  brand: string;
  socket: string;
  VRAM: number;
  price: number;
}
interface MOBO {
  id: string;
  name: string;
  brand: string;
  socket: string;
  model: string;
  price: number;
}

export type { CPU, IntelCPU, AmdCPU, GPU, MOBO };
