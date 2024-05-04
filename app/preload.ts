import { contextBridge } from "electron";
import { getApiHandlers } from "./libs/handlers";

contextBridge.exposeInMainWorld('api', getApiHandlers());