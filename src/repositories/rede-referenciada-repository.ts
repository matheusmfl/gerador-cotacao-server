import { HospitaisPlano, Hospital } from "@prisma/client";

export interface RedeReferenciadaRepository {
  create(planoId: string, hospitalId: string): Promise<HospitaisPlano>
  delete(planoId: string, hospitalId: string): Promise<void>
  findByPlanoId(planoId: string): Promise<HospitaisPlano[] | null>
  findByHospitalId(hospitalId: string): Promise<HospitaisPlano[] | null>
  getHospitals(planoId: string): Promise<Hospital[]>
}