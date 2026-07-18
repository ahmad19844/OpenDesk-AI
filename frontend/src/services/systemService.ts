import api from "../api/api";
import type { SystemInfo } from "../types/system";

export async function getSystemInfo(): Promise<SystemInfo> {
    const response = await api.get("/system/info");
    return response.data;
}
